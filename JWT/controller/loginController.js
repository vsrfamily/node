

const Login = require('../models/loginModel');
const jwt = require('jsonwebtoken');
//const {createTokenUser,attachCookiesToResponse} = require('../utils');

const getAllUsers = async(req,res) => {
    const login = await Login.find({})
    res.status(200).json({ login, count: login.length})
   
}

const getSingleUser = async(req,res) => {
    const {id} = req.params;
    const login = await Login.findById(id);
    
    res.status(200).json({login})
}

// const createUser = async(req,res) => {
//     const {name, password,age,department} = req.body;
//     const login = await Login.create(req.body)
//     res.status(200).json({login})
   
// }

///===============
const createUser = async (req, res) => {
    const { name, age, department } = req.body;
    
    const login = await Login.create(req.body)
const token = jwt.sign({ name, age, department }, process.env.JWT_SECRET, 
    {
    expiresIn: '30d',
})

res.status(200).json({ msg: 'user created', token, login })
}

//res.status(200).json({ login })

//==============================

const updateUser = async(req,res) => {
     const {id} = req.params;
     const {name} = req.body;
     const login = await Login.findByIdAndUpdate(id,req.body);
     res.status(200).json({login})

      
}

const deleteUser = async(req,res) => {
    const {id} = req.params;
    const login = await Login.findByIdAndDelete(id);
    res.status(200).json({login})
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}
