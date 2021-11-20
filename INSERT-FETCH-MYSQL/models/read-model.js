var db = require('../database');
module.exports = {
    readData: function (callback) {
        var sql = 'SELECT * FROM employee';
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            return callback(data);
        });
    }

}