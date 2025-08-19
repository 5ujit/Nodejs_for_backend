const http = require("http");

const myServer = http.createServer((req,res)=> {
    console.log("new request rec   ");
    res.end("Hello form server")


});


myServer.listen(8000,()=>console.log("server started"));





// const http = require("http")

// const myServer=http.createServer((req,res)=>{
//     console.log("New Req Rec.");
//     res.end("Hello form Server")
    
// })
// myServer.listen(8000,()=>console.log("Server Started"))