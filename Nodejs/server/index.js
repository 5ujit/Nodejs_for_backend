const http = require("http");
const fs = require ("fs");
const { error } = require("console");

const myServer = http.createServer((req,res)=> {
    const log = `${Date.now()}:${req.url} New Req Received\n `;
    fs.appendFile("log.txt", log,(error, data)=>{
        switch(req.url){
    case "/": 
        res.end("HomePage")
        break;
    case "/about":
         res.end("how are u ");
        break;
    default:
        res.end("404 Not Found")
        }
       
    });
});


myServer.listen(8000,
    ()=>console.log("server started"));





// const http = require("http")

// const myServer=http.createServer((req,res)=>{
//     console.log("New Req Rec.");
//     res.end("Hello form Server")
    
// })
// myServer.listen(8000,()=>console.log("Server Started"))