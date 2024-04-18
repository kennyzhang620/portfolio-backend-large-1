const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

var adapter = mysql.createPool({
    host: process.env.DB_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

adapter.query = util.promisify(adapter.query).bind(adapter);
adapter.getConnection = util.promisify(adapter.getConnection).bind(adapter);
adapter.end = util.promisify(adapter.end).bind(adapter);

module.exports = adapter;