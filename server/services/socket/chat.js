import Authentication from '../../auth/auth';
import passportService from '../../services/passport';
import chatSchema from '../../models/chat.model';
import passport from 'passport';

let ConnectedUser = [];


const requireAuth = passport.authenticate('jwt',{session:false});


const chat = (app,io) => {

  io.on('connection', (socket) => {


          socket.on('Userlogged', (data) => {
              socket.username = data;
              ConnectedUser[socket.username] = socket.id;
          });

          socket.on('message', (msg,uname) => {
              console.log(msg);
              io.sockets.connected[ConnectedUser[uname]].emit('chat', { message:msg });

          });

          socket.on('connect_error', (err) => {
              console.log('connect_error');
          });


          socket.on('disconnect', () => {
              console.log('disconnected');
          });

  });
}

export default chat;
