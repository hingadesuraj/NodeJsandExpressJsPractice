const fs = require("fs");

//  Async Fs module give three argument first file name or path of file , second is data inserted in file and thired one is callback function
// write file or create file
// fs.writeFile("AsyncRead.txt","This is a Async fs module need callback funtion as a third argument",(err)=>{
//     console.log("callback fire")
// });

// //  read file data using Async fs module
// fs.readFile("AsyncRead.txt",(err,data)=>{
//     console.log(data);
// })



// Asynchronous CRUD operations

// Create folder   using fs module
// fs.mkdir("Async",(err)=>{console.log(err)});

// create a file 
// fs.writeFile("Async/suraj.txt","This is a new file in Async folder",(err)=>{console.log(err)});

// add some data in suraj.txt
// fs.appendFile("Async/suraj.txt","hello master this is some data append in existing file ",(err)=>{console.log(err)});

// read file with buffer data usng fs module
// fs.readFile("Async/suraj.txt",(err,data)=>{console.log(data)})

// read file with plane data using UTF-8 encoding
// fs.readFile("Async/suraj.txt","utf-8",(err,data)=>{console.log(data)});

// rename existing file using fs module in node js
// fs.rename("Async/suraj.txt","Async/pavan.txt",(err)=>{console.log(err)});

// Delete file using fs module in node js
// fs.unlink("Async/pavan.txt",(err)=>{console.log(err)});

// delete existing folder
// fs.rmdir("Async",(err)=>{console.log(err)}); 

