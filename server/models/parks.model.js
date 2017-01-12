import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const parkingLot = new Schema({
    parkname:String,
    Lon:Number,
    Lat:Number,
    owner:String,
    ownernid:{ type:String, required: true, unique: true},
    address:String,
    postalcode:String,
    
});


module.exports = mongoose.model('parkinglot',parkingLot);
