const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({

 username: String,
 description: String,
 duration: Number,
 userId: String,
 date: String


}, { timestamps: true });

const ModelClass = mongoose.model('user', UserSchema)
module.exports = ModelClass
