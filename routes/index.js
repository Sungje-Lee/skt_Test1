var express = require('express');
var router = express.Router();
var moment = require('moment');
require('moment-timezone');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
