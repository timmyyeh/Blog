const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    blogs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}],
    type: {
        type: String,
        default: 'user'
    }
});

module.exports = new mongoose.model('User', userSchema);