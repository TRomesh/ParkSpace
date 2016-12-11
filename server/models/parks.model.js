import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const parkingLot = new Schema({
    parkname:String,
    Lon:Number,
    Lat:Number,
});


module.exports = mongoose.model('parkinglot',parkingLot);
