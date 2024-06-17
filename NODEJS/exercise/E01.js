var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200, {'content-type':'text/html'});
    var url = request.url;
    if(url === '/list-of-t20'){
        response.write("<h1>List of T20</h1><ul><li>India</li><li>Australia</li><li>England</li></ul>");
        response.end();
    }
});
server.listen(5000);
console.log('Server is running on http://localhost:5000');