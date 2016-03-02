# javascript-21v

Web разработка на node.js и express
===================================
node.js - http://nodejs.org/
----------------------------
это серверная платформа, для выполнения javascript. 
express - web-фреймворк построеный на концепции middleware

Рабочее окружение
------------------
Установка git
-------------
```
$ sudo apt-get install git-core
```

http://git-scm.com/book/ch1-4.html

Установка node.js и npm
------------------------
```
$ sudo apt-get install python-software-properties
$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs npm
```

Среда разработки
----------------

Express и первое приложение
-----------------------------

Устанавливаем express глобально:
--------------------------------
```
$ sudo npm install -g express
$ sudo npm install -g express-generator
```
Создаем директорию для наших учебных проектов:
----------------------------------------------
```
$ mkdir -p ~/projects/shop
$ cd ~/projects/nshop
```
Создаем проект и устанавливаем зависимости:
-------------------------------------------
```
$ express app
$ cd app && npm install
```
Теперь приложение можно запустить:
-----------------------------------
```
$ node app

```
И увидеть результат работы http://localhost:3000/


Использование шаблонизаторов в Express
======================================
Для того чтобы отображать в Express файлы шаблонов, необходимо задать следующие параметры приложения:

- views, каталог, в котором находятся файлы шаблонов. Например: app.set('views', './views')
- view engine, используемый шаблонизатор. Например: app.set('view engine', 'jade')

Затем установите соответствующий пакет npm шаблонизатора:
```
$ npm install jade --save
```
Шаблонизаторы, совместимые с Express, например, Jade, экспортируют функцию __express(filePath, options, callback), вызываемую с помощью функции res.render() для вывода кода шаблона.

Это правило действует не для всех шаблонизаторов. Библиотека Consolidate.js соблюдает его путем преобразования всех популярных шаблонизаторов Node.js, благодаря чему работает в Express без проблем.
Express загружает модуль внутренними средствами.

```
app.set('view engine', 'jade');
```
Создайте файл шаблона Jade с именем index.jade в каталоге views со следующим содержанием:
```

html
  head
    title!= title
  body
    h1!= message
```
Затем создайте маршрут для вывода файла index.jade. Если свойство view engine не задано, необходимо указать расширение файла view. В противном случае, можно не указывать расширение.
```
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
```
При выполнении запроса к домашней странице файл index.jade будет отображаться как HTML.

layout.jade
-----------
```
doctype html
html
  head
    title= title
    meta(charset='UTF-8')
    meta(name='viewport' content='width=device-width, initial-scale=1.0')
    script(src='/javascripts/modernizr.js' type='text/javascript')
    link(rel='stylesheet prefetch' href='/stylesheets/normalize.css')
    link(rel='stylesheet', href='/stylesheets/style.css')
    script(src='/javascripts/prefixfree.min.js')
    script(src='/javascripts/jquery.min.js')
    script(src='/javascripts/login.js')
   
  body
    #loginbox
      .form
        .toggle
          i.fa.fa-times.fa-pencil
          .tooltip Register
        h2 Login to your account
        form
          input(type='text', id='user', placeholder='Username')
          input(type='password', id='password', placeholder='Password')
          button#signin(type='button') Login
      .form
        .toggle
          i.fa.fa-times.fa-pencil
          .tooltip Login
        h2 Create an account
        form
          input(type='text', id='username', placeholder='Username')
          input(type='password', id='userpasswd', placeholder='Password')
          input(type='email', id='email', placeholder='Email Address')
          input(type='tel', id='tel', placeholder='Phone Number')
          button#signup(type='button') Register
      .cta
        a(href='#') Forgot your password?
    #header
      span My Simple Blog
      ul#menu
        li
          a.article(href='/') Home
        li
          a.article(href='/test1') Ajax
        li
          a.article(href='/getpost') Get/Post
        li
          a.article(href='/statechange') Change State
        li
          a.article(href='/table') Table
        li
          a.article(href='/shop') Catalog
        li
          a.article(href='#' id='login') Login

    block content

```
index.jade
----------
```
extends layout

block content
    #content
      h2
        a(href='ui_libraries_comparison.html') JavaScript UI libraries comparison
      p
        | It seems to be pretty easy to create a good-looking web page. Even your neighbor has one or two of them. It's for sure! For approximately two decades of World Wide Web existence hordes of web developers are trying to improve the way of how you interact with the Global Network. And how it interacts with you through different technologies such as JavaScript, for example... 
        a.article(href='ui_libraries_comparison.html') Read more
      h2
        a(href='') Node.js for beginners. Building your own web server
      p
        | We will use Node.js for our project. Node.js is an open source, cross-platform runtime environment, which allows you to build server-side and networking applications. It's written in JavaScript and can be run within the Node.js runtime on any platform. First of all, of course, you need to install it... 
        a.article(href='hode.html') Read more

```
HTML to Jade conversion tool
============================
Install
--------
```
npm install -g html2jade
```

Command-line Usage
-------------------
```
html2jade mywebpage.html # outputs mywebpage.jade
html2jade public/*.html  # converts all .html files to .jade
```

Online converter
----------------
http://html2jade.org/

HTML as the view engine in Express
-----------------------------------
```
 npm install consolidate
 npm install swig
```

app.js file
------------
```
var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', ‘html');
```

Model-View-Controller (MVC)
===========================
типичная архитектура web-приложения на наиболее высоком уровне абстракции. Самым популярным архитектурным паттерном на сегодняшний день является model-view-controller (MVC), общий смысл паттерна заключается в том, чтобы разделить бизнес логику приложения (её привязывают к моделям) и представление - view. Кроме того, модели реализуют интерфейс к базе данных. Контроллер играет роль посредника между моделью и представлением. В случае web-приложения - это выглядит так: браузер пользователя отправляет запрос на сервер, контроллер обрабатывает запрос, получает необходимые данные из модели и отправляет их во view. View получает данные из контроллера и превращает их в красивую HTML страничку, которую контроллер в итоге отправит пользователю.

Пакеты npm - node package manager
---------------------------------
 В общих чертах пакет npm - это директория содержащая программу и файл package.json, описывающий эту программу, в том числе в этом файле можно указать от каких других пакетов зависит наша программа. 

 создадим в корневой директории нашего проекта файлик:
```
$ touch package.json
package.json:

{
    "name": "node-demo-app"
  , "version": "0.0.1"
  , "scripts": { "start": "node server.js" }
  , "dependencies": { "express": "3.0.x" }
}
```
Теперь можно выполнить
```
$ npm install
```
В результате npm создаст директорию node_modules в которую поместит все модули от которых зависит наш проект.


Основы XMLHttpRequest
=====================
Объект XMLHttpRequest (XHR) дает возможность из JavaScript делать HTTP-запросы к серверу без перезагрузки страницы.

Несмотря на слово XML в названии, XMLHttpRequest может работать с любыми данными, а не только с XML.

Как правило, XMLHttpRequest используют для загрузки данных.

routes
======
index.js
--------
```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ajax', function(req, res, next) {
  res.render('test1', { title: 'Express Ajax' });
});

module.exports = router;

```

пример использования, который загружает файл test.txt из текущей директории и выдаёт его содержимое:

test1.jade
-----------
```
extends layout

block content
  script(src='/javascripts/ajax.js')
  #content
    h2 Test Ajax 1
    button(onclick='loadTest()') Загрузить test.txt!

```
javascripts/ajax.js
-------------------
```
function loadTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/test.txt', false);
      xhr.send();

      if (xhr.status != 200) {
            // обработать ошибку
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
            // вывести результат
            alert(xhr.responseText);
      }
}
```
routes/index.js
---------------
```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ajax', function(req, res, next) {
  res.render('test1', { title: 'Express Ajax' });
});
  res.send(token);
});

module.exports = router;

```

метод open
----------
Синтаксис:
```
xhr.open(method, URL, async, user, password)
```
Этот метод — вызывается первым после создания объекта XMLHttpRequest.

Задаёт основные параметры запроса:
----------------------------------
- method — HTTP-метод. Как правило, используется GET либо POST, хотя доступны и более экзотические, вроде TRACE/DELETE/PUT и т.п.
- URL — адрес запроса. Можно использовать не только http/https, но и другие протоколы, например ftp:// и file://.
При этом есть ограничения безопасности, называемые «Same Origin Policy»: запрос со страницы можно отправлять только на тот же протокол://домен:порт, с которого она пришла. 

- async — если установлено в false, то запрос производится синхронно, если true — асинхронно.
«Синхронный запрос» означает, что после вызова xhr.send() и до ответа сервера главный поток будет «заморожен»: посетитель не сможет взаимодействовать со страницей — прокручивать, нажимать на кнопки и т.п. После получения ответа выполнение продолжится со следующей строки.

«Асинхронный запрос» означает, что браузер отправит запрос, а далее результат нужно будет получить через обработчики событий, которые мы рассмотрим далее.

- user, password — логин и пароль для HTTP-авторизации, если нужны.

Вызов open не открывает соединение
-----------------------------------
Он лишь настраивает запрос, а коммуникация инициируется методом send.


Отослать данные: send
---------------------
Синтаксис:
```
xhr.send([body])
```
Именно этод метод открывает соединение и отправляет запрос на сервер.

В body находится тело запроса. Не у всякого запроса есть тело, например у GET-запросов тела нет, а у POST — основные данные как раз передаются через body.

Отмена: abort
--------------
Вызов xhr.abort() прерывает выполнение запроса.

Ответ: status, statusText, responseText
-----------------------------------------
Основные свойства, содержащие ответ сервера:

- status
HTTP-код ответа: 200, 404, 403 и так далее. Может быть также равен 0, если сервер не ответил или при запросе на другой домен.
- statusText
Текстовое описание статуса от сервера: OK Not Found, Forbidden и так далее.
- responseText
Текст ответа сервера.
- responseXML
Если сервер вернул XML, снабдив его правильным заголовком Content-type: text/xml, то браузер создаст из него XML-документ. По нему можно будет делать запросы xhr.responseXml.querySelector("...") и другие.
Оно используется редко, так как обычно используют не XML, а JSON. То есть, сервер возвращает JSON в виде текста, который браузер превращает в объект вызовом JSON.parse(xhr.responseText).

Синхронные и асинхронные запросы
---------------------------------
Если в методе open установить параметр async равным false или просто забыть его указать, то запрос будет синхронным.

Синхронные вызовы используются чрезвычайно редко, так как блокируют взаимодействие со страницей до окончания загрузки. Посетитель не может даже прокручивать её. Никакой JavaScript не может быть выполнен, пока синхронный вызов не завершён — в общем, в точности те же ограничения как alert.
```
// Синхронный запрос
xhr.open('GET', 'test.txt', false);

// Отсылаем его
xhr.send();
// ...весь JavaScript "подвиснет", пока запрос не завершится
```
Если синхронный вызов занял слишком много времени, то браузер предложит закрыть «зависшую» страницу.

Из-за такой блокировки получается, что нельзя отослать два запроса одновременно. Кроме того ряд продвинутых возможностей, таких как возможность делать запросы на другой домен и указывать таймаут, в синхронном режиме не работают.

Для того, чтобы запрос стал асинхронным, укажем параметр async равным true.

test1.jade:

```
extends layout

block content
  script(src='/javascripts/ajax.js')
  #content
    h2 Test Ajax 1
    button(onclick='loadTest()') Загрузить test.txt!
    
    h2 Test Ajax 2
    button#button(onclick='loadAsyncTest()') Загрузить testa.txt!

```
javascripts/ajax.js
-------------------
```
function loadTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/test.txt', false);
      xhr.send();

      if (xhr.status != 200) {
            // обработать ошибку
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
            // вывести результат
            alert(xhr.responseText);
      }
}

  function loadAsyncTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/testa.txt', true);
      xhr.send(); // (1)
      xhr.onreadystatechange = function() { // (3)
      
      if (xhr.readyState != 4) return;
            button.innerHTML = 'Готово!';
            if (xhr.status != 200) {
                  // обработать ошибку
                  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            } else {
                  // вывести результат
                  alert(xhr.responseText);
            }
      }
      
      button.innerHTML = 'Загружаю...'; //2
      button.disabled = true;
}
```

Если в open указан третий аргумент true, то запрос выполняется асинхронно. Это означает, что после вызова xhr.send() код не «зависает», а преспокойно продолжает выполняться.

Событие readystatechange
------------------------
Событие readystatechange происходит несколько раз в процессе отсылки и получения ответа. При этом можно посмотреть «текущее состояние запроса» в свойстве xhr.readyState.

## Все состояния, по спецификации:
```
const unsigned short UNSENT = 0; // начальное состояние
const unsigned short OPENED = 1; // вызван open
const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
const unsigned short DONE = 4; // запрос завершён
```
json
-----
test1.jade
```
extends layout

block content
  script(src='/javascripts/ajax.js')
  #content
    h2 Test Ajax 1
    button(onclick='loadTest()') Загрузить test.txt!
    
    h2 Test Ajax 2
    button#button(onclick='loadAsyncTest()') Загрузить testa.txt!

    h2 Test Ajax 3
    button#button(onclick='loadPhones()') Загрузить phones.json!
      
```

javascripts/ajax.js
-------------------
```
function loadTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/test.txt', false);
      xhr.send();

      if (xhr.status != 200) {
            // обработать ошибку
            alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
            // вывести результат
            alert(xhr.responseText);
      }
}

  function loadAsyncTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/ajax/testa.txt', true);
      xhr.send(); // (1)
      xhr.onreadystatechange = function() { // (3)
      
      if (xhr.readyState != 4) return;
            button.innerHTML = 'Готово!';
            if (xhr.status != 200) {
                  // обработать ошибку
                  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
            } else {
                  // вывести результат
                  alert(xhr.responseText);
            }
      }
      
      button.innerHTML = 'Загружаю...'; //2
      button.disabled = true;
}

function loadPhones() {
      // 1. Создаём новый объект XMLHttpRequest
      var xhr = new XMLHttpRequest();
      // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
      xhr.open('GET', '/ajax/phones.json', true);
      // 3. Отсылаем запрос
      xhr.send();
      xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
            button.innerHTML = 'Готово!';
            // 4. Если код ответа сервера не 200, то это ошибка
            if (xhr.status != 200) {
                  // обработать ошибку
                  alert(xhr.status + ': ' + xhr.statusText);
            } else {
                  // вывести результат
                  alert(xhr.responseText);
            }
      }
      button.innerHTML = 'Загружаю...';
      button.disabled = true;
}

```
statechange.jade
----------------
```
extends layout

block content
  script(src='/javascripts/ajax1.js')
  #content
    h2 Post Ajax

    button(onclick="startAjax('/users/api/users','GET');") Get Ajax
    button(onclick="startAjax('/users/api/users','POST');") Post Ajax
    #console(style='border: 1px solid gray; width:250px; height: 110px; padding: 10px; background:lightgray;')
      | Cosole log panel
    br
    #printResult
      | print result


```
javascripts/ajax1.js
--------------------
```
function startAjax(url,method){
  var request; 
  if(window.XMLHttpRequest){ 
      request = new XMLHttpRequest(); 
  } else if(window.ActiveXObject){ 
      request = new ActiveXObject("Microsoft.XMLHTTP");  
  } else { 
      return; 
  } 
  document.getElementById("console").innerHTML = ''; 
  request.onreadystatechange = function(){
    
    switch (request.readyState) {
      case 1: print_console("<br/><em>1: вызван open...</em>"); break
      case 2: print_console("<br/><em>2: получены заголовки...</em>"); break
      case 3: print_console("<br/><em>3: загружается тело..</em>"); break
      case 4:{
       if(request.status==200){   
            print_console("<br/><em>4: запрос завершён</em>"); 
            document.getElementById("printResult").innerHTML = "<b>"+request.responseText+"</b>"; 
           }else if(request.status==404){
            alert("HTTP Status: 404 : NOT FOUND!");
           }
            else alert("текущее состояние запроса: "+ request.status);
       
      break
      }
    }   
    } 
  
  //
  if (method=="GET")
  {
    request.open("GET",url+"?id=1&token=sadsf4&geo=us",true);
  }
  else
  {
  request.open("POST",url+"?id=2&token=sadsf4&geo=us",true);
  }
  
  request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  
  request.send();
  } 
  function print_console(text){
    document.getElementById("console").innerHTML += text; 
  }
```
routes/users.js
---------------
```
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

```
JSON
=====

Объект JSON содержит методы для разбора объектной нотации JavaScript (JavaScript Object Notation — сокращённо JSON) и преобразования значений в JSON. Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух методов он не содержит никакой интересной функциональности.

Объектная нотация JavaScript
----------------------------
JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения null. Он основывается на синтаксисе JavaScript, однако всё же отличается от него: не каждый код на JavaScript является JSON, и не каждый JSON является кодом на JavaScript.

Различия между JavaScript и JSON
--------------------------------

Объекты и массивы   
------------------
Имена свойств должны быть строками, заключёнными в двойные кавычки; конечные запятые запрещены.

Числа
------
Ведущие нули запрещены; перед десятичной запятой обязательно должна быть хотя бы одна цифра.
Строки
-------  
Только ограниченный набор символов может быть заэкранирован; некоторые управляющие символы запрещены; разрешены юникодные символы разделительной линии (U+2028) и разделительного параграфа (U+2029); строки должны быть заключены в двойные кавычки. 
```
var code = '"\u2028\u2029"';
JSON.parse(code); // работает
```
Формат JSON
============
Данные в формате JSON (RFC 4627 http://tools.ietf.org/html/rfc4627) представляют собой:

1. JavaScript-объекты { ... } или
2. Массивы [ ... ] или
3. Значения одного из типов:
- строки в двойных кавычках,
- число,
- логическое значение true/false,
- null.
Почти все языки программирования имеют библиотеки для преобразования объектов в формат JSON.

Объекты и массивы   
------------------
```
var products =
[
    {
        "id": 0,
        "price": 1231,
        "impriceUrl": "/images/1.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },
    {
        "id": 1,
        "price": 1234,
        "impriceUrl": "/images/2.jpg",
        "name": "MOTOROLA XOOM\u2122",
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }
]

```

Основные методы для работы с JSON в JavaScript
-----------------------------------------------
1. JSON.parse – читает объекты из строки в формате JSON.
2. JSON.stringify – превращает объекты в строку в формате JSON, используется, когда нужно из JavaScript передать данные по сети.

Метод JSON.parse
----------------
Вызов JSON.parse(str) превратит строку с данными в формате JSON в JavaScript-объект/массив/значение.

```
var numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
```

Данные могут быть сколь угодно сложными, объекты и массивы могут включать в себя другие объекты и массивы. Главное чтобы они соответствовали формату.

JSON-объекты ≠ JavaScript-объекты
----------------------------------
```
{
  name: "Вася",       // ошибка: ключ name без кавычек!
  "surname": 'Петров',// ошибка: одинарные кавычки у значения 'Петров'!
  "age": 35,           // .. а тут всё в порядке.
  "isAdmin": false    // и тут тоже всё ок
}
```
Кроме того, в формате JSON не поддерживаются комментарии. Он предназначен только для передачи данных.

JSON.parse()
=============

Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.

Пример: использование метода JSON.parse()
-----------------------------------------
```
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null

```
1 Метод JSON.parse
-------------------
```
  
  var jsonObject = JSON.parse(request.responseText);

  for(var i = 0; i < jsonObject.length; i++) {
       var obj = jsonObject[i];

       console.log(obj.name);
   }

```

table.jade
----------
```
extends layout

block content
  script(src='/javascripts/table.js')
  #content
    h2 Table
    button#button(onclick='loadPhones()') Загрузить products.json!

```
javascripts/table.js
--------------------
```
var USER_FILE;
      var VanillaRunOnDomReady = function() {
      var _table_ = document.createElement('table'),
      _tr_ = document.createElement('tr'),
      _th_ = document.createElement('th'),
      _td_ = document.createElement('td');
      function buildHtmlTable(arr) {
      var table = _table_.cloneNode(false),
      columns = addAllColumnHeaders(arr, table);
      for (var i=0, maxi=arr.length; i < maxi; ++i) {
      var tr = _tr_.cloneNode(false);
      for (var j=0, maxj=columns.length; j < maxj ; ++j) {
      var td = _td_.cloneNode(false);
      cellValue = arr[i][columns[j]];
      td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
      tr.appendChild(td);
      }
      table.appendChild(tr);
      }
      return table;
      }
      function addAllColumnHeaders(arr, table)
      {
      var columnSet = [],
      tr = _tr_.cloneNode(false);
      for (var i=0, l=arr.length; i < l; i++) {
      for (var key in arr[i]) {
      if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
      columnSet.push(key);
      var th = _th_.cloneNode(false);
      th.appendChild(document.createTextNode(key));
      tr.appendChild(th);
      }
      }
      }
      table.appendChild(tr);
      return columnSet;
      }
      var persone  =  JSON.parse(USER_FILE);
      document.body.appendChild(buildHtmlTable(persone));
      }
      function loadPhones() {
      // 1. Создаём новый объект XMLHttpRequest
      var xhr = new XMLHttpRequest();
      // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
      xhr.open('GET', '/ajax/products.json', true);
      // 3. Отсылаем запрос
      xhr.send();
      xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      button.innerHTML = 'Готово!';
      // 4. Если код ответа сервера не 200, то это ошибка
      // по окончании запроса доступны:
      // status, statusText
      // responseText, responseXML (при content-type: text/xml)
      if (xhr.status != 200) {
      // обработать ошибку
      alert( 'ошибка: ' + this.status + 'запрос не удался');
      return;
      } else {
      // получить результат из this.responseText или this.responseXML
      // вывести результат
      //alert(xhr.responseText);
      USER_FILE = xhr.responseText;
      alreadyrunflag = 1;
      VanillaRunOnDomReady();
      }
      }
      button.innerHTML = 'Загружаю...';
      button.disabled = true;
      }
```

app.js
-------
```
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

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
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

```

catalog.jade
-------------
```
extends layout

block content
  script(src='/javascripts/ajax2.js')
  #content
    h2 Get JSON file from NodeJS
    br
    #printResult
      | print result


```
javascripts/ajax2.js
--------------------
```
var request = new XMLHttpRequest();  

request.open("GET",'/shopdata',true);
request.send();

request.onreadystatechange = function() {
      if (request.readyState != 4) return;
            // 4. Если код ответа сервера не 200, то это ошибка
            if (request.status != 200) {
                  // обработать ошибку
                  alert(request.status + ': ' + request.statusText);
            } else {
                  // вывести результат
                  //alert(request.responseText);
                  //document.getElementById("printResult").innerHTML = "<b>"+request.responseText+"</b>"; 
                  var jsonObject = JSON.parse(request.responseText);

                  
                  //var jsonObject = request.responseText;
                  //document.getElementById("printResult").innerHTML = "<b>"+jsonObject.length+"</b>"; 
                   /*                
                  for(var i = 0; i < jsonObject.length; i++) {
                        var obj = jsonObject[i];

                        console.log(obj.name);
                    }*/

                  var content = document.getElementById("printResult");
                  var h1, p, img, span;

                  for(var i=0; i<jsonObject.length;i++){

                   var item = jsonObject[i];
                   //console.log(item);

                   for (var k in item) {

                        var itemName = item['name'], 
                            itemDescription = item['snippet'], 
                            itemPrice = item['price'], 
                            itemImg = item['impriceUrl'], 
                            itemId = item['id'], 
                            
                        h1 = document.createElement('h1');
                        p = document.createElement('p');
                        span = document.createElement('span');
                        img = document.createElement('img');
                        h1.appendChild(document.createTextNode(itemName));
                        span.appendChild(document.createTextNode(itemPrice));
                        img.setAttribute('src', itemImg);

                        content.appendChild(h1);
                        content.appendChild(span);
                        content.appendChild(img);

                    }
                  }

            }
      }


```

index.js
---------
```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
   res.render('catalog', { title: 'Shopping Express' });
});

router.get('/test1', function(req, res, next) {
  res.render('test1', { title: 'Express Ajax' });
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

```
app.js
-------
```
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

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
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

app.get('/shopdata', function(req, res, next) {
   fs.readFile(path.join(__dirname,'public/ajax/products.json'), 'utf8', function(err, data){
    if (err) throw err;
    res.end(data);
    //res.end(JSON.stringify(data));
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

```
