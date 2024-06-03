var http = require('http');
var server = http.createServer(function(req,res){
    console.log("server created successfully");
});
server.listen(5000); // server created successfully
