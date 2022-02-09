//  we have to install express js in local envirnment
// using npm i express ;

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// serve static file of html 

// console.log(__dirname);
// console.log(path.join(__dirname,"../index.js"))

const pathrequire = path.join(__dirname,"../public")

app.use(express.static(pathrequire));
// serving static file 


// below are routes and add some routing pages

app.get("/",(req,res)=>{
    res.send("This is a home page ");
})

app.get("/contact",(req,res)=>{
    res.send("this is a contact us page");
    // send responce as a html code
    res.send("<h1> hello bhau</h1>");
    //  send json 
    res.send([{
       id:1,
       name:"hello" 
    },{
        id:1,
        name:"hello" 
     },{
    },{
        id:1,
        name:"hello" 
     },{
    }
])
})

app.get("/about",(req,res)=>{
    res.status(200).send("this is a about  us page");
})


// app is listing on given port
app.listen(PORT,()=>{
    res.send("Server is running on port 8000")
})




