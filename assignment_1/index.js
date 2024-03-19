const http = require("http");

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Adewale Kujore");
}).listen(8900, () => {
	console.log("Server is running on http://localhost:8900");
});
