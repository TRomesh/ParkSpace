import Authentication from '../../auth/auth';
import passportService from '../../services/passport';
import chatSchema from '../../models/chat.model';
import passport from 'passport';

let users = [];
let sockets = {};

const requireAuth = passport.authenticate('jwt',{session:false});


const notify = (app,io) => {

  io.on('connection', (socket) => {


          socket.on('userlogged', (data) => {
              console.log(data);
          });

          socket.on('notification', (msg) => {
              console.log(msg);
          });

          socket.on('connect_error', (err) => {
              console.log('connect_error');
          });


          socket.on('disconnect', () => {
              console.log('disconnected');
          });

  });
}

export default notify;
