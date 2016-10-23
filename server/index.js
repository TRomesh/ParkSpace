import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackmiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();
const port =3000;
const compile=webpack(webpackConfig);

app.use(webpackmiddleware(compile,{
  hot:true,
  publicPath: webpackConfig.output.publicPath,
  noInfo:true
}));

app.use(webpackHotMiddleware(compile));

app.get('/*',(req,res) => {
   res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(port,()=> console.log('Running on port: '+port));
