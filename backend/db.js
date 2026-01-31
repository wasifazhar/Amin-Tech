const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Pgccampus3", // <-- put your MySQL password
  database: "amin_tech",
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    return;
  }
  console.log("✅ MySQL Connected");
});

module.exports = db;
