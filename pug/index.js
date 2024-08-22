var express= require('express')
var app= express()

app.set('view engine','pug')
app.set('views','./views')
app.get('/de',function(req,res){
    res.render('first')
})
app.listen(3013)