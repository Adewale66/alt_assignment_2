const router = require('express').Router();

router.get('/author', (req, res) => {
  res.send('Got a Get request').status(200);
});

router.post('/author', (req, res) => {
	res.send('Got a POST request').status(201);
})

router.put('/author', (req, res) => {
	res.send('Got a PUT request').status(204);
})

router.delete('/author', (req, res) => {
	res.send('Got a DELETE request').status(204);
})

module.exports = router;
