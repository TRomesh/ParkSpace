import Authentication from '../auth/auth';
import passportService from '../services/passport';
import passport from 'passport';


const requireAuth = passport.authenticate('jwt',{session:false});

const user = (app) => {

    app.get('/main',requireAuth,function (req,res){
        res.send({hi:'there'});
    });

    app.post('/signup',Authentication.signup);
}

export default user;
