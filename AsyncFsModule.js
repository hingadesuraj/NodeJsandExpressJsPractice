const fs = require("fs");

//  Async Fs module give three argument first file name or path of file , second is data inserted in file and thired one is callback function
// write file or create file
fs.writeFile("AsyncRead.txt","This is a Async fs module need callback funtion as a third argument",(err)=>{
    console.log("callback fire")
});

