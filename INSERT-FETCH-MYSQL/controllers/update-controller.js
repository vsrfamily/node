var updateModel = require('../models/update-model');
module.exports = {
    editData: function (req, res) {
        const editId = req.params.id;
        updateModel.editData(editId, function (data) {
            res.render('crud-form', { editData: data });
            console.log(data.affectedRows + " record fetched");
        });

    },
    updateData: function (req, res) {
        const inputData = {
            Ename: req.body.Ename,
            Designation: req.body.Designation,
            Salary: req.body.Salary
            
        };
        const updateId = req.params.id;
        updateModel.updateData(inputData, updateId, function (data) {
            res.redirect('/crud/read');
            console.log(data.affectedRows + " record(s) updated");
        });
    }
}