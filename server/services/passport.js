import passport from 'passport';
import User from '../models/regusers.model';
import config from '../config';
import jwtstrategy from 'passport-jwt';
import extractjwt from 'passport-jwt';
import LocalStrategy from 'passport-local';

const JwtStrategy = jwtstrategy.Strategy;
const ExtractJwt = extractjwt.ExtractJwt;

const localOption = {usernameField:'email'};

// create local Strategy
const localLogin = new LocalStrategy(localOption,(email,password,done)=>{
    //verify this username and password, call done true if true or false
    User.findOne({email:email},(err,user)=>{
       if(err){ return done(err);}
       if(!user){ return done(null,false);}

       // compare Password - is 'password' equal to user.password
       user.comparePassword(password,function(err,isMatch){
          if(err){ return done(err); }
          if(!isMatch) { return done(null,false); }

          return done(null,user);
       });
    });
});

// setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest:ExtractJwt.fromHeader('Authorization'),
  secretOrKey:config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
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
passport.use(localLogin);
