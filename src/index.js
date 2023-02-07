const bodyParser = require('body-parser');
const express = require('express');
const {Port}=require("./config/serverConfig")
const app = express();
const setupAsync=async()=>{
    app.use(bodyParser.json());
    console.log(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.listen(Port,()=>{
        console.log(`your server is started on ${Port}`);
    })
}
setupAsync();