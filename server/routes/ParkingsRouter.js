import Authentication from '../auth/auth';
import passportService from '../services/passport';
import Parkings from '../models/parkings.model';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt',{session:false});


const Parking = (app) => {

    app.get('/parking',requireAuth,function (req,res){
      // See if a user parking history exists
      Parkings.findOne({email: email },(err,parkingdata)=>{
            if(err){
              return next(err);
            }
            //If a user with email does exists, return an erorr
            if(parkingdata){
              return res.send({parking:parkingdata});
            }
        });
      });

    app.post('/parking',requireAuth,(req,res)=>{
      // Create new Parking entry
      const newparking = new Parkings({
        uname:req.body.uname,
        park:req.body.park,
        car:req.body.car,
        city:req.body.city,
        fare:req.body.fare,
        endtime:req.body.endtime,
        cordi:req.body.cordi
      });


      newparking.save((err)=>{
          if(err){ return next(err);}
          res.json({parking:newparking});
      });

    });

    app.put('/parking',requireAuth,(req,res)=>{

    });

    app.delete('/parking',requireAuth,(req,res)=>{

    });


}

export default Parking;
