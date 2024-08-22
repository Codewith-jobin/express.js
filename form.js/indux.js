const { response } = require("express");

document.addEventListener('DOMContentLoaded',function(){
    const formm=document.querySelector('form')
    formm.addEventListener('submit',function(e){
        e.preventDefault();

        const formdata=new formdata(formm);
        fetch('/g',{
            method:"POST",
            body:formdata

        })
        .then(response => response.text())
        .then(data=> {
            console.log("the data response from server",data)
        } )
        .catch(error=>{
            console.log("error",error)
        } )




    })
})