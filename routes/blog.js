const express = require('express');
const router = express.Router();


router.get('/blog/new', (req, res) => {
    res.render('./blog/new')
});

module.exports = router;