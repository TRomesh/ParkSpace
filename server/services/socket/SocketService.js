import Authentication from '../../auth/auth';
import passportService from '../../services/passport';
import chatSchema from '../../models/chat.model';
import passport from 'passport';

let ConnectedUser = [];


const requireAuth = passport.authenticate('jwt',{session:false});


const SocketService = (app,io) => {

  io.on('connection', (socket) => {


          socket.on('Userlogged', (data) => {
            if(data != null){
            console.log('user',data);
              socket.username = data;
              ConnectedUser[socket.username] = socket.id;
              console.log(ConnectedUser);
            }
          });

          socket.on('message', (data) => {
              io.sockets.connected[ConnectedUser[data.usr]].emit('chat', { message:data.msg });

          });

          socket.on('notify', (err) => {
              console.log('notify');
          });

          socket.on('connect_error', (err) => {
              console.log('connect_error');
          });


          socket.on('disconnect', (uname) => {
            if(uname != null){
              if (ConnectedUser.indexOf(uname) > -1) {
                  ConnectedUser.splice(ConnectedUser.indexOf(uname), 1);
              }
            }
          });

  });
}

export default SocketService;
