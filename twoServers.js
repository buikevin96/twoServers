// Here we require/import the HTTP module
var http = require("http");

// Here we define 2 ports to listen to
var PORT = 7000;
var PORTTWO = 7500;

function handleRequest(request, response) {

	response.end("You're the best!! Path hit: " + request.url);
}

function handleRequest2(request, response) {

	response.end("You can't do it!!! Path hit: " + request.url);
}


var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);


server.listen(PORT, function() {

	console.log("Server listening on: http://localhost:%s", PORT);
});

server2.listen(PORTTWO, function() {

	console.log("Server listening on: http://localhost:%s", PORTTWO);
});

