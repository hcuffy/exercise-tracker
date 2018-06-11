const express = require('express');
const app = express();
const User = require('../models/user');
const cryptoRandomString = require('crypto-random-string');

exports.addUser = (req, res, next) => {
let id = cryptoRandomString(10);
var test = req.body;
  res.send(id);


}
