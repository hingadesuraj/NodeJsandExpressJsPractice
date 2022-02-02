 const fs = require("fs");

//  create folder using fs module
 fs.mkdirSync("pavan");

//  create file and write content in file
fs.writeFileSync("pavan/new.txt","welcome suraj bhau");

//  append data in existing file using fs module sync
fs.appendFileSync("pavan/new.txt","    this is a new data add in file ");

// read file using fs module
 const readData = fs.readFileSync("pavan/new.txt");
 console.log(readData.toString());


