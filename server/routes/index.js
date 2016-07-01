var express = require('express')
var info = require("../lib/names")
var router = express.Router();
var helpers = require('../lib/helpers')

// respond with all users
// respond with all active users
// responde with a single user

/* GET home page. */
router.get('/', function(req, res, next) {
  var users = helpers.getAllUsers()
  //routes are the middle man between what the users do, to what is going to be sent back.
  res.json({users: users});
});

router.get('/users', function(req, res, next) {
  var activeUsers = helpers.getAllActiveUsers()

  res.json({users: activeUsers});
  });



module.exports = router;
