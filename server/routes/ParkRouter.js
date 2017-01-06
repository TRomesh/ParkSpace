import Authentication from '../auth/auth';
import passportService from '../services/passport';
import passport from 'passport';


const requireAuth = passport.authenticate('jwt',{session:false});


const park = (app) => {

    app.get('/park/map',requireAuth,function (req,res){
        res.send({hi:'there map'});
    });

    app.get('/park/map',requireAuth,function (req,res){
        res.send({hi:'there'});
    });



}

export default park;
