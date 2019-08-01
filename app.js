const http = require('http');



const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.header);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page</title></head>');
    res.write('<body><h1>Page 1</h1></body>');
    res.write('</html>');
    res.end();
});


server.listen(3000);  ///server keeps listening to the requests
