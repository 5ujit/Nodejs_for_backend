const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();

const PORT= 3000;

//ROUTES

app.get('/users', (req,res)=>{
    return res.json()
})









app.listen(PORT, ()=>console.log(`Server started at port ${PORT}`) )