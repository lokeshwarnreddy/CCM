require('dotenv').config();
const sql = require('mssql');

const config = {
  server: process.env.SQL_SERVER,
  port: parseInt(process.env.SQL_PORT, 10),
  database: process.env.SQL_DATABASE,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

console.log('Connecting to Azure SQL with:');
console.log('Server:', config.server);
console.log('Database:', config.database);
console.log('User:', config.user);


async function initSchema() {
  try {
    const pool = await sql.connect(config);
    await pool.request().query(`
      IF NOT EXISTS (
        SELECT * FROM INFORMATION_SCHEMA.TABLES 
        WHERE TABLE_NAME = 'Demo'
      )
      BEGIN
        CREATE TABLE Demo (
          id INT IDENTITY(1,1) PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          phone VARCHAR(20),
          organization VARCHAR(100),
          message TEXT,
          submitted_at DATETIME DEFAULT GETDATE()
        )
      END
    `);
    console.log('Schema initialized ✅');
    sql.close();
  } catch (err) {
    console.error('Schema creation error:', err);
    sql.close();
  }
}

initSchema();
