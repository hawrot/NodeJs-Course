const http = require('http');



const server = http.createServer((req, res) =>{
    console.log(req);
    console.log('hello from the server');
});


server.listen(3000);
