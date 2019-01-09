const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blog/new', (req, res) => {
    res.send("new");
});

app.listen(8080, 'localhost', function() {
    console.log("Server is now running..");
});