//  we have to install express js in local envirnment
// using npm i express ;

const express = require('express');
const app = express();
const PORT = 8000;



// below are routes

app.get("/",(req,res)=>{
    res.send("This is a home page ");
})

app.get("/contact",(req,res)=>{
    res.send("this is a contact us page")
})


// app is listing on given port
app.listen(PORT,()=>{
    res.send("Server is running on port 8000")
})




