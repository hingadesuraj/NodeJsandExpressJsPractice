const mongoose = require('mongoose');



// connection in  mongodb
mongoose.connect("mongodb://localhost:27017/newData",{useNewUrlParser:true}).then(()=>{console.log("connection is on")}).catch((err)=>{
    console.log(err);
})



// define Schema
const newSchema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    video:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// create collection

const newData = new mongoose.model("newData",newSchema);


// create document or insert
const createDocument = async () => {
    try {
        const reactPlaylist = new playlist({
            name:"React",
            ctype:"frontend",
            videos:80,
            author:"suraj",
            active:true
        })

        // reactPlaylist.save();
        // or
        const result = await reactPlaylist.save();
        
    } catch (error) {
        console.log(error);
    }
}
createDocument();

