const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    date: {type: Date, default: Date.now},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

});

module.exports = new mongoose.model('Blog', blogSchema);