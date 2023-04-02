const mysql = require("mysql2");
const pw = require("./pw.js")
var config =module.exports;

config.db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: `${pw}`,
    database: "canwehabit",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

config.express = {
    port: 3001
};