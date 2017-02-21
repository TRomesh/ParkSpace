import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const parkings = new Schema({
      uname:String,
      park:String,
      car: String,
      city: String,
      fare:Number,
      datetime:{ type: Date, default: Date.now },
      endtime:{ type: Date, default: '21/02/2017'},
      cordi:{lan:Number,lon:Number}
});


module.exports = mongoose.model('parkings',parkings);
