const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const db='mongodb://localhost/parkspace';

mongoose.connect(db);

app.use(router);

app.use('/', express.static('src'));

app.get('*', function(req, res) {
	res.sendFile(path.resolve('src', 'index.html'));
});


app.listen(PORT, () => {
	console.log('server running on port', PORT);
});
