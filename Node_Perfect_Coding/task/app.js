const express = require('express');
require('dotenv').config();

const app = express();
const TaskRouter = require('./routes/route')
const connectDB = require('./database/connect')

app.use(express.json());
app.use('/api/v1/tasks', TaskRouter);


const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port ${port}`))
       
    }catch(err) {
    console.log(err);
    }
}

start()

//to run
//app.get('/api/v1/tasks') - get all the tasks
//app.post('/api/v1/tasks') - create a new task
//app.get('/api/v1/tasks/:id') - get single task
//app.patch('/api/v1/tasks/:id') - update task
//app.delete('/api/v1/tasks/:id') - delete task
