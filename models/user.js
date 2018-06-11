const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema

const UserSchema = new Schema({

 username: String,
 description: String,
 duration: 39,
 userId: String,
 date: String


}, { timestamps: true });

const ModelClass = mongoose.model('user', UserSchema)
module.exports = ModelClass
