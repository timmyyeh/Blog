const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Blog = require('./models/blog');
const URL = require('./config/config')
const app = express();

mongoose.connect(URL, {useNewUrlParser: true, dbName: 'blog'})
        .then(
            () => { console.log('Database Successfully Connected')},
            err => { console.log('Failed to connect to the Database')}
        );
// router
const blogRouter = require('./routes/blog.js')
const userRouter = require('./routes/user.js')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    Blog.find({})
        .then((blogs) => {
            res.render('index', { blogs });
        })
        .catch(err => console.log(err));
    
});

app.use(blogRouter)
app.use(userRouter)


app.listen(8080, 'localhost', function() {
    console.log("Server is now running..");
});