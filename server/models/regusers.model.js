import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const regUsers = new Schema({
  fname:String,
  lname:String,
  uname:String,
  email:String,
  password:String
});


module.exports = mongoose.model('regusers',regUsers);
