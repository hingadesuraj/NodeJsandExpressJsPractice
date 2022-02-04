const fs = require('fs');

// const bioData = {
//     name:"xyz",
//     lastname:"xxyyzz",
//     age: 28,
//     address:"at post xyz dist yxz",

// };

// //  access object data using dot notaation
// console.log(bioData.name);

 
// //  object is converted into json 
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// // json is converted into object
// const objData = JSON.parse(bioData);
// console.log(objData);



// Task 1
// step 1 : object converted into json
// step 2 : add this json data in another file
// step 3 : read json data  
// step 4 : convert json data to object
// step 5: print using console.log();

const bioData2 = {
    name:"xyz",
    lastname:"xxyyzz",
    age: 28,
    address:"at post xyz dist yxz",

};


// step 1 : object converted into json
const jsonData2 = JSON.stringify(bioData2);

// step 2 : add this json data in another file
//  new file is created and add json data into json1.json file
fs.writeFile("json1.json",jsonData2,(err)=>{
    console.log("done");
})

// step 3 : read json data  from json1.json file

fs.readFile("./json1.json","utf-8",(err,data)=>{
    console.log("read data confirm", data);
    // step 4 : convert json data to object
    const orgData = JSON.parse(data);
    console.log("this is original data",orgData);
})

 


