var express = require('express');
var createController = require('../controllers/create-contorller');
var router = express.Router();
// to display form
router.get('/form', createController.crudForm);
// to create data
router.post('/create', createController.createData);
module.exports = router;