const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({

  username: String,
  userId: String

}, { timestamps: true });

const ModelClass = mongoose.model('user', UserSchema)
module.exports = ModelClass
