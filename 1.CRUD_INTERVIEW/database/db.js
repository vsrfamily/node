const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud",
    multipleStatements:true
});

conn.connect((err) => {
    if(err) throw err;
    console.log("Database connected....");

});
module.exports = conn;