import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const Post = new Schema({
    type:String,
    image:String,
    username:String,
    content:String,
    created:{ type: Date, default: Date.now },
    comments: [{ body: String, date: Date.now }],
    likes:[{otheruser:String,date:Date.now}],
    share:[{otheruser:String,date:Date.now}],
});


module.exports = mongoose.model('Post',Post);
