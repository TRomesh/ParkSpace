import Authentication from '../../auth/auth';
import passportService from '../../services/passport';
import passport from 'passport';



const requireAuth = passport.authenticate('jwt',{session:false});


const chat = (app,io) => {

  io.on('connection', (socket) => {

          console.log('connected');

          socket.on('message', (msg) => {
              console.log(msg);
          });

          socket.on('disconnect', () => {
              console.log('disconnected');
          });

  });
}

export default chat;
