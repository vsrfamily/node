
const express = require('express');
const router = express.Router();
const conn = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req,res) => {
    var sql = "SELECT id, username,email FROM Register";
    conn.query(sql, (err,rows,field) => {
        if(err) throw err
        res.send(rows)
    })
});

//get the record by id
router.get('/:id', (req,res) => {
    let id = req.params.id;
    var sql = "SELECT id, username,email FROM Register WHERE ID = ?";
    //console.log("Register - login - Id: ", id);
    conn.query(sql, id, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    })
});

//post data

router.post('/insert', async (req,res) => {
    //console.log("route.insert called....");
    try {
        //console.log("route.insert - Username: ", req.body.Username, " req.body.Password: ", req.body.Password, " req.body.Email: ", req.body.Email);
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);
        //console.log("hashedPassword: ", hashedPassword);
        var sql = "INSERT INTO Register(Username, Password, Email) values('"
        + req.body.Username + "', '"
        + hashedPassword + "', '"
        + req.body.Email + "')";
    
        conn.query(sql, (err) => {
            if(err) 
                throw err;
            
            console.log("value stored successfully");
        });
        res.send("Value inserted successfully");
    }
    catch(regerror)
    {
        res.send(regerror);
    
    }
        
    });


//update the username by id

router.put('/:id', (req,res) => {
   
    var sql = "UPDATE Register SET Username =? WHERE ID = ?";
    var Username = req.body.Username;
    var ID = req.params.id;
   
    //console.log("Register - Login - Update: ", id, " username: ", Username);    
    conn.query(sql,  [Username, ID] , (err) => {
        if(err) throw err;
        res.send("Record has been updated");

    })
});

//Delete the employee by id

router.delete('/:id', (req,res) => {
    var sql = "DELETE FROM Register WHERE ID = ?";
    var ID = req.params.id;
    //console.log("Register - Login - Delete - Id: ", ID);
    conn.query(sql, [ID], (err) => {
        if(err) throw err;
        res.send("Deleted successfully");
    })
});

module.exports = router;
