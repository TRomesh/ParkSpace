import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import webpackmiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();
const router = express.Router();
const port =3000;
const compile=webpack(webpackConfig);
const db='mongodb://localhost/parkspace';

mongoose.connect(db);

app.use(webpackmiddleware(compile,{
  hot:true,
  publicPath: webpackConfig.output.publicPath,
  noInfo:true
}));

app.use(webpackHotMiddleware(compile));

app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

app.get('/*',(req,res) => {
   res.sendFile(path.join(__dirname,'./index.html'));
});

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

app.listen(port,()=> console.log('Running on port: '+port));