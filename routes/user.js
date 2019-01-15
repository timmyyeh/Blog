const app = require('express')
const password = require('passport');
const User = require('../models/user');
const router = app.Router();

router.get('/user/login', (req, res) => {
    res.render('./user/login');
});

router.post('/user/login', password.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/user/login'
}));

router.get('/user/logout', (req, res) => {
    res.send('logout');
});

router.get('/user/new', (req, res) => {
    res.render('./user/new');
})

router.post('/user', (req, res) => {
    const user = req.body.user;
    if (user.password !== user.password_confirmation) {
        res.redirect('/user/new');
    }

    User.create({
        username: user.username,
        password: user.password
    })
    .then((user) => {
        console.log(user);
        res.redirect('/');
    })
    .catch(err => console.log(err));
})

module.exports = router;