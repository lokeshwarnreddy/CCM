-- 1. Create the Admins table
CREATE TABLE Admins (
  id INT IDENTITY(1,1) PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL
);
