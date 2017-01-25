import Authentication from '../auth/auth';
import passportService from '../services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt',{session:false});


const Parking = (app) => {

    app.get('/parking',requireAuth,function (req,res){
        res.send({hi:'there'});
    });

    app.post('/parking',requireLogin,(req,res)=>{

    });

    app.put('/parking',requireLogin,(req,res)=>{

    });

    app.delete('/parking',requireLogin,(req,res)=>{

    });


}

export default Parking;
