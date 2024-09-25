const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_webbanhang",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected Success");
});

module.exports = db;
