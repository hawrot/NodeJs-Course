const http = require('http');



const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.methodl

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="post"><input name="message" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/message' && method === POST){

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page</title></head>');
    res.write('<body><h1>Page 1</h1></body>');
    res.write('</html>');
    res.end();
});


server.listen(3000);  ///server keeps listening to the requests
