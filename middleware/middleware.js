var express=require('express')
var app= express();
app.use(function(req,res,next){
    console.log('a new request received at ' + Date.now());
    next();
})
app.get('/things',function(req ,res){
    res.send('Things')
})
app.listen(3007)