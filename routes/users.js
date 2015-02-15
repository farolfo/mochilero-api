var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll().then(function(users) {
    res.json({
      users: users
    });
  });
});

router.post('/', function(req, res) {
  models.User.create(
    req.body
  ).then(function() {
    res.send('created succesfully');
  });
});

module.exports = router;
