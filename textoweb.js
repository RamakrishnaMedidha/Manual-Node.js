var fs = require("fs");
var data = fs.readFileSync('web.txt');

var http = require("http");
http.createServer(function (request, response) {
 // Envia HTTP Header
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/plain'});

//Imprime en canvas HTML
 response.end(data.toString());
}).listen(8081);
console.log(data.toString());
console.log("Programa finalizado");
