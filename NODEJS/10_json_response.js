const { error } = require('console');
var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application/json'});
    var output = null;
    if(request.url === '/reactjs'){
        output = JSON.stringify([{error:'no'},'ReactJS','Redux','React Native']);
    }else if(request.url === '/angular'){
        output = JSON.stringify([{error:'no'},'Angular','AngularJS','TypeScript']);
    }else {
        output = JSON.stringify([{error:'Invalid URL'}]);
    }
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('Server is running on http://localhost:5000');
