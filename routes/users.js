var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, 
  {
  	id: 2,
  	username: "masalib"
  }]);
});

router.get('/second', function(req, res, next) {
  res.json([{
  	id: 3,
  	username: "samsepi0l_2"
  }, 
  {
  	id: 4,
  	username: "masalib_2"
  }]);
});

module.exports = router;