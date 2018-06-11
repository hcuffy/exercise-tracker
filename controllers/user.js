const express = require('express');
const app = express();
const User = require('../models/user');
const Exercise = require('../models/exercise');
const cryptoRandomString = require('crypto-random-string');

exports.addUser = (req, res, next) => {
let genId = cryptoRandomString(10);
const { username } = req.body;

  User.findOne({ username }, (err, user) => {
      if (err)
          return next(err);
      if (user) {
         res.send('Username already exists.');
      }
      const newUser = new User({username, userId: genId })
      newUser.save(err => {
        if (err)
          return next(err)
      })
     res.send({Username : username, _id : genId})
    });

}

exports.addExercise = (req, res, next) => {
  const { userId, description, duration, date } = req.body;

    User.findOne({ userId }, (err, user) => {
        if (err)
            return next(err);
        if (!user) {
          res.send("No Such User Exists.")
        }
        if (user) {
          console.log("I am here");
        const newExercise = new Exercise({ description: description, duration: duration, userId: userId, date: date })
        newExercise.save(err => {
          if (err)
            return next(err)
        })
          res.send({Username:user.username, description:description, duration:duration, userId:userId, date:date})
        }


});

}


exports.getLog = (req, res, next) => {

var { userId, fromDate, toDate, limit } = req.query;

fromDate = Date.parse(fromDate);
toDate = Date.parse(toDate);

Exercise.find({}, (err, data) => {
    if (err)
      return next(err)

    res.send({fromDate});
  })



}
