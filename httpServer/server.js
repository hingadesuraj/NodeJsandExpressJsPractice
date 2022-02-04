// import http module 
const http = require('http');


//  create server using http module 
const server = http.createServer((req,res)=>{
    res.end("hello bro");
})



// listing server on port 8000 
server.listen(8000,"127.0.0.1",(req,res)=>{
    console.log("server running on port 8000");
})