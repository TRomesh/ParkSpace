import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const chatThreads = new Schema({
     participants:[{users:String}],
     date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('chatThreads',chatThreads);
