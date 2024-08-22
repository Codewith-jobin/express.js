var express=require('express')
var multer= require('multer')
var bodyparser=require('body-parser')
var app=express()
var upload=multer()


app.set('view engine', 'pug')
app.set('views','./views')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(upload.array())
app.use(express.static('public'))//public file is not given
 

app.get('/g',function(req,res){
    res.render('formm')
})
app.post('/g',function(req,res){
    const username= req.body.email;
    const passwordd=req.body.password

    console.log(username)
    console.log(passwordd)
    // const say= req.body.say 
    // const to = req.body. to
    // console.log(say)
    // console.log(to)
    // res.send(`received your request as say= ${say} to as ${to}`)
})

app.listen(3034)