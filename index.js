//  const fs = require("fs");
 const chalk = require("chalk");

//  create folder using fs module
//  fs.mkdirSync("pavan");

//  create file and write content in file
// fs.writeFileSync("pavan/new.txt","welcome suraj bhau");

//  append data in existing file using fs module sync
// fs.appendFileSync("pavan/new.txt","    this is a new data add in file ");

// read file using fs module
//  const readData = fs.readFileSync("pavan/new.txt");
//  console.log(readData.toString());


//  rename file name
// fs.renameSync("pavan/new.txt","pavan/new2.txt");\

//delete file using fs module
// fs.unlinkSync("new2.txt");


// delete folder 
// fs.rmdirSync("pavan");

// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));


const validator = require('validator');

validator.isEmail('foo@bar.com'); //=> true