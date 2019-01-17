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
    const { title, content } = req.body.blog;
    Blog.create({
        title: title,
        content: content
    })
    .then((blog) => {
        console.log(blog);
        res.redirect('/');
    })
    .catch(err => console.log(err));
});

// [show Route]
// show detail of the blog
router.get('/blog/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(blog => {
            res.render('./blog/show', { blog });
        })
        .catch(err => console.log(err));
});





module.exports = router;