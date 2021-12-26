
const mongoose = require('mongoose');
//const validator = require('validator');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'provide valide name'],
        minlength: 3,
        maxlength: 50,
    },
    password: {
        type: String,
        required:[true, 'please provide strong password'],
        maxlength: 6,
    },

    age: {
        type: Number,
        required: [true, 'provide valid age'],
    },

    department: {
        type: String,
        required: [true, 'provide valid department'],
        maxlength:20,
    },
});

LoginSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


module.exports = mongoose.model('Login', LoginSchema);