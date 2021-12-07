const express = require('express');
const mysql = require('mysql');
const EmployeeRouter = require('./routes/route');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/employees', EmployeeRouter);
const conn = require('./database/db');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.static('./Htmlfile'));

// get Registration page
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/Htmlfile/register.html");
});

app.post('/register', async (req,res) => {
    
    //console.log("req.body.Username: ", req.body.Username, " req.body.Password: ", req.body.Password, " req.body.Email: ", req.body.Email );
    try {
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);
        var sql = "INSERT INTO Register (Username, Password, Email) values('"
        + req.body.Username + "', '"
        + hashedPassword + "', '"
        + req.body.Email + "')";
        
        conn.query(sql, (err) => {
            if(err) throw err
            console.log("value stored successfully");
        });
        
        res.redirect("/login");
    }
    catch(regerror)
    {
        console.log(regerror);
        res.send(regerror);    
    }
        
    });
    
    app.get("/login", (req,res) => {
        res.sendFile(__dirname + "/Htmlfile/login.html")
    });
    
    //get the username and password from the database for login
    
    app.post('/login', (req,res) => {
        let Username = req.body.Username;    
    
        conn.query("SELECT username, password FROM Register where Username=? ",
         [Username], (error,results,fields) => {
             //console.log("Register - login - results: ", results, " results length: ", results.length);
            if(results.length > 0) {
                bcrypt.compare(req.body.Password, results[0].password, function(err, result) {
    
                    if (result)
                        res.redirect("/success");
                    else
                        res.redirect("/failure");
                });
            }
            else {
                res.send("<h1> Username / Password is incorrect </h1>");
            }        
        })
    });
    
    app.get("/success", (req,res) => {
        res.sendFile(__dirname + "/Htmlfile/success.html");
    });
    
    app.get("/failure", (req,res) => {
        res.sendFile(__dirname + "/Htmlfile/failure.html");
    });

    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
    