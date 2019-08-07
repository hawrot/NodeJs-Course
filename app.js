const http = require('http');
const express =require('express');


const app = express();

app.use((req,res,next) =>{
    console.log('In the middelware');
});

const server = http.createServer(app);


server.listen(3000);  ///server keeps listening to the requests

