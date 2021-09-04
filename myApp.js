var express = require('express');
var app = express();

function greet(req, res){
    res.sendFile(absolutePath)
}

const absolutePath = __dirname + "/views/index.html"

app.get("/", greet)




































 module.exports = app;
