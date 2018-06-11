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

var userId = req.query.userId;
var limit = parseInt(req.query.limit);
var fromDate = Date.parse(req.query.fromDate);
var toDate = Date.parse(req.query.toDate);


Exercise.find({}, (err, data) => {
  if (err)
    return next(err)

    if(!Number.isInteger(fromDate) && !Number.isInteger(toDate) && !Number.isInteger(limit)){
      res.send(data);
    }
    else if(!Number.isInteger(fromDate) && !Number.isInteger(toDate) && Number.isInteger(limit)){
let dataLen = data.length;
      if(limit >= data.length){
        res.send(data);
      }else{
      data.splice(limit);
      res.send(data);
    }
    }else{

     let results = [];

     data.forEach((log) => {

     let logDate = Date.parse(log.date);
      console.log(logDate +" "+fromDate+" "+toDate);
     if(logDate > fromDate && logDate < toDate){
          console.log("this one");
       results.push(log);
     }else if(logDate > fromDate && !Number.isInteger(toDate)){
         console.log("this two");
       results.push(log);
     }else if(logDate < toDate && !Number.isInteger(fromDate)){
         console.log("this three");
       results.push(log);
     }
     });

     if(Number.isInteger(limit)){
       let dataLen = data.length;
             if(limit >= data.length){
               res.send(results);
             }else{
             data.splice(limit);
             res.send(results);
           }
     }else{
       res.send(results);
     }

    }

  })



}
