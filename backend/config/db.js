const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

// Singleton pattern for MySQL connection to prevent multiple handshakes
const db = mysql.createConnection({
  host: '127.0.0.1', 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


// Check for existing connection state and connect if not already connected
if (db.state === 'disconnected') {
  db.connect((err) => {
    if (err) {
      console.error('Database connection failed: ', err);
      return;
    }
    console.log('MySQL Connected...');
  });
} else {
  console.log('MySQL already connected.');
}

module.exports = db;
