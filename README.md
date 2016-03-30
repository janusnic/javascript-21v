# javascript-21v unit 16

Array.prototype.push()
======================

Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

    arr.push(element1, ..., elementN)

- elementN - Элементы, добавляемые в конец массива.
- Возвращаемое значение - Новое значение свойства length объекта, для которого был вызван данный метод.


Метод push присоединяет значения к массиву.

Метод push не является привязанным к типу; этот метод может быть вызван или применён к объектам, напоминающим массив. Метод опирается на свойство length для определения места вставки значений. Если свойство length не может быть преобразовано в число, будет использовать индекс 0. Сюда входит случай несуществования свойства length, в этом случае оно также будет создано.

Единственными родными массивоподобными объектами являются строки, хотя к ним он не может быть применён, поскольку строки являются неизменяемыми.


Пример: добавление элементов в массив
--------------------------------------
Следующий код создаёт массив sports, содержащий два элемента, а затем добавляет к нему ещё два элемента. Переменная total будет содержать новую длину массива.

    var sports = ['футбол', 'бейсбол'];
    var total = sports.push('американский футбол', 'плавание');

    console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
    console.log(total);  // 4
Пример: слияние двух массивов
-----------------------------
В этом примере используется функция apply() для помещения всех элементов из второго массива в первый.

    var vegetables = ['пастернак', 'картошка'];
    var moreVegs = ['сельдерей', 'свёкла'];

    // Сливает второй массив с первым
    // Эквивалентно вызову vegetables.push('сельдерей', 'свёкла');
    Array.prototype.push.apply(vegetables, moreVegs);

    console.log(vegetables); // ['пастернак', 'картошка', 'сельдерей', 'свёкла']


script.js
---------

      $("#addproduct").click(function(){
          $template = $($('#productListTemplate').html());
          $template.find('h1').text($('#productTitleInput').val().substring(0,20));
          $template.find('#dateNumber').text($('#productDate').val().slice(0,2));
          $template.find('#dateDay').text($('#productDate').val().slice(3,5));
          $template.find('#productPrice').text($('#productPriceInput').val());
          $template.find('#productQuantity').text($('#productQuantityInput').val());

          $list.append($template);

          var index = data.length;
          
          var item = {};

          item['id'] = index;
          item['sku'] = 'SCU00'+index;
          item['date'] = $('#productDate').val();
          item['category'] = $('#productCategoryInput').val();;
          item['discont'] = index;
          item['price'] = $('#productPriceInput').val();
          item['quantity'] = $('#productQuantityInput').val();
          item['impriceUrl'] = ["/images/1.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"];
          item['name'] = $('#productTitleInput').val();
          item['snippet'] = $('#productDescriptionInput').val();
             
          data.push(item);
         
          console.log(data.length);
          console.log(data[20].name);
          $(productForm).slideUp(400);
        })


str.search([regexp])
--------------------
Метод search() выполняет поиск сопоставления между регулярным выражением и этим объектом String.

Необязательный параметр. Объект регулярного выражения. Если будет передан не объект регулярного выражения, он будет неявно преобразован в объект RegExp через вызов конструктора new RegExp(regexp).

При успехе метод search() возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.

Если вы хотите узнать, находится ли шаблон в строке, используйте метод search() (он работает так же, как и метод test() регулярного выражения); для получения дополнительной информации (за счёт более медленного выполнения) используйте метод match() (работает так же, как метод exec() регулярного выражения).


В следующем примере в журнал попадает сообщение, зависящее от успешности или неуспешности прохождения проверки.

    function testinput(re, str) {
      var midstring;
      if (str.search(re) != -1) {
        midstring = ' содержит ';
      } else {
        midstring = ' не содержит ';
      }
      console.log(str + midstring + re);
    }




str.slice(beginSlice[, endSlice])
----------------------------------
Метод slice() извлекает часть строки и возвращает новую строку.

- beginSlice
Индекс, с которого начинать извлечение (нумерация начинается с нуля). Если отрицателен, то трактуется как sourceLength + beginSlice, где sourceLength — это длина строки (например, если параметр beginSlice равен -3, то он трактуется как sourceLength - 3).
- endSlice
Необязательный параметр. Индекс, которым заканчивать извлечение (нумерация начинается с нуля). Если опущен, slice() извлечёт всё до конца строки. Если отрицателен, то трактуется как sourceLength - endSlice, где sourceLength — это длина строки.

Метод slice() извлекает текст из одной строки и возвращает новую строку. Изменения текста в одной строке не влияют на другую строку.

Метод slice() извлекает все символы до индекса endSlice, не включая сам этот индекс. Вызов str.slice(1, 4) извлечёт символы со второго по четвёртый (символы по индексам 1, 2 и 3).

К примеру, вызов str.slice(2, -1) извлечёт символы с третьего по второй с конца строки.

Пример: использование метода slice() для создания новой строки
---------------------------------------------------------------
В следующем примере метод slice() используется для создания новой строки.

      var str1 = 'Приближается утро.';
      var str2 = str1.slice(4, -2);

      console.log(str2); // ВЫВОД: лижается утр

Пример: использование метода slice() с отрицательными индексами
----------------------------------------------------------------
В следующем примере метод slice() используется вместе с отрицательными индексами.

    var str = 'Приближается утро.';
    str.slice(-3);     // вернёт 'ро.'
    str.slice(-3, -1); // вернёт 'ро'
    str.slice(0, -1);  // вернёт 'Приближается утро'




str.split([separator[, limit]])
-------------------------------
Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.


- separator
Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки. Параметр separator может быть как строкой, так и регулярным выражением. Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. Если параметр равен пустой строке, строка str будет преобразована в массив символов.
- limit
Необязательный параметр. Целое число, определяющее ограничение на количество найденных подстрок. Метод split() всё равно разделяет строку на каждом сопоставлении с разделителем separator, но обрезает возвращаемый массив так, чтобы он содержал не более limit элементов.

Метод split() возвращает новый массив.

Если разделитель separator найден, он удаляется из строки, а подстроки возвращаются в массиве. Если разделитель опущен, массив будет содержать только один, состоящий из всей строки. Если разделитель является пустой строкой, строка str будет преобразована в массив символов.

Если разделитель является регулярным выражением, содержащим подгруппы, то каждый раз при сопоставлении с разделителем, результаты (включая те, что не определены) захвата подгруппы будут помещаться внутрь выходного массива. Однако, не все браузеры поддерживают эту возможность.


Пример: использование метода split()
------------------------------------
В следующем примере определяется функция, которая разбивает строку на массив строк, используя указанный разделитель. После разбиения строки, функция отображает сообщения, показывающие оригинальную строку (до разбиения), используемый разделитель, количество элементов в массиве и сами эти элементы.

      function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);

        console.log('Оригинальная строка: "' + stringToSplit + '"');
        console.log('Разделитель: "' + separator + '"');
        console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
      }

      // Строчка из «Бури» Шекспира. Перевод Миxаила Донского.
      var tempestString = 'И как хорош тот новый мир, где есть такие люди!';
      var monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';

      var space = ' ';
      var comma = ',';

      splitString(tempestString, space);
      splitString(tempestString);
      splitString(monthString, comma);




str.substr(start[, length])
---------------------------
Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.

- start
Позиция, с которой начинать извлекать символы. Если передано отрицательное число, она трактуется как strLength + start, где strLength равна длине строки (например, если параметр start равен -3, то он трактуется как strLength - 3.)
- length
Необязательный параметр. Количество извлекаемых символов.

Параметр start является индексом символа. Индекс первого символа равен 0, а последнего символа — на один меньше длины строки. Метод substr() начинает извлекать символы начиная с позиции start и собирая length символов (если он не достигнет раньше конца строки, в этом случае будет возвращено меньшее количество символов).

Если параметр start является положительным и он больше, либо равен длине строки, метод substr() вернёт пустую строку.

Если параметр start является отрицательным, метод substr() используется его как индекс символа, начиная с конца строки. Если параметр start отрицателен и по модулю больше длины строки, метод substr() будет использовать 0 в качестве начального индекса. Обратите внимание: описанная обработка отрицательных значений аргумента start не поддерживается JScript от Microsoft.

Если параметр length равен нулю или отрицателен, метод substr() вернёт пустую строку. Если параметр length опущен, метод substr() извлечёт все символы до конца строки.


Пример: использование метода substr()
--------------------------------------
      var str = 'абвгдеёжзи';

      console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): бв'
      console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): жз'
      console.log('(-3): '     + str.substr(-3));     // '(-3): жзи'
      console.log('(1): '      + str.substr(1));      // '(1): бвгдеёжзи'
      console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): аб'
      console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '

str.substring(indexA[, indexB])
-------------------------------
Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.


- indexA
Целое число от 0 до длины строки, определяющее смещение в строке первого символа, который будет включён в результирующую подстроку.
- indexB
Необязательный параметр. Целое число от 0 до длины строки, определяющее смещение в строке первого символа, который не будет включён в результирующую подстроку.

Метод substring() извлекает символы, начиная с индекса indexA до, но не включая, индекс indexB. В частности:

Если аргумент indexA равен аргументу indexB, метод substring() вернёт пустую строку.
Если аргумент indexB опущен, метод substring() извлечёт символы до конца строки.
Если любой из аргументов меньше, либо равен нулю или равен NaN, он будет трактоваться как равный 0.
Если любой из аргументов больше, чем stringName.length, он будет трактоваться как равный stringName.length.
Если аргумент indexA будет больше аргумента indexB, то метод substring() сработает так, как если бы аргументы были поменяны местами; например, str.substring(1, 0) == str.substring(0, 1).


Пример: использование метода substring()
-----------------------------------------
В следующем примере метод substring() используется для отображения символов из строки 'Mozilla':

      var anyString = 'Mozilla';

      // Отобразит 'Moz'
      console.log(anyString.substring(0, 3));
      console.log(anyString.substring(3, 0));

      // Отобразит 'lla'
      console.log(anyString.substring(4, 7));
      console.log(anyString.substring(7, 4));

      // Отобразит 'Mozill'
      console.log(anyString.substring(0, 6));

      // Отобразит 'Mozilla'
      console.log(anyString.substring(0, 7));
      console.log(anyString.substring(0, 10));

Пример: использование метода substring() вместе со свойством length
-------------------------------------------------------------------
Следующий пример использует метод substring() и свойство length для извлечения последних символов из строки. 

      // Отобразит 'illa' - последние 4 символа
      var anyString = 'Mozilla';
      var anyString4 = anyString.substring(anyString.length - 4);
      console.log(anyString4);

      // Отобразит 'zilla' - последние 5 символов
      var anyString = 'Mozilla';
      var anyString5 = anyString.substring(anyString.length - 5);
      console.log(anyString5);

Пример: замена подстроки в строке
---------------------------------
Он заменит как отдельные символы, так и целые подстроки. Вызов функции в конце примера изменит строку 'Дивный новый мир' на строку 'Дивный новый веб'.

      // Заменяет oldS на newS в строке fullS
      function replaceString(oldS, newS, fullS) {
        for (var i = 0; i < fullS.length; ++i) {
          if (fullS.substring(i, i + oldS.length) == oldS) {
            fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
          }
        }
        return fullS;
      }

      replaceString('мир', 'веб', 'Дивный новый мир');
функция может скатиться в бексонечный цикл, если строка oldS сама является подстрокой для newS — например, если вы попытаетесь заменить слово «мир» на слово «другоймир». Лучше использоваться следующий метод для замены строк:

      function replaceString(oldS, newS, fullS) {
        return fullS.split(oldS).join(newS);
      }

str.trim()
----------
Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).

Метод trim() возвращает строку с вырезанными пробельными символами с её концов. Метод trim() не изменяет значение самой строки.


Следующий пример покажет строку 'foo':
--------------------------------------
      var orig = '   foo  ';
      console.log(orig.trim()); // 'foo'

      // Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

      var orig = 'foo    ';
      console.log(orig.trim()); // 'foo'



Парсинг json-данных $.parseJSON()
==================================
Конвертирует строку с json-данными в javascript-объект.

    $.parseJSON(json)
    json — строка с json-данными.

Функция $.parseJSON() очень требовательна к формату задания json-данных. Отклонения от этого формата могут привести к возникновению js-исключений, например:

    {test: 1} // test не заключен в двойные кавычки.
    {'test': 1} // test должен быть заключен именно в двойные кавычки.

Если строка с json-данными содержит пустую строку, undefined или null, то результатом выполнения функции будет значение null. Если браузер обладает собственной функцией JSON.parse для обработки json-данных, то jQuery воспользуется ей при выполнении $.parseJSON(). 

Пример

    var obj = jQuery.parseJSON('{"name":"John"}');
    alert(obj.name); // будет выведено "John"

script.js
---------
    var jsonData = [];

        $.ajax({
              url: '/json',
              async: false,
              method: 'GET',
              dataType: 'json',
              success: function (data) {
                jsonData = data;
              }
            });

        var data = jQuery.parseJSON(jsonData);
        console.log(data[0].name,data[0].id);

app.js
------
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


index.js
---------
      router.get('/admin', function(req, res, next) {
         res.render('admin', { title: 'Admin Shopping Express' });
      });


layout.jade
-----------
         #header
            ul
              li
                a(href='') Home
              li
                a(href='') BRANDS
              li
                a(href='') DESIGNERS
              li
                a#login(href='#') SingIn/SignUp
              li
                a(href='/admin') Admin

adm.jade
--------
      doctype html
      html
        head
          title= title
          script(src='/javascripts/modernizr.js' type='text/javascript')
          link(rel='stylesheet prefetch' href='/stylesheets/reset.css')
          link(href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css')
          link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css")
          link(rel='stylesheet prefetch' href='/stylesheets/jquery-ui.css')
          link(rel='stylesheet', href='/stylesheets/style.css')
          link(rel='stylesheet' href='/stylesheets/admin.css')

          
          script(src='/javascripts/prefixfree.min.js')
          script(src='/javascripts/jquery.min.js')
          script(src='/javascripts/jquery-ui.min.js')
          script(src='/javascripts/admin.js')
          script(type="text/template" id='productListTemplate').
              <li id="productHolder" class='productHolder'>  
                <div class="product-date-holder">
                  <span id="dateNumber">23</span>
                  <input type="hidden" id="idItem" value="">
                  <span id="dateDay">Jan</span>
                </div>
                <div class="product-details-holder">
                  <h1></h1>
                  <span id="productPrice"></span>
                  <span id="productQuantity"></span>
                    <ul id="editTools" class='editTools'>
                       <li><i class="fa fa-pencil-square-o editproduct"></i></li>
                       <li><i class="fa fa-bars"></i></li>
                       <li><i class="fa fa-times removeproduct"></i></li>
                    </ul>
                </div>
              </li>
         
        body
          block content


admin.jade
----------

      extends adm

      block content
        h1= title
        div.container
          div#newproductHolder
            span 
              i(class="fa fa-plus") Add New product
        
        
          div#newProductForm
            label(for="product-date") Date:
            input(type="text" id="productDate")
            label( for="product-title") Product Title
            input(type="text" name="product-title" id="productTitleInput" maxlength="80")
            label(for="product-category") Product Category
            input(type="text" name="product-category" id="productCategoryInput" maxlength="80")
            label(for="product-price") Product Price
            input(type="number" name="product-price" id="productPriceInput" value=0)
            label(for="product-discont") Product Discont
            input(type="number" name="product-discont" id="productDiscontInput" value=0)
            label(for="product-quantity") Product Quantity
            input(type="number" name="product-quantity" id="productQuantityInput" value=0)
            label(for="product-description") Description
            textarea(name="product-descripton" id="productDescriptionInput") Product Description
            button(name="add-product" id="addproduct") Add New product
            button(name="edit-product" id="editproduct") Save product
            button(name="save-product" id="saveproduct") Save All Chages
            button(name="cancel-add-product" id="cancelAddproduct") Cancel
        
        
          ul(id="upcomingproducts")

       

admin.js
--------

      $(document).ready(function () {
          
          var $shop = $('#grid');
          var url = "/json";
          var jsonData = [];

          $.ajax({
                url: '/json',
                async: false,
                method: 'GET',
                dataType: 'json',
                success: function (data) {

                  jsonData = data;
                }
              });

          var data = jQuery.parseJSON(jsonData);


          $('#saveproduct').click(function(){
              $.ajax({
                url: url,
                method: 'POST',

                contentType: 'application/json',
                data: JSON.stringify(data),

                dataType: 'json',
                success: function (data) {
                  console.log('test success');
                }
              })
          })

      var newproductHolder = document.getElementById('newproductHolder');
      var productForm = document.getElementById('newProductForm');
      var productDate = document.getElementById('productDate');
      var addproduct = document.getElementById('addproduct');
      var cancel = document.getElementById('cancelAddproduct');
      var upcomingproducts = document.getElementById('upcomingproducts');
      var productHolder = document.getElementById('productHolder');

        $(newproductHolder).click(function () {
          $('#editproduct').css('visibility','hidden');
          $('#addproduct').css('visibility','visible');  
          $(productForm).slideDown(400);
          });
        
        $(productDate).datepicker();

        $(cancel).click(function () {
              $(productForm).slideUp(400);
          });
        
        

        var $list = $('#upcomingproducts');

            function init(data) {  
                $.each( data, function( i, item ) {
                  var  itemName = item['name'],
                     itemSku = item['sku'],
                     itemDescription = item['snippet'], 
                     itemPrice = item['price'], 
                     itemQuantity = item['quantity'], 
                     itemDiscontPrice = item['discont'], 
                     itemImg = item['impriceUrl'], 
                     itemDate = item['date'], 
                     itemId = item['id'];
                              
                              $template = $($('#productListTemplate').html());
                              $template.find('input#idItem').val(itemId);
                              $template.find('h1').text(itemName.substring(0,20));
        
                              $template.find('#dateNumber').text(itemDate.slice(0,2));
                              $template.find('#dateDay').text(itemDate.slice(3,5));
                              $template.find('#productPrice').text(itemPrice);
                              $template.find('#productQuantity').text(itemQuantity);

                              $list.append($template);
                        
             });
             
         }
         init(data);

         $('#upcomingproducts .productHolder').each(function (i, el) {
            $(el).find('li i.removeproduct').on('click', function(event) {
            event.preventDefault();
            $(this).parent().parent().fadeOut(300, function () {
            $(this).parent().parent().remove();
            // changed();
             });
            
            })
          });

         $('#upcomingproducts .productHolder').each(function (i, el) {
            $(el).find('li i.editproduct').on('click', function(event) {
            event.preventDefault();
            var index = $(this).parent().parent().parent().parent().find('input').val();

            console.log($(this).parent().parent().parent().parent().find('input').val());

          
          
          $('#productDate').val(data[index]['date']);
          $('#productCategoryInput').val(data[index]['category']);;
          $('#productDiscontInput').val(data[index]['discont']); 
          $('#productPriceInput').val(data[index]['price']);
          $('#productQuantityInput').val(data[index]['quantity']);
          
          $('#productTitleInput').val(data[index]['name']);
          $('#productDescriptionInput').val(data[index]['snippet']);
          $('#editproduct').css('visibility','visible');  
          $('#addproduct').css('visibility','hidden');  

            $(productForm).slideDown(400);
            
            })
          });



        $("#addproduct").click(function(){
          $template = $($('#productListTemplate').html());
          $template.find('h1').text($('#productTitleInput').val().substring(0,20));
        
          $template.find('#dateNumber').text($('#productDate').val().slice(0,2));
          $template.find('#dateDay').text($('#productDate').val().slice(3,5));
          $template.find('#productPrice').text($('#productPriceInput').val());
          $template.find('#productQuantity').text($('#productQuantityInput').val());

          $list.append($template);

          var index = data.length;
          
          var item = {};

          item['id'] = index;
          item['sku'] = 'SCU00'+index;
          item['date'] = $('#productDate').val();
          item['category'] = $('#productCategoryInput').val();
          item['discont'] = $('#productDiscontInput').val(); 
          item['price'] = $('#productPriceInput').val();
          item['quantity'] = $('#productQuantityInput').val();
          item['impriceUrl'] = ["/images/1.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"];
          item['name'] = $('#productTitleInput').val();
          item['snippet'] = $('#productDescriptionInput').val();
             
          data.push(item);
         
          console.log(data.length);
          console.log(data[20].name);
          $(productForm).slideUp(400);
        })

      });

