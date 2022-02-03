const os = require('os');

// To Know which Arch use
console.log(os.arch());

// check free memory
// console.log(os.freemem());
// const free = os.freemem();
// console.log(`${free/1024/1024/1024  }`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`)

console.log(os.type());

// To Know more detail os module check official site