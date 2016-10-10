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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

app.use('/', express.static('src'));

app.get('/user',(req,res) => {
	    res.json({
				name:'Tharaka',
				age:23
			});
});

app.post('/user',(req,res) => {
	    res.json(
          req.body
			);
});

app.listen(PORT, () => {
	console.log('server running on port', PORT);
});
