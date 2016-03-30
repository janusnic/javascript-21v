var express = require('express');
var router = express.Router();




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// ====================================
// URL PARAMETERS =====================
// ====================================
// http://localhost:3000/api/users?id=4&token=sadsf4&geo=us
router.get('/api/users', function(req, res) {
  var query = require('url').parse(req.url,true).query;
  var user_id = query.id;
  var token = query.token;
  var geo = query.geo;  
  console.log(user_id + ' ' + token + ' ' + geo);

  res.send(user_id + ' ' + token + ' ' + geo);
});

router.post('/api/users', function(req, res) {
  var query = require('url').parse(req.url,true).query;
  var user_id = query.id;
  var token = query.token;
  var geo = query.geo;  
  console.log(user_id + ' ' + token + ' ' + geo);

  res.send('Your request is: '+user_id + ' ' + token + ' ' + geo+' ...and so?');
});

// http://localhost:3000/api/1
router.get('/api/:version', function(req, res) {
    res.send(req.params.version);
});

// parameter middleware that will run before the next routes
router.param('name', function(req, res, next, name) {

    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.name = modified;

    next();
});

// http://localhost:3000/api/users/chris
router.get('/api/users/:name', function(req, res) {
    // the user was found and is available in req.user
    res.send('What is up ' + req.name + '!');
});

// ====================================
// POST PARAMETERS ====================
// ====================================

// POST http://localhost:3000/api/users
// parameters sent with 
router.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});


module.exports = router;
