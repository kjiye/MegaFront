const config = require('./settings');
const mysql = require('mysql');

const connection = mysql.createConnection(config.connect);

connection.connect(function(err){
    if (err) {
        console.log("연결실패 : ", err);
        return;
    }
    console.log("연결성공!!");
});

module.exports = connection;