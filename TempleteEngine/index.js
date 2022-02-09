const express = require('express');
const path = require('path')
const app = express();





// to set the view engine 
app.set("view engine","hbs");

// templete engine root
app.get("",(req,res)=>{
    res.render('index')
})

app.use(express.static(pathrequire));

// app.get('/',(req,res)=>{
//     res.send("hello welcome to our website");
// })







app.listen(8000,()=>{
    console.log("Server is start on port 8000");
})