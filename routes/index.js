const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post("/api/exercise/new-user", userController.addUser);
router.get('/', (req, res) => {
  res.render('index')
});


module.exports = router
