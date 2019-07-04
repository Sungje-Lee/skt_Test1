var express = require('express');
var router = express.Router();

/*moment 설치
    npm install moment
    npm install moment-timezone
*/
var moment = require('moment');
require('moment-timezone');

var date_seoul = moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
var date_ny = moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { title: '세계시간', region: 'Seoul', date_seoul: date_seoul,
                                                region2: 'New_York', date_ny: date_ny
                                              });
});


module.exports = router;
