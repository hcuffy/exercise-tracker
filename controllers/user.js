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
  const { userId } = req.body;
console.log("I got here");
    User.findOne({ userId }, (err, user) => {
        if (err)
            return next(err);
        if (user) {
              res.send(user)
        }


});

}


//   const newUser = new User({username, description: '', duration: 0, userId: genId, date:'' })
//   newUser.save(err => {
//     if (err)
//       return next(err)
//   })
//  res.send({Username : username, _id : genId})
// });
