// GET: http://localhost:3000/student
// GET: http://localhost:3000/student/:id
// POST: http://localhost:3000/student
// PATCH: http://localhost:3000/student/:id
// DELETE: http://localhost:3000/student/:id


const express = require('express')
const app = express();

//mongoose - start
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/StudentDBex")
const con = mongoose.connection
con.on('open',() => {
    console.log("Database connected")
})

//mongoose - end

const studentRouter = require('./routes/students')

app.use(express.json())
app.use('/student', studentRouter)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
