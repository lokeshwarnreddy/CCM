
const express = require('express');
const sql = require('mssql');
const router = express.Router();
const { sendEmail, getAccessToken } = require('./Index');

const config = {
  server: process.env.SQL_SERVER,
  port: parseInt(process.env.SQL_PORT),
  database: process.env.SQL_DATABASE,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

// Admin login route
router.post('/api/admin-login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('username', sql.VarChar(100), username)
            .query('SELECT * FROM Admins WHERE username = @username');
        const admin = result.recordset[0];
        if (admin && password === admin.password) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
    
});

module.exports = router;
// Export sendEmail and getAccessToken for password reset
module.exports.sendEmail = sendEmail;
module.exports.getAccessToken = getAccessToken;
