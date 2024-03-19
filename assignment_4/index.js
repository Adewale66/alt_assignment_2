const express = require('express')
const app = express()
const author = require('./author')

const logger = (req, res, next) => {
	console.log('Request was made to: ' + req.url + ' with method: ' + req.method + ' at time: ' + Date.now());
	next(req, res);
}

app.use('/',logger, author);

app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
})
