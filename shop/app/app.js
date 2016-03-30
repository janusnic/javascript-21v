var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// login routes
app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("From Client pOST request: User name = "+user_name+" and password is "+password);
  res.end("yes");
});

app.post('/payment',function(req,res){
  var user_name=req.body.user;
  var email=req.body.email;
  
  var jstr = JSON.stringify(data);
  var jo = JSON.parse(jstr);
  
  console.log("From Client pOST request: User name = "+user_name+" and email is "+email);
  // res.end("From Client pOST request: User name = "+user_name+" and email is "+email);
  res.send({redirect: '/'});
});

app.get('/payment',function(req,res){

});


app.get('/shopdata', function(req, res, next) {
   fs.readFile(path.join(__dirname,'public/ajax/products.json'), 'utf8', function(err, data){
    if (err) throw err;
    res.end(data);
    //res.end(JSON.stringify(data));
  })
});

// searching
app.get('/searching', function(req, res){
     var val = req.query.search;
     var search_result;
     console.log(val);

     var state = [];
     var result = JSON.parse(fs.readFileSync(path.join(__dirname,'public/ajax/products.json'), 'utf8'));

     for (var i in result) {
      
      if (result[i].name.toLowerCase().indexOf(val) != -1 || result[i].snippet.search(val)>=0) {
        state.push(result[i]);
        }
     
    }
    console.log(state);
    res.send(state);
      
    });

app.post('/json',function(req,res){
 // console.log("Output Content : \n"+ JSON.stringify(req.body));
 var file = path.join(__dirname,'public/ajax/products.json');
 fs.writeFile(file, JSON.stringify(req.body));
});

app.get('/json', function(req, res, next) {
   fs.readFile(path.join(__dirname,'public/ajax/products.json'), 'utf8', function(err, data){
   // console.log(data);
    res.end(JSON.stringify(data));
  })
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
