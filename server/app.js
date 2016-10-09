const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');


app.use('/', express.static('src'));

router.get('/register', (req, res) => {

});

router.get('/park', (req, res) => {

});

app.listen(PORT, () => {
	console.log('server running on port', PORT);
});
