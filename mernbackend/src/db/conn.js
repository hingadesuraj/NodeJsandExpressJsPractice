const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log("connection is created");

}).catch((e)=>{
    console.log("conneciton not created");
})