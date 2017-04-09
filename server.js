var http = require("http");
http.createServer(function (request, response) {
  // Envia HTTP Header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/plain'});

//Imprime en canvas HTML
 response.end('Esta es una prueba del servidor Node.js\n');
}).listen(8081);
// Impreesion consola
console.log('Server running at http://127.0.0.1:8081/');
