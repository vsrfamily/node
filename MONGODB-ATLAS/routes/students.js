const express = require('express');
const router = express.Router();
const student = require('../models/student-model')

//get all the students details
router.get('/', async(req,res) => {
    try {
        const students = await student.find()
        res.json(students)
    }catch(err){
        res.send(err)
    }
})

//get record by id

router.get('/:id', async(req, res) => {
    try{
        const students = await student.findById(req.params.id)
        res.json(students)
    }catch(err){
    res.send(err)

    }
})

//post

router.post('/', async(req,res)=> {
   
        const students = new student({
            name:req.body.name,
            class:req.body.class,
            age:req.body.age
        })
    try {
            
            const stu = await students.save()
            res.json(stu)
       
    }catch(err) {
        res.send(err)
    }
    
})

//patch
router.patch('/:id', async(req,res)=> {
    
    try {
        const students = await student.findByIdAndUpdate(req.params.id)
        students.name = req.body.name
        res.json(students)

    } catch(err) {
    res.send(err)
    }
})

//delete

router.delete('/:id', async(req,res) => {
    try{
        const students = await student.findByIdAndDelete(req.params.id)
        res.json(students)
    }catch(err) {
        res.send(err)
    }
})

    


module.exports = router;