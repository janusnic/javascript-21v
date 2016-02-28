var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/shop1', function(req, res, next) {
  res.render('index1', { title: 'Shopping' });
});
router.get('/test1', function(req, res, next) {
  res.render('test1', { title: 'Express Ajax' });
});
router.get('/ajax', function(req, res, next) {
  res.render('ajax', { title: 'Express Ajax Blog' });
});

router.get('/comment', function(req, res, next) {
  res.render('comment', { title: 'Express Ajax Blog' });
});

router.get('/getpost', function(req, res, next) {
  res.render('getpost', { title: 'Express Ajax Blog' });
});


router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Express Ajax Blog' });
});

// routes will go here
router.get('/api/test', function(req, res) {
  var token = req.param('text');

  res.send(token);
});

module.exports = router;
