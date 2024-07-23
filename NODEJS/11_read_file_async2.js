var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    let filename = request.url.slice(1);
    fs.readFile(filename,function(error,content){
        if(error){
            response.writeHead(404,{'content-type':'text/html'});
            response.write(`<h1 align="center">file not found<h1/>`);
            return response.end();
        }
        else {
            response.writeHead(200,{'content-type':'text/html'});
            response.write(content);
            return response.end();
        }
    }); //asynochrous function
});
server.listen(5000);
console.log('Server is running on http://localhost:5000');