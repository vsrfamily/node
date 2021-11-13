const express = require('express')
const mysql = require('mysql')

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_employee',
    multipleStatements:true
})

con.connect(function(err) {
    if(err) throw err;
    console.log("Database connected");
})

//get all the records

app.get('/employees', (req,res) => {
    var sql = "SELECT * FROM employee";
    con.query(sql, (err,rows,field) => {
        if(err) throw err;
        res.send(rows)
    })
})

//get the record by id
app.get('/employees/:id', (req, res) => {
    var sql = "SELECT * FROM employee where EmpID = ?";
    const EmpID = req.params.id;
    con.query(sql, EmpID, (err, rows, field) => {
        if (err) throw err
        res.send(rows);
    })
})


//post the data

app.post('/employees/insert', (req, res) => {
    var sql = "INSERT INTO employee VALUES(null,'"

        + req.body.Name + "','"
        + req.body.EmpCode + "','"
        + req.body.Salary + "')";
    con.query(sql, function (err) {
        if (err) throw err
        res.send("inserted Successfully");
    })

})



//update the name only by id

app.put('/employees/:id', (req,res) => {
    //con.query("UPDATE employee SET Name = ? WHERE EmpID=?", [req.body.Name, req.params.id], (err,rows,fields) =>{
    var sql = "UPDATE employee SET Name = ? WHERE EmpID=?";
    var Name = req.body.Name;
    var EmpID = req.params.id;
    con.query(sql, Name, EmpID, (err) => {
        if (err) throw err
        res.send("record has been updated");

    })
        
})

// Delete the employee by id

app.delete('/employees/:id', (req, res) => {
    var sql = "DELETE FROM employee where EmpID = ?";
    var EmpID = req.params.id;
    con.query(sql, EmpID, function (err) {
        if (err) throw err
        res.send("Deleted Successfully");
    })



})

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
})
