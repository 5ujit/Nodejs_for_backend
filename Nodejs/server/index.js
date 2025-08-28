// const  express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))



const express = require("express")
 



/*const http = require("http");
const fs = require ("fs");
const url = require("url")
const { error } = require("console");

const myServer = http.createServer((req,res)=> {
    if(req.url==="/favicon.ico") return res.end();
    const log = `${Date.now()}:  ${req.method}  ${req.url} New Req Received\n `;
    const myUrl = url.parse(req.url ,true);
    // console.log(myUrl);
    
    fs.appendFile("log.txt", log,(error, data)=>{
        switch(myUrl.pathname){
    case "/": 
    if(req.method=== 'GET') res.end('HomePage')
        res.end("HomePage")
        break;
    case "/about":
        const username= myUrl.query.myname;
         res.end(`Hi, ${username}`);
        break;
    case "/search":
        const search=myUrl.query.search_query;
        res.end("Here are your results for "+ search);
    case '/signup':
        if(req.method === 'GET') res.end("This is sighnup form ")
            else if ( req.method === 'POST '){
        // DB Query
        res.end("success ")
        }

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


*/