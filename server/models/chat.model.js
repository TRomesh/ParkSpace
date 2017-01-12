import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const chatMessage = new Schema({
    uname:String,
    message:String,
    seen:Boolean,
    created:{ type: Date, default: Date.now }
});


module.exports = mongoose.model('chatMessage',chatMessage);
