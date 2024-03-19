const http = require('http');

http.createServer((req, res) => {
	if (req.url == '/books') {

		if (req.method == 'GET') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World from GET method\n');
		}
		if (req.method == 'POST') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World from POST method\n');
		}
		if (req.method == 'DELETE') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Hello World from DELETE method\n');
		}
	} 
	if (req.url == '/books/author') {
		if (req.method == 'GET') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('GET method for author url\n');
		}
		if (req.method == 'POST') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('POST method for author url\n');
		}
		if (req.method == 'DELETE') {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('DELETE method for author url\n');
		}
	}	
}).listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
})
