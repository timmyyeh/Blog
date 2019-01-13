const app = require('express')
const router = app.Router();

router.get('/user/login', (req, res) => {
    res.send('login');
});

router.get('/user/logout', (req, res) => {
    res.send('logout');
});

router.get('/user/new', (req, res) => {
    res.render('./user/new');
})

router.post('/user', (req, res) => {
    res.send('new user');
})

module.exports = router;