var express=require('express');
var app=express();
app.get('/things/:id/:name',function(req,res){
    res.send('the id you specifies:' +req.params.id + "the user is" + req.params.name)
})
app.listen(3002)