const express = require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.json());

var bodyParser = require('body-parser')
const db = require('./db')

app.use('/', require('./route'));

app.listen(5000, () => {
    console.log("connected to server")
})
