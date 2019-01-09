const express = require('express');
const router = express.Router();


router.get('/blog/new', (req, res) => {
    res.send("new");
});

module.exports = router;