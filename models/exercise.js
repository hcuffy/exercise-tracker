const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({

  username: String,
  description: String,
  duration: Number,
  userId: String,
  date: String


}, { timestamps: true });

const ModelClass = mongoose.model('exercise', ExerciseSchema)
module.exports = ModelClass
