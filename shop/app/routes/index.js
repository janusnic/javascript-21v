var express = require('express');
var router = express.Router(),
fs = require("fs"),
multiparty = require('multiparty');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
   res.render('catalog', { title: 'Shopping Express' });
});

router.get('/admin', function(req, res, next) {
   res.render('admin', { title: 'Admin Shopping Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express Ajax upload' });
});

router.post('/upload', function(req, res, next) {
    // create a form to begin parsing
    var form = new multiparty.Form();
    var uploadFile = {uploadPath: '', type: '', size: 0};
    var maxSize = 2 * 1024 * 1024; //2MB
    var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    var errors = [];

    form.on('error', function(err){
        if(fs.existsSync(uploadFile.path)) {
            fs.unlinkSync(uploadFile.path);
            console.log('error');
        }
    });

    form.on('close', function() {
        if(errors.length == 0) {
            res.send({status: 'ok', text: 'Success'});
        }
        else {
            if(fs.existsSync(uploadFile.path)) {
                fs.unlinkSync(uploadFile.path);
            }
            res.send({status: 'bad', errors: errors});
        }
    });

    // listen on part event for image file
    form.on('part', function(part) {
        uploadFile.size = part.byteCount;
        uploadFile.type = part.headers['content-type'];
        uploadFile.path = './public/images/' + part.filename;

        if(uploadFile.size > maxSize) {
            errors.push('File size is ' + uploadFile.size / 1024 / 1024 + '. Limit is' + (maxSize / 1024 / 1024) + 'MB.');
        }

        if(supportMimeTypes.indexOf(uploadFile.type) == -1) {
            errors.push('Unsupported mimetype ' + uploadFile.type);
        }

        if(errors.length == 0) {
            var out = fs.createWriteStream(uploadFile.path);
            part.pipe(out);
        }
        else {
            part.resume();
        }
    });

    // parse the form
    form.parse(req);
});



router.get('/ajax', function(req, res, next) {
  res.render('ajax', { title: 'Express Ajax Blog' });
});

router.get('/statechange', function(req, res, next) {
  res.render('statechange', { title: 'Express Ajax Blog' });
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
