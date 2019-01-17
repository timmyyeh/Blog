const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');
const Blog = require('./models/blog');
const User = require('./models/user');
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
app.use(session({
    secret: '123huile',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session())


passport.use(new LocalStrategy(
    function (username, password, done) {
        console.log(username + " " + password);
        User.findOne({username: username}, function(err, user) {
            if (err) return done(err);
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// middleware to check whether user is logged in or not
app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
});

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