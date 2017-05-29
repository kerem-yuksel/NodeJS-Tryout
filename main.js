var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Hello World!");
}).listen(8081);

console.log("Server is running and accessible via http://localhost:8081/");