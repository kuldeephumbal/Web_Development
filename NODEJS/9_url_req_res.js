var http = require("http");
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var url = request.url;
    if(url === '/'){
        response.write('<h1>Home Page</h1>');
    }else if(url === '/about'){
        response.write('<h1>About Page</h1>');
    }else if(url === '/contact'){
        response.write('<h1>Contact Page</h1>');
    }
    response.end();
});
server.listen(5000);
console.log('Server is running on http://localhost:5000');