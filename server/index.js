import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import cros from 'cors';
import path from 'path';
import webpack from 'webpack';
import http from 'http';
import SocketIO from 'socket.io';
import webpackmiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import regusers from './models/regusers.model';
import Router from './routes/UserRouter';
import Chat from './services/socket/chat';

const cross = cros();
const app = express();
const router = express.Router();
const server = http.Server(app);
const io = new SocketIO(server);
const port =3000;
const compile=webpack(webpackConfig);
const db='mongodb://localhost/parkspace';


mongoose.Promise = global.Promise;

mongoose.connect(db);

app.use(webpackmiddleware(compile,{
  hot:true,
  publicPath: webpackConfig.output.publicPath,
  noInfo:true
}));

app.use(webpackHotMiddleware(compile));
app.use(cross);
app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));


server.listen(port,()=> console.log('Running on port: '+port));

app.use('/', express.static(__dirname));

Router(app);
Chat(app,io);


app.get('*',(req,res) => {
   res.sendFile(path.resolve(__dirname,'./index.html'));
});
