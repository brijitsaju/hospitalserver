//1) import dotenv
require('dotenv').config()

//2 import express
const express =require('express')
//3) import cors
const cors= require('cors')

//import router
const router = require('./Routers/router')

//import connection.js flie
require("./DB/connections")

//4)create server
 const hosServer =express()

 //use of cors in server
 hosServer.use(cors())

 //6)
 hosServer.use(express.json())

 //use of router by server
 hosServer.use(router)
hosServer.use('/uploads',express.static('./uploads'))
 //7) port

 const PORT =3000 || process.env

 //8) tO run server
 hosServer.listen(PORT,()=>{
    console.log(`SERVERV RUNNING SUCESSFULLY AT PORT NUMBER ${PORT}`);
 })

 hosServer.get('/',(req,res)=>{
res.send(`hospital server running successfully and rasdy to accept request for client`)
 })

 //