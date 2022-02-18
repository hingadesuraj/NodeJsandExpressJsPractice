const express = require('express');
const router = new express.Router();
const Student = require('../models/students')



// this requset created using async await functionality in javascript
router.post("/students",async(req,res)=>{

    try {
        const user = new Student(req.body);
        const createUser = user.save();
        res.status(201).send(user);
        
    } catch (error) { 
        res.status(400).send(error);
    }
    
})

// get all resgester student data
router.get("/students", async (req,res)=>{
      try {

        const studentData = await Student.find();
        res.send(studentData);
          
      } catch (error) {
          res.send(error)
      }
});

// get only indivisual data of students

router.get("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const studentIdData = await Student.findById(_id);
        // console.log(studentIdData)

        if(!studentIdData){
            res.status(404).send();
        }else{
            res.send(studentIdData);
        }
    } catch (error) {
        res.send(error);
    }
});

//  delete student by using id
router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
            res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
})


// update student data by using id

router.patch("/students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateData);
    } catch (error) {
        res.status(400).send(error); 
    }
})



module.exports = router;