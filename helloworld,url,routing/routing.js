// var express = require('express');
// var app = express();

// app.get('/specific', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/specific', function(req, res){
//    res.send("You just called the post method at 'specific'");
// });

// app.listen(3012);
var express=require('express')
var gui=express();
gui.get('/exact',function(req,res){
    res.send('the value is getting at "exact"')
})
gui.post('/exact',function(req,res){
    res.send("you vallel")
})

gui.listen(3013)