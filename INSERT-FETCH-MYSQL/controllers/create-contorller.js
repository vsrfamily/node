var createModel = require('../models/create-model');
module.exports = {
    crudForm: function (req, res) {
        res.render('crud-form');
    },
    createData: function (req, res) {
        const inputData = {
            Ename: req.body.Ename,
            Designation: req.body.Designation,
            Salary: req.body.Salary
            
        };
        createModel.createData(inputData, function (data) {
            res.redirect('/crud/form');
            console.log(data.affectedRows + " record created");
          
        });
    }
}