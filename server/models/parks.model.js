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
    parkarea:Number,
    contact:[{type:Number}]

});


module.exports = mongoose.model('parkinglot',parkingLot);
