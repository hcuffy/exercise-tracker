const express = require('express');
const app = express();
const User = require('../models/user');
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
      const newUser = new User({username, description: '', duration: 0, userId: genId, date:'' })
      newUser.save(err => {
        if (err)
          return next(err)
      })
     res.send({Username : username, _id : genId})
    });

}
