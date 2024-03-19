const http = require("http");


function getBody(req, res) {
  return new Promise((resolve, reject) => {
	const date = []
	req.on('data', chunk => {
	  date.push(chunk);
	});
	req.on('end', () => {
	  resolve(Buffer.concat(date).toString());
	});
	req.on('error', err => {
	  reject(err);
	});
  });
}

