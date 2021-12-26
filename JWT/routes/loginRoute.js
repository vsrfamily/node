
const express  = require('express');
const router = express.Router();
const {getAllUsers,getSingleUser,createUser,updateUser,deleteUser} = require('../controller/loginController');


router.route('/').get(getAllUsers);
router.route('/:id').get(getSingleUser);
router.route('/').post(createUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);



module.exports = router;