const express = require('express');
const router = express.Router();

const Blog = require('../models/blog');

// [new Route]
// dispaly new form for adding new blog
router.get('/blog/new', (req, res) => {
    res.render('./blog/new')
});

// [create Route]
// create new blog
router.post('/blog', (req, res) => {
    
});



module.exports = router;