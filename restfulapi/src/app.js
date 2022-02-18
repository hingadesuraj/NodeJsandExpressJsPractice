const express = require('express');
const connectToMongo = require('./db/connection');
const Student = require('./models/students');
// import student router
const studentRouter = require('../src/routers/students');


const app = express();
connectToMongo();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());


// route using express router
app.use(studentRouter);

// create a new students ( using promices in javascript)

// app.post('/students', (req,res)=>{
//      
//     console.log(req.body);
//     const user = new Student(req.body);
//     const user = user.save(); 
//      saveData.then(()=>{
//          res.status(201).send(user);
//      }).catch((error)=>{
//          res.status(400).send(error);
//          console.error();
//      });
//        res.send("hello suraj from other side")
//        res.send(user)
// })






app.listen(port,()=>{
    console.log(`server is running on port ${port}`);  
}) 