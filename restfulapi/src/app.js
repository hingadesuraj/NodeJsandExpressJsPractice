const express = require('express');
const connectToMongo = require('./db/connection');
const Student = require('./models/students')

const app = express();
connectToMongo();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
// route

// create a new students

app.post('/students', (req,res)=>{
    const {nameofstudent,email,phone,address} = req.body;
    console.log(req.body);
    //  const user = new Student(req.body);
    const user = new Student({
        nameofstudent,
        email,
        phone,
        address
    });
    const saveData = user.save();
     saveData.then(()=>{
         res.status(201).json(user);
     }).catch((error)=>{
         res.status(400).send(error);
        // console.error();
     });



    //  res.send("hello suraj from other side")
    res.send(user)
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`); 
}) 