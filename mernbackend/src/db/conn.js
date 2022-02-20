const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("connection is created");

}).catch((e)=>{
    console.log("conneciton not created");
})