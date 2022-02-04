const bioData = {
    name:"xyz",
    lastname:"xxyyzz",
    age: 28,
    address:"at post xyz dist yxz",

};

//  access object data using dot notaation
console.log(bioData.name);


//  object is converted into json 
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// json is converted into object
const objData = JSON.parse(bioData);
console.log(objData);
