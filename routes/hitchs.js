var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Hitch.findAll().then(function(hitchs) {
    res.json({hithcs: hitchs});
  });
});

router.post('/', function(req, res) {
  models.Hitch.create(
    req.body
  ).then(function() {
    res.status(200).send('Hitch created successfully');
  });
});

module.exports = router;
