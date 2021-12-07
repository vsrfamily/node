const express = require('express');
const TaskRouter = require('../routes/route');
const Task = require('../models/Task');

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    } catch(err) {
        res.status(500).json({msg:err})
    }
    
}

const postAllTasks = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err)  {
        res.status(500).json({msg:err})
    }
    
}

const getTask = async (req,res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id)
        
        if(!task) {
            return res.status(404).json({msg:`no task with id:  ${id}`})
        }
        res.status(200).json({task})
    } catch(err)  {
        res.status(500).json({msg:err})
    }
    
}

const updateTask = async (req,res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate(id,req.body)
        res.status(201).json({task})
    }
   
    catch(err)  {
        res.status(500).json({msg:err})
    }
}
const deleteTask = async (req,res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id)
        if(!task) {
            return res.status(404).json({msg:`no task with id:  ${id}`})
        }
        res.status(200).json({task})
    }
       catch(err)  {
        res.status(500).json({msg:err})
    }
}


module.exports = {
    getAllTasks,
    postAllTasks,
    getTask,
    updateTask,
    deleteTask}


