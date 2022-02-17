const mongoose = require('mongoose')
 

const studentsSchema = new mongoose.Schema({
    nameofstudent: {
        type:String,
        required : true,
        minlength:3
    },
   
        email :{
            type:String,
            required:true,
            unique:[true,"email is already exist"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
        phone:{
            type:Number,
            min:10,
            
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true
        }
     
})


// we will create a new collection or model

const Student = new mongoose.model("Student",studentsSchema);


module.exports = Student;