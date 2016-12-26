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


module.exports = mongoose.model('regusers',regUsers);
