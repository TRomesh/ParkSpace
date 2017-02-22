import Authentication from '../auth/auth';
import passportService from '../services/passport';
import passport from 'passport';


const requireAuth = passport.authenticate('jwt',{session:false});
const requireLogin = passport.authenticate('local',{session:false});

const user = (app) => {

    app.get('/user',requireAuth,function (req, res, next){
        res.json({hi:'there'});
    });

    app.post('/login',requireLogin,Authentication.login);

    app.post('/signup',Authentication.signup);
}

export default user;
