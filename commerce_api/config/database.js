"use strict";

const mysql = require("mysql");
const config = require("./settings");

const connection = mysql.createConnection(config.connect);
connection.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("database connected!");
});

module.exports = connection;
