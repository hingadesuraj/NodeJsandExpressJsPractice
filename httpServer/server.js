// import http module 
const http = require('http');


//  create server using http module 
const server = http.createServer((req,res)=>{
    // res.end("hello bro");
    console.log(req.url);
    if(req.url == "/home"){
        res.end("inside home page")
    }else if(req.url == "/about"){
        res.end("inside contact us page");
    }else if(req.url == "/services"){
        // res.write("inside in service page");
        // res.sendDate();
        res.end("inside services page");
    }else{
        res.writeHead(404,{"Content-Type":"text/html"}) // send status code with content type html 
        res.end("<h1>404 page not found</h1>");
    }
})



// listing server on port 8000 
server.listen(8000,"127.0.0.1",()=>{
    console.log("server running on port 8000");
})