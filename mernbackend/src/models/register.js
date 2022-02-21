const mongoose= require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

// generate toke using jwt


// employee is a schema name 
employee.methods.generateAuthToken = async function () {
try {
    
    // take document id user register in database
    // console.log(this._id);
    // sign jwt token
    const token = jwt.sign({_id:this._id.toString()},"surajhingadetaumarkheddistyavatmal") //sign method takes to parameter first is unique id and second is secrate code
    this.tokens = this.tokens.concat({token});
    await this.save();
    return token;

} catch (error) {
    console.log(error);
}
}


// encrypt password using bcryptjs {convert password into hash};
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