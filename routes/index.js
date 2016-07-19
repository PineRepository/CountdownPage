var express = require('express');
var router = express.Router();

var dateNow = new Date();
dateNow.setHours(dateNow.getHours() - 3);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Pineapps',
    date: dateNow.getTime()
  });
});

module.exports = router;
