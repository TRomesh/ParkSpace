import User from '../models/regusers.model';
import jwt from 'jwt-simple';
import config from '../config';

let tokenForUser = (user) =>{
    const timpestamp = new Date().getTime();
    return jwt.encode({sub:user.id,iat:timpestamp},config.secret);
}

let signup = (req,res,next) => {

    const fname = req.body.fname
    const lname = req.body.lname
    const uname = req.body.uname
    const email = req.body.email
    const password =req.body.password;

    if(!email || !password){
       return res.status(422).send({error:'You must provide email and password'});
    }

    // See if a user with the given email exists
    User.findOne({email: email },(err,user)=>{
        if(err){
          return next(err);
        }
        //If a user with email does exists, return an erorr
        if(user){
          return res.status(422).send({error:'Email is in use'})
        }
        //if user with email does not exists,create and save user
        const newuser = new User({
          fname:fname,
          lname:lname,
          uname:uname,
          email:email,
          password:password
        });

        //On save Hook,encrypt password
        //Before saving a model, run this function
      newuser.schema.pre('save',(next)=>{
            // get access to this user model
            let user = this;
            console.log(user);
            // generate salt the run call back
            bcrypt.genSalt(10,(err,salt)=>{
               if(err){ return next(err);}
              // hash(encrypt) our password using salt
               bcrypt.hash(user.password,salt,null,(err,hash)=>{
                    if(err){ return next(err);}
                    //overwrite plain text password with encrypted password
                    user.password = hash;
                    next();
               });
            })
      });

        newuser.save((err)=>{
            if(err){ return next(err);}
            res.json({token:tokenForUser(newuser)})
            // res.json({success:'true'});
        });


    });
    //

}

module.exports.signup = signup;
