const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    }
});

const User = mongoose.model('Users', userSchema);
module.exports = User;