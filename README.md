# javascript-21v unit 17

загрузка файлов на сервер Node.js с помощью JQuery Ajax
--------------------------------------------------------
JQuery File Upload - http://blueimp.github.io/jQuery-File-Upload/

будем использовать Bootstrap JQuery
-----------------------------------
upld.jade
---------

    doctype html
    html(lang='ru')
      head
        meta(charset='utf-8')
        meta(http-equiv='X-UA-Compatible' content='IE=edge')
        meta(name='viewport' content='width=device-width, initial-scale=1')
        meta(name='description' content="")
        meta(name='author' content="xfakehopex")
        title= title
        link(rel='stylesheet', href='/stylesheets/bootstrap.min.css')
        link(rel='stylesheet', href='/stylesheets/upload.css')

        //HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries
        | <!--[if lt IE 9]>
        | <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        | <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        | <![endif]-->
      body
      body
        .container
          block content
        script(src='/javascripts/jquery.min.js')
        script(src='/javascripts/bootstrap.min.js')
        block otherScripts

upload.jade
------------

      extends upld

      block content
        h1 File Uploads
        hr
        input(type='file',style='display: none', name='uploadFiles',id='uploadFiles',multiple)
        div(style='margin-bottom:15px')
          button.btn.btn-primary(id='addFilesButton') Add files
          button.btn.btn-primary(id='uploadAllFilesButton', style='margin-left:5px') Upload All
        div.progress
          div#progress.progress-bar(role='progressbar', style='width: 0%')
        table#files.table


      block otherScripts
        script(src='/javascripts/image.upload.js')


layout.jade
-----------

        #header
          ul
            li
              a(href='') Home
            li
              a(href='') BRANDS
            li
              a(href='/upload') Upload
            li
              a#login(href='#') SingIn/SignUp
            li
              a(href='/admin') Admin

index.js
--------

      router.get('/upload', function(req, res, next) {
        res.render('upload', { title: 'Express Ajax upload' });
      });

класс JSUploader
================
        function JSUploader() {
            this.allFiles = [];
            var baseClass = this;

            this.addFiles = function(files) {
                $.each(files, function(i, file) {
                    var temp = {file: file, progressTotal: 0, progressDone: 0, element: null, valid: false};

                    temp.valid = (file.type == 'image/png'
                        || file.type == 'image/jpeg'
                        || file.type == 'image/jpg') && file.size / 1024 / 1024 < 2;

                    temp.element = baseClass.attachFileToView(temp);
                    baseClass.allFiles.unshift(temp);
                });
            };

            this.uploadFile =  function(index) {
                var file = baseClass.allFiles[index];

                if(file.valid) {
                    var data = new FormData();
                    data.append('uploadFile', file.file);

                    $.ajax({
                        url: '/upload',
                        data: data,
                        cache: false,
                        contentType: false,
                        processData: false,
                        type: 'POST',
                        success: function (response) {
                            var message = file.element.find('td.message');
                            if (response.status == 'ok') {
                                message.html(response.text);
                                file.element.find('button.uploadButton').remove();
                            }
                            else {
                                message.html(response.errors);
                            }
                        },
                        xhr: function () {
                            var xhr = $.ajaxSettings.xhr();

                            if (xhr.upload) {
                                console.log('xhr upload');

                                xhr.upload.onprogress = function (e) {
                                    file.progressDone = e.position || e.loaded;
                                    file.progressTotal = e.totalSize || e.total;
                                    baseClass.updateFileProgress(index, file.progressDone, file.progressTotal, file.element);
                                    baseClass.totalProgressUpdated();
                                    console.log('xhr.upload progress: ' + file.progressDone + ' / ' + file.progressTotal + ' = ' + (Math.floor(file.progressDone / file.progressTotal * 1000) / 10) + '%');
                                };
                            }

                            return xhr;
                        }
                    });
                }
            };

            this.uploadAllFiles =  function() {
                $.each(baseClass.allFiles, function(i, file) {
                    baseClass.uploadFile(i);
                });
            };

            this.updateFileProgress = function(index, done, total, view) {
                var percent = (Math.floor(done/total*1000)/10);

                var progress = view.find('div.progress-bar');

                progress.width(percent + '%');
                progress.html(percent + '%');
            };

            this.updateTotalProgress = function(done, total) {
                var percent = (Math.floor(done/total*1000)/10);
                $('#progress').width(percent + '%');
                $('#progress').html(percent + '%');
            };

            this.totalProgressUpdated = function() {
                var done = 0.0;
                var total = 0.0;

                $.each(baseClass.allFiles, function(i, file) {
                    done += file.progressDone;
                    total += file.progressTotal;
                })

                baseClass.updateTotalProgress(done, total);
            };

            this.attachFileToView = function(file) {
                var row = $('<tr>');
                row.hide();

                var isValidType = (file.file.type == 'image/png'
                    || file.file.type == 'image/jpeg'
                    || file.file.type == 'image/jpg');

                var isValidSize = file.file.size / 1024 / 1024 < 2;

                //create preview
                var preview = $('<td>');
                preview.width('100px');
                if(isValidType)
                {
                    var img = $('<img>');
                    img.attr('class', 'img-fullsize');

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        img.attr('src', e.target.result);
                    }
                    reader.readAsDataURL(file.file);

                    preview.append(img);
                }

                //create file info column
                var fileInfo = $('<td>');
                fileInfo.width('200px');

                var fileName = $('<div>');
                fileName.html(file.file.name);

                var fileType = $('<div>');
                fileType.html(file.file.type);

                var fileSize = $('<div>');
                var size = file.file.size;

                if((file.file.size / 1024 / 1024) > 1.0) {
                    fileSize.html(Math.floor(file.file.size / 1024 / 1024) + ' MB');
                }
                else if((file.file.size / 1024) > 1.0) {
                    fileSize.html(Math.floor(file.file.size / 1024) + ' KB');
                }
                else {
                    fileSize.html(file.file.size + ' bytes');
                }


                fileInfo.append(fileName);
                fileInfo.append(fileType);
                fileInfo.append(fileSize);

                //create message column
                var messageColumn = $('<td>');
                messageColumn.attr('class', 'message');
                messageColumn.width('200px');
                if(!isValidType)
                {
                    messageColumn.html('Unsupported mimetype ' + file.file.type);
                }
                if(!isValidSize) {
                    messageColumn.html(messageColumn.html() + 'File size is ' + Math.floor(file.file.size / 1024 / 1024) + ' MB. Limit is2 MB.');
                }

                //create progress
                var progressColumn = $('<td>');
                progressColumn.attr('style', 'vertical-align: middle;');
                if(file.valid) {
                    var progress = $('<div>');

                    progress.attr('class', 'progress');

                    var progressBar = $('<div>');
                    progressBar.attr('class', 'progress-bar');
                    progressBar.attr('role', 'progressbar');
                    progressBar.html('0%');

                    progress.append(progressBar);
                    progressColumn.append(progress);
                }

                //create buttons
                var button1 = $('<td>');
                button1.attr('style', 'vertical-align: middle; width:50px');

                var uploadButton = $('<button>');
                uploadButton.attr('class', 'btn btn-primary uploadButton');
                uploadButton.html('Upload');
                uploadButton.click(function(){
                    baseClass.uploadFile(row.index());
                });
                if(file.valid) {
                    button1.append(uploadButton);
                }

                var button2 = $('<td>');
                button2.width('50px');

                var removeButton = $('<button>');
                removeButton.attr('class', 'close');
                removeButton.html('&times');
                removeButton.click(function(){
                    baseClass.allFiles.splice(row.index(), 1);
                    row.fadeOut(300, function(){
                        $(this).remove();
                    });
                });
                button2.append(removeButton);

                row.append(preview);
                row.append(fileInfo);
                row.append(messageColumn);
                row.append(progressColumn);
                row.append(button1);
                row.append(button2);
                row.fadeIn();

                $('#files').prepend(row);

                return row;
            };
        }

        var uploader = new JSUploader();

        $(document).ready(function()
        {
            $("#addFilesButton").click(function() {
                $("#uploadFiles").replaceWith($("#uploadFiles").clone(true));
                $("#uploadFiles").click();
            });

            $("#uploadAllFilesButton").click(function() {
                uploader.uploadAllFiles();
            });

            $("#uploadFiles").change(function() {
                var files = this.files;

                uploader.addFiles(files);
            });

        });


Отправка файла с помощью Ajax
-----------------------------

За загрузку отвечает класс JSUploader вот один из его методов uploadFile:

      this.uploadFile =  function(index) {
              //baseClass это this
              var file = baseClass.allFiles[index];

              //Создаем объек FormData
              var data = new FormData();
              //Добавлем туда файл
              data.append('uploadFile', file.file);

              //отсылаем с попощью Ajax
              $.ajax({
                  url: '/upload',
                  data: data,
                  cache: false,
                  contentType: false,
                  processData: false,
                  type: 'POST',
                  success: function(response) {
                      var message = file.element.find('td.message');
                      if(response.status == 'ok') {
                          message.html(response.text);
                          file.element.find('button.uploadButton').remove();
                      }
                      else {
                          message.html(response.errors);
                      }
                  },
                  xhr: function() {
                      var xhr = $.ajaxSettings.xhr();

                      if ( xhr.upload ) {
                          console.log('xhr upload');

                          xhr.upload.onprogress = function(e) {
                              file.progressDone = e.position || e.loaded;
                              file.progressTotal = e.totalSize || e.total;
                              //обновляем прогресс для файла
                              baseClass.updateFileProgress(index, file.progressDone, file.progressTotal, file.element);
                              //обновляем общий прогресс
                              baseClass.totalProgressUpdated();
                          };
                      }

                      return xhr;
                  }
              });
          };

Обработка загрузки файлов
--------------------------
Для загрузки файлов на сервер нам понадобиться модуль multiparty, который можно установить с помощью команды в консоле:

    npm install multiparty

Далее код который обрабатывает post и get запросы начальной страницы. Здесь мы отображаем форму загрузки и обрабатываем post запрос на загрузку файла.
При окончание загрузки мы сообщаем клиенту что все хорошо или если есть ошибки, то отправить их. 

index.js
---------

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

        //здесь происходит сама загрузка
        router.post('/upload', function(req, res, next) {
            // создаем форму
            var form = new multiparty.Form();
            //здесь будет храниться путь с загружаемому файлу, его тип и размер
            var uploadFile = {uploadPath: '', type: '', size: 0};
            //максимальный размер файла
            var maxSize = 2 * 1024 * 1024; //2MB
            //поддерживаемые типы(в данном случае это картинки формата jpeg,jpg и png)
            var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
            //массив с ошибками произошедшими в ходе загрузки файла
            var errors = [];

            //если произошла ошибка
            form.on('error', function(err){
                //если загружаемый файл существует удаляем его
                if(fs.existsSync(uploadFile.path)) {
                    fs.unlinkSync(uploadFile.path);
                    console.log('error');
                }
            });

            //если нет ошибок и все хорошо
            form.on('close', function() {
                //сообщаем что все хорошо
                if(errors.length == 0) {
                    res.send({status: 'ok', text: 'Success'});
                }
                else {
                    //если загружаемый файл существует удаляем его
                    if(fs.existsSync(uploadFile.path)) {
                        fs.unlinkSync(uploadFile.path);
                    }
                    //сообщаем что все плохо и какие произошли ошибки
                    res.send({status: 'bad', errors: errors});
                }
            });
            
            // при поступление файла
            form.on('part', function(part) {
                //читаем его размер в байтах
                uploadFile.size = part.byteCount;
                //читаем его тип
                uploadFile.type = part.headers['content-type'];
                //путь для сохранения файла
                uploadFile.path = './public/images/' + part.filename;

                //проверяем размер файла, он не должен быть больше максимального размера
                if(uploadFile.size > maxSize) {
                    errors.push('File size is ' + uploadFile.size / 1024 / 1024 + '. Limit is' + (maxSize / 1024 / 1024) + 'MB.');
                }

                //проверяем является ли тип поддерживаемым
                if(supportMimeTypes.indexOf(uploadFile.type) == -1) {
                    errors.push('Unsupported mimetype ' + uploadFile.type);
                }

                //если нет ошибок то создаем поток для записи файла
                if(errors.length == 0) {
                    var out = fs.createWriteStream(uploadFile.path);
                    part.pipe(out);
                }
                else {
                    // пропускаем
                    // здесь нужно остановить загрузку и перейти к onclose
                    part.resume();
                }
            });

            // парсим форму
            form.parse(req);
        });

        // routes will go here
        router.get('/api/test', function(req, res) {
          var token = req.param('text');

          res.send(token);
        });

        module.exports = router;
