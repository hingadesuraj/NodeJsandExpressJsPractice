// import http module 
const http = require('http');
const fs = require('fs');
const { parse } = require('path/posix');

//  create server using http module 
// const server = http.createServer((req,res)=>{
//     // res.end("hello bro");
//     console.log(req.url);
//     if(req.url == "/home"){
//         res.end("inside home page")
//     }else if(req.url == "/about"){
//         res.end("inside contact us page");
//     }else if(req.url == "/services"){
//         // res.write("inside in service page");
//         // res.sendDate();
//         res.end("inside services page");
//     }else if(req.url == "/userapi"){
//         fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8",(err,data)=>{
//             console.log(data);
//         })
//         res.end("inside in userapi");
//     }
//     else{
//         res.writeHead(404,{"Content-Type":"text/html"}) // send status code with content type html 
//         res.end("<h1>404 page not found</h1>");
//     }
// })
 const server = http.createServer((req,res)=>{
     if(req.url == "/userapi"){
        fs.readFile("F:/Target2022/nodejsandexpressjs/userApi/userapi.json","utf-8",(err,data)=>{
               console.log(data);
               console.log(err);

            //    JSON DATA IS CONVERTED INTO OBJECT AND SHOW IT USING JSON.PARSE
            const apidata = JSON.parse(data)
            //    res.end( data);  // this line show api data on userapi endpoint
            res.end(apidata[2].name);
                  })
     }
 });



// listing server on port 8000 
server.listen(8000,"127.0.0.1",()=>{
    console.log("server running on port 8000");
})