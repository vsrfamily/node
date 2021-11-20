var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234!@#$',
    database: 'Employee_Details'
});
con.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = con;