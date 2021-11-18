// GET: http://localhost:3000/student
// GET: http://localhost:3000/student/:id
// POST: http://localhost:3000/student
// PATCH: http://localhost:3000/student/:id
// DELETE: http://localhost:3000/student/:id


const express = require('express')
const app = express();
const mongoose = require("mongoose")
const connectDB = require('./db/connect')
require('dotenv').config();

//mongoose ------ start(write it in .env)
//mongoose.connect("mongodb+srv://username:password@node.emz4v.mongodb.net/studentDBex?retryWrites=true&w=majority")
//mongoose ------- end

const studentRouter = require('./routes/students')

app.use(express.json())
app.use('/student', studentRouter)

const port = 3000;
const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is running on port ${port}`));

    }catch(err){
        console.log(err)
    }
}
start();