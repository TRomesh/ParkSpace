const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use('/', express.static('src'));

router.get('/sample', (req, res) => {

});

app.listen(PORT, () => {
	console.log('server running on port', PORT);
});
