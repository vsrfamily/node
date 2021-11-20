var deleteModel = require('../models/delete-model');
module.exports = {
    deleteData: function (req, res) {

        const deleteEid = req.params.id;
        deleteModel.deleteData(deleteEid, function (data) {
            res.redirect('/crud/read');
            console.log(data.affectedRows + " record deleted");
        });

    }
}