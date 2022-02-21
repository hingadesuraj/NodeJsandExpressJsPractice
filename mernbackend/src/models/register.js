const mongoose= require('mongoose')
const bcrypt = require('bcryptjs');

const employee = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// encrypt password using bcryptjs
// before the save process

employee.pre("save",async function(next){
    if(this.isModified("password")){
        // console.log(`current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        // console.log(`current password is ${this.password}`);

        // this.confirmpassword = undefine;

    }
    next();
})

// create a collection and model

const Register = new mongoose.model("Register",employee );


// export
module.exports = Register;