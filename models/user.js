const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    blogs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}],
    type: {
        type: String,
        default: 'user'
    }
});

module.exports = new mongoose.model('User', userSchema);