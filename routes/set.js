var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('나는 셋라우터입니다.');
});

module.exports = router;

