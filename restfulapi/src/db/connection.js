const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/student-data?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo =    () =>{
    mongoose.connect(url,()=>{
        console.log("connect to mongodb");
    }).then(()=>{ 
        console.log("connectedd") 
    }).catch((e)=>{
        console.log(e);
    })
}

module.exports = connectToMongo


