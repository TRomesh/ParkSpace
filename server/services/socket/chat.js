import Authentication from '../../auth/auth';
import passportService from '../../services/passport';
import passport from 'passport';



const requireAuth = passport.authenticate('jwt',{session:false});


const chat = (app,io) => {

  io.on('connection', (socket) => {


          socket.on('ding', () => {
              console.log('connected');
          });

          socket.on('disconnect', () => {
              console.log('disconnected');
          });

          socket.on('userChat', (data) => {

          });

  });

}

export default chat;
