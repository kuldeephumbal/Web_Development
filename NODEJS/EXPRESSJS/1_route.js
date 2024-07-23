var express = require('express');
var app = express();
 
app.get('/contact',function(request,response){
    response.send('get request received for contact route');
});

app.post('/contact',function(request,response){
    response.send('post request received for contact route');
});

app.put('/contact',function(request,response){
    response.send('put request received for contact route');
});

app.delete('/contact', function (request, response) {
    response.send('delete request received for contact route');
});

app.listen(5000,function(error){
    if(error)
        console.log(error);
    else 
        console.log('server is ready to accept request...');
})