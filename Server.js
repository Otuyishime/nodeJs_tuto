var http = require('http');
var port = 8000;
function onRequest(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Test Message');
    response.end();
}

http.createServer(onRequest).listen(port);
console.log('Server listening at port ' + port);