const express = require('express');
const router = express.Router();

const {getAllTasks,postAllTasks,getTask,updateTask,deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks); 
router.route('/').post(postAllTasks); 
router.route('/:id').get(getTask); 
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask); 

module.exports = router;