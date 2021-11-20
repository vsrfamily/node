var db = require('../database');
module.exports = {
    deleteData: function (deleteId, callback) {
        var sql = 'DELETE FROM employee WHERE Eid = ?';
        db.query(sql, [deleteId], function (err, data) {
            if (err) throw err;
            return callback(data);
        });
    }
}