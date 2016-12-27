import passport from 'passport';
import User from '../models/regusers.model';
import config from '../config';
import jwtstrategy from 'passport-jwt';
import extractjwt from 'passport-jwt';

const JwtStrategy = jwtstrategy.Strategy;
const ExtractJwt = extractjwt.ExtractJwt;

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest:ExtractJwt.fromHeader('authorization'),
  secretOrKey:config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions,(payload,done)=>{
   // see if user id in payload exists in our db
   //if it does, call done with that other
   //otherwise, call done without a user obejct
   User.findById(payload.sub,(err,user)=>{
      if(err){ return done(err,false); }

      if(user){
        done(null,user);
      }else{
        done(null,false);
      }

   });
});

passport.use(jwtLogin);
