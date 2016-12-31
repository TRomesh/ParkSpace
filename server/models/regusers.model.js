import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;


const regUsers = new Schema({
  fname:String,
  lname:String,
  uname:{type:String,unique:true},
  email:{type:String,unique:true,lowercase:true},
  password:String
});

//On save Hook,encrypt password
//Before saving a model, run this function
regUsers.pre('save',function (next){
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


module.exports = mongoose.model('regusers',regUsers);
