const path = require('path');

console.log(path.dirname("F:/Target2022/NodeJSandExpressJS/PathModule/pathModule.js"));
console.log(path.extname("F:/Target2022/NodeJSandExpressJS/PathModule/pathModule.js"));
// console.log(path.parse("F:/Target2022/NodeJSandExpressJS/PathModule/pathModule.js"));
const newPath = path.parse("F:/Target2022/NodeJSandExpressJS/PathModule/pathModule.js"); // .parse give object of information
console.log(newPath.name);