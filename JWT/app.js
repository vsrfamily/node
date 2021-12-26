require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const loginRouter = require('./routes/loginRoute');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LoginDB');

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use('/api/login', loginRouter);

const port = 3000;

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
       
});
