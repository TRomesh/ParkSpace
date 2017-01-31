import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const parkings = new Schema({
      park:String,
      starttime:String,
      endtime:String,
      fee:String

});


module.exports = mongoose.model('parkings',parkings);
