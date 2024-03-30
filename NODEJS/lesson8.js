const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type" : "text/plain"});
    if(res.url == "/home"){
        res.write(`<h1>Home page</h1>`);
    }
    res.end();
});
server.listen(5000);
console.log("server started on http://localhost:5000/");