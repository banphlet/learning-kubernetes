
var http = require('http');

console.log(new Date(), "welcome", process.env.PORT)
console.log(process.env.HELLO)
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
  console.log(new Date())
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 3000) ;
