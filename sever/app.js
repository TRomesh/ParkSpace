var express = require('express');
var app = express();
var parser = require('body-parser');

var port = 3122;

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

app.get('/users',function (req,res){
    res.render('./../app/index.ejs',{});
}).use(express.static(__dirname + '/../temp')).listen(port);
