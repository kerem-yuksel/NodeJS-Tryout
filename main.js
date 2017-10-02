var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile("content.txt", function(err, data) {
        if (err) {
            console.log("Error! Code: " + err.code + " - Message: " + err.message);
        }
        
        response.end(data.toString());
    });
}).listen(8081);

console.log("Server is running and accessible via http://localhost:8081/");