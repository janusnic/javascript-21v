# javascript-21v

script type = “text/template”
=============================
```
    
    <script type = "text/template">

    </script>
```
В отличие от блока, содержащего javascript (type = «text/javascript»), блок script type = «text/template» не будет обработан браузером. 

В этом блоке хранятся шаблоны, которые в дальнейшем используются библиотеками типа Mustache, Haml, Eco, underscore.js для генерации HTML кода на стороне клиента.

Смысл использования шаблонов в том, чтобы потом с ними могли работать не только Javascript программисты, но и просто верстальщики, которые не имеют представления о Javascript.

- создавать готовые секции html-кода
- спрятать их в 
```
<script type="text/template"></script>
```
- наполнить динамическим контентом и вставить в документ

index.jade
-----------
```
extends layout

block content
    script(src='/javascripts/catalog.js')
    script#productTemplate(type='text/template').

      <div class="product">

      <div class="info-large">
      <h4></h4>
      <div class="sku">PRODUCT SKU: <strong></strong></div>
      <div class="price-big"><span></span></div>
      <button class="add-cart-large">Add To Cart</button>
      </div>

      <div class="make3D">
      <div class="product-front">
      <div class="shadow"></div>
      <img alt="" />
      <div class="image_overlay"></div>
      <div class="add_to_cart">Add to cart</div>
      <div class="stats">
      <div class="stats-container">
      <span class="product_price"></span>
      <span class="product_name"></span>
      <p></p>
      <div class="product-options">
      </div>                                            
      </div>
      </div>
      </div>
      <div class="product-back">
      <div class="shadow"></div>
      </div>
      </div>
      </div>

    div#grid-selector
      div#grid-menu View:
        ul                
          li(class="largeGrid")
            a( href="")
          li(class="smallGrid")
            a( class="active" href="")

      div#page_navigation Showing 1–9 of 48 results
    div#grid

```
products.json
--------------
```
[
    {
        "id": 0,
        "sku": 100001,
        "discont": 30,
        "price": 1231,
        "impriceUrl": "/images/1.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },

```

Поиск элементов внутри выбранных .find()
========================================
Осуществляет поиск элементов внутри уже выбранных элементов. Метод имеет три вариант использования:

.find(selector)
---------------
Ищет элементы, соответствующие заданному селектору, внутри выбранных элементов.

.find(jQuery object)
--------------------
Осуществляет поиск элементов внутри выбранных элементов, оставляя те, которые содержатся в заданном объекте jQuery.

.find(element)
--------------
Осуществляет поиск элемента element внутри выбранных элементов. Параметр element задается в виде DOM-элемента.

Примеры использования:
----------------------
```
$("div").find("span")   вернет все элементы span, находящиеся внутри div-элементов.
$("div").find(".bigBlock")  вернет все элементы с классом bigBlock, находящиеся внутри div-элементов.
$("div").find( $(".bigBlock") ) вернет все элементы с классом bigBlock, находящиеся внутри div-элементов.
```
.find() удобно использовать, когда некоторые элементы уже найдены, и вам необходимо осуществить поиск элементов внутри них:
```

// найдем все ul-элементы на странице
var $ulElements = $('ul');
 
// ----- какой то код ... -----
 
// найдем li-элементы с классом userBox, внутри $ulElements
$ulElements.find('li.userBox');
```
.find() удобен для использования в цепочках методов:
----------------------------------------------------
```
$('ul') // найдем все ul-элементы на странице
  .addClass('listElements') // добавим ul'ам класс listElements
.find('li.userBox') // найдем li-элементы с классом userBox, внутри ul'ов
  .remove(); // и удалим их
```
Работа метода .find() схожа с .children(), который осуществляет поиск подходящих дочерних элементов. Отличие заключается в том, что .find() проводит поиск не только среди дочерних элементов, но и внутри них тоже (т.е. поиск проходит на всех вложенных уровнях иерархии DOM, в то время как .children() ищет только на одном уровне).

Внутри каждого ul-элемента, найдем первый li-элемент и последний p-элемент:
```
// найдем и сохраним все ul-элементы
var $matched = $('ul');
 
// выделим их
$matched
  .addClass('matched');
 
// найдем внутри уже выбранных элементов все требуемые
// и выделим их добавив класс result
$matched.find("li:first, p:last")
  .addClass("result");
```

javascripts/catalog.js
-----------------------
```
$(document).ready(function () {
    var $shop = $('#grid');
    var xmlhttp = new XMLHttpRequest();
    var url = "/shopdata";

    getDate(url);
  
  function getDate(url){
    $shop.empty();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var product = xmlhttp.responseText;

            init(JSON.parse(product));  
          }
      };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
    function init(jsonObject){
    
       for(var i=0; i<jsonObject.length;i++){
                   var item = jsonObject[i];
                       var  itemName = item['name'],
                            itemSku = item['scu'],
                            itemDescription = item['snippet'], 
                            itemPrice = item['price'], 
                            itemDiscontPrice = item['discont'], 
                            itemImg = item['impriceUrl'], 
                            itemId = item['id'];
                        
                        $template = $($('#productTemplate').html());

                        $template.find('h4').text(itemName);
                        $template.find('.sku strong').text(itemSku);
                        $template.find('p').text(itemDescription);
                        $template.find('.price-big').text('$' + itemPrice);
                        $template.find('.product_price').text('$' + itemPrice*(100-itemDiscontPrice)/100);
                        $template.find('.product_name').text(itemName);
                        $template.find('img').attr('src',itemImg);

                        $shop.append($template);
       }
    }
});

```

Работа с атрибутами .attr()
===========================
Возвращает или изменяет значение атрибутов у выбранных элементов страницы. Функция имеет четыре варианта использования:

.attr(attrName)
----------------
возвращает значение атрибута attrName у выбранного элемента. Если выбрано несколько элементов, то значение будет взято у первого.
.attr(attrName, value)
----------------------
атрибуту attrName будет присвоено значение value, у всех выбранных элементов.
.attr({attrName1:value1, attrName2:value2, ...})
------------------------------------------------
группе аттрибутов attrName1, attrName2, ... будут присвоены значения value1, value2, ..., у всех выбранных элементов.
.attr(attrName, function(index, value))
----------------------------------------
атрибуту attrName будет присвоено значение, возвращенное пользовательской функцией (если она ничего не вернет, то атрибут просто останется каким был до этого). Функция вызывается отдельно, для каждого из выбранных элементов. При вызове ей передаются следующие параметры: index — позиция элемента в наборе, value — текущее значение атрибута attrName у элемента.
Примеры использования:
```
$("div").attr("class")  вернет имя класса у первого div-элемента на странице
$("div").attr("class", "divEl") класс всех div-элементов на странице станет равным divEl
$("div").attr({"class":"divEl", "title":"Див"}) класс div-элементов станет равен divEl, а title — "Див"
$(".rool").attr("title")    вернет подсказку элемента с классом rool. Если таких элементов на странице несколько — вернет первого из них.
```
- используя метод .attr(name), вы получите значения атрибута только первого элемента из всех выбранных. Если вам нужны значения всех элементов, то следует использовать конструкции типа .map() или .each().
- IE не позволяет менять атрибут type у элементов input и button.

Начиная с версии jQuery-1.6, при попытке получить значение атрибута, которым элемент не обладает, метод attr(attrName) вернет undefined. Кроме того, начиная с версии jQuery-1.6 в jQuery разделены способы работы с атрибутами и свойствами DOM-объектов и для последних стоит использовать prop(propName). В частности, разница при работе с атрибутами и свойствами существенна, когда идет речь об атрибутах не требующих указания значений (checked и disabled в input-элементах): допустим у нас есть элемент input type="checkbox" checked , а в переменной elem хранится его DOM-объект. В этом случае, работа со значением checked будет иметь следующие результаты:

```
elem.checked    true
$(elem).prop("checked") true
elem.getAttribute("checked")    пустая строка.
$(elem).attr("checked") пустая строка для jQuery-1.6+ и true для более ранних версий.
```
найдем элемент с идентификатором newsBlock и поместим в него, значение его же класса:
```

<!DOCTYPE html>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <style>
    div, span {
      display: block;
      width: 50px;
      height: 50px;
      float: left;
      padding: 15px;
      margin: 5px;
      background-color: #EEEEEE;
      font-size: 12pt;
    }
  </style>
</head>
<body>
  <div id="titleBlock"> 1 </div>
  <div id="contentBlock"> 2 </div>
  <div id="newsBlock" class="news"> 3 </div>
<script>
    var className = $("#newsBlock").attr("class");
    $("#newsBlock").text(className);
</script>
</body>
</html>
```

Добавление класса .addClass()
=============================
Добавляет класс(ы) выбранным элементам страницы. Если из этих элементов некоторые уже принадлежат каким-то классам, то новый (новые) класс добавится к существующим, а не заменит их. Функция имеет два варианта использования:

.addClass("clName1 clName2 ...")
---------------------------------
добавляет классы clName1, clName2, ... всем выбранным элементам.
.addClass(function(index, class))
---------------------------------
добавляет классы, список которых возвращает заданная пользователем функция. Возвращаемое ей значение должно представлять из себя строку, с перечислением добавляемых классов через пробел. Функция вызывается отдельно для каждого из выбранных элементов. При вызове ей передаются следующие параметры: index — позиция элемента в наборе, class — текущий класс(ы) элемента.
Примеры использования:
```
$("#content").addClass("blackZone") добавит класс blackZone элементу с идентификатором content
$(".content").addClass("blackZone") добавит класс blackZone всем элементам с классом content (то есть, у этих элементов станет по меньшей мере два класса: class="content blackZone".
```
Добавим всем div-элементам на странице класс dotted, для добавления точечной красной рамки:
```

<!DOCTYPE html>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <style>
    div{
      display: block;
      width: 50px;
      height: 50px;
      float: left;
      padding: 15px;
      margin: 5px;
      font-size: 20pt;
    }
    .green{background-color: #66ff66;}
    .gray{background-color: #aaa;}
    .dotted{border:2px dotted red}
  </style>
</head>
<body>
  <div> 1 </div>
  <div class="gray"> 2 </div>
  <div class="green"> 3 </div>
<script>
    $("div").addClass("dotted");
</script>
</body>
</html>
```
index.jade addClass('banner')
-----------------------------
```
extends layout

block content
    script(src='/javascripts/catalog.js')
    script#productTemplate(type='text/template').
      <div class="product">
      <div id="banner"></div>
      <div class="info-large">
      <h4></h4>
      <div class="sku">PRODUCT SKU: <strong></strong></div>
      <div class="price-big"><span></span></div>
      <button class="add-cart-large">Add To Cart</button>
      </div>
      <div class="make3D">
      <div class="product-front">
      <div class="shadow"></div>
      <img alt="" />
      <div class="image_overlay"></div>
      <div class="add_to_cart">Add to cart</div>
      <div class="stats">
      <div class="stats-container">
      <span class="product_price"></span>
      <span class="product_name"></span>
      <p></p>
      <div class="product-options">
      </div>                                            
      </div>
      </div>
      </div>
      <div class="product-back">
      <div class="shadow"></div>
      </div>
      </div>
      </div>

    div#grid-selector
      div#grid-menu View:
        ul                
          li(class="largeGrid")
            a( href="")
          li(class="smallGrid")
            a( class="active" href="")

      div#page_navigation Showing 1–9 of 48 results
    div#grid

```
catalog.js
-----------
```
$(document).ready(function () {
    var $shop = $('#grid');

    var xmlhttp = new XMLHttpRequest();

    var url = "/shopdata";

    getDate(url);
  
  function getDate(url){
    $shop.empty();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var product = xmlhttp.responseText;
 
            init(JSON.parse(product));  
          }
      };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
    function init(jsonObject){
    
       for(var i=0; i<jsonObject.length;i++){
                   var item = jsonObject[i];
                       var  itemName = item['name'],
                            itemSku = item['scu'],
                            itemDescription = item['snippet'], 
                            itemPrice = item['price'], 
                            itemDiscontPrice = item['discont'], 
                            itemImg = item['impriceUrl'], 
                            itemId = item['id'];
                        
                        $template = $($('#productTemplate').html());
                        $template.find('h4').text(itemName);
                        $template.find('.sku strong').text(itemSku);
                        $template.find('p').text(itemDescription);
                        $template.find('.price-big').text('$' + itemPrice);
                        $template.find('.product_price').text('$' + itemPrice*(100-itemDiscontPrice)/100);
                        $template.find('.product_name').text(itemName);
                       
                        $template.find('img').attr('src',itemImg);

                        //Best price bestprice
                        if (itemDiscontPrice > 0) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }


                        $shop.append($template);
       }
    }
});

```
addClass('banner sale').text('Sale')
-------------------------------------
```
$(document).ready(function () {
    var $shop = $('#grid');

    var xmlhttp = new XMLHttpRequest();

    var url = "/shopdata";

    getDate(url);
  
  function getDate(url){
    $shop.empty();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var product = xmlhttp.responseText;
 
            init(JSON.parse(product));  
          }
      };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
    function init(jsonObject){
    
       for(var i=0; i<jsonObject.length;i++){
                   var item = jsonObject[i];
                       var  itemName = item['name'],
                            itemSku = item['scu'],
                            itemDescription = item['snippet'], 
                            itemPrice = item['price'], 
                            itemDiscontPrice = item['discont'], 
                            itemImg = item['impriceUrl'], 
                            itemId = item['id'];
                        
                        $template = $($('#productTemplate').html());
                        $template.find('h4').text(itemName);
                        $template.find('.sku strong').text(itemSku);
                        $template.find('p').text(itemDescription);
                        $template.find('.price-big').text('$' + itemPrice);
                        $template.find('.product_price').text('$' + itemPrice*(100-itemDiscontPrice)/100);
                        $template.find('.product_name').text(itemName);
                       
                        $template.find('img').attr('src',itemImg);

                        //Best price bestprice
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }

                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner').addClass('banner sale').text('Sale');
                        }

                        $shop.append($template);
       }
    }
});

```
jQuery Ajax
============
В jQuery существует официальное деление всех ajax методов на две группы:
- низкоуровневый ajax интерфейс
- высокоуровневый ajax интерфейс (упрощенные ajax методы)

К первой группе относятся два jQuery ajax метода:
- jQuery.ajax(options)
- jQuery.ajaxSetup(options)

Ко второй группе относятся остальные jQuery методы:
- load(url, data, callback)
- jQuery.get(url, data, callback, type)
- jQuery.getJSON(url, data, callback)
- jQuery.getScript(url, callback)
- jQuery.post(url, data, callback, type)

Низкоуровневый ajax интерфейс предоставляет больше возможностей для работы с объектом XMLHttpRequest(в IE ActiveXObject), например в методе jQuery.ajax(options) вы можете установить обработку глобальных jQuery ajax событий (ajaxStart,ajaxStop,ajaxSucess,ajaxComplate,ajaxError), например, если Вам необходимо перед отправкой данных на сервер отобразить прогрессбар, а после того как данные успешно будут возвращены его скрыть, то метод jQuery.ajax(options) как раз то, что нужно. Либо иногда возникает необходимость в том, чтобы отправить данные на сервер не как строку, а как необработанный объект, по умолчанию упрощенные методы трансформируют все данные отсылаемые на сервер в строковой тип, чтобы исправить это Вы должны применить метод jQuery.ajax(options), изменив опцию processData на false. 

1. Как отправить запрос на сервер и получить данные?

Если Вам необходим отрезок HTMl кода, который встраивается в структуру страницы, то подойдет метод $.load():
```
 $("#loadhtml").click(function(){
    $("#feeds").load("base.php", function(data){
        $(this).text(data);
    }).show("slow");
 });  

```
При условии, что код php будет следующим:
```
<?php
header('Content-Type: text/html; charset=UTF-8');
echo '<html>';
echo '<body>';
echo '<div><b>Привет я сервер!</b></div>';
echo '</body>';
echo '</html>';
?>
```

## Делаем запрос GET с помощью $.get()

Метод jQuery $.get() предоставляет легкий и удобный способ сделать простой запрос AJAX. Он выполняет запрос с помощью метода HTTP GET (используется для получения URL, например страниц и изображений), вместо метода POST (который традиционно используется для отправки данных формы).

В простейшей форме можно вызвать метод так:
```
$.get( url );
```
где url является адресом URL ресурса, от которого ожидается ответ. Обычно это скрипт на стороне сервера, который выполняет какие-нибудь действия и может возвращать некие данные:

```
$.get( "http://example.com/get.php" );
```
...хотя можно также запросить статический документ:

```
$.get( "http://example.com/mypage.html" );
```

При запросе URL, вы можете отправить данные с запросом. Вы можете передать данные в строке запроса, так же как и при обычном запросе GET:

```
$.get( "http://example.com/get.php?city=rome&date=20160318" );
```
Корректно будет сделать то же самое передав объект данных в качестве второго параметра методу $.get(). Объект данных должен содержать информацию в виде пар имя свойства/значение свойства. Например:

```
var data = { city: "rome", date: "20160318" };

$.get( "http://example.com/get.html", data );
```
В качестве альтернативы вы можете передать данные методу $.get() как строку:

```
var data = "city=rome&date=20120318";

$.get( "http://example.com/get.html", data );
 
```
### Получаем данные с сервера

AJAX запрос - асинхронный, что означет его выполнение в фоновом режиме, когда остальной код JavaScript продолжает действовать. 

Вам нужно написать возвратную функцию,  которая будет автоматически выполняться по завершению запроса AJAX и отправке ответа сервером. Как минимум, ваша функция должна принимать данные, возвращаемые сервером, как свой первый аргумент:

```
function myCallback( returnedData ) {

  // Делаем обработку данных returnedData

}
 
```
Как только возвратная функция создана, вы можете передать ее в качестве третьего аргумента в метод $.get():

```
var data = { city: "rome", date: "20160318" };

$.get( "http://example.com/get.html", data, myCallback );
``` 
### Определяем тип данных ответа

серверная сторона передает данные в одном из нескольких типовых форматов, включая XML, JSON, JavaScript, или HTML. По умолчанию jQuery пытается определить наиболее подходящий формат и разобрать данные соответствующим образом. Но лучше явно определить формат.

Для указания формата надо передать четвертый аргумент методу $.get(). Данный аргумент может быть строкой из следующего списка:
```
"xml"
"json"
"script"
"html"
```
Например, если вы знаете, что скрипт сервера возвращает данные в формате JSON, то вызываете метод $.get() следующим образом:

```
$.get( "http://example.com/get.html", data, myCallback, "json" );
 
```

## Пример использования метода $.get()
2 Прогноз погоды
----------------
Здесь приводится пример создания запроса AJAX с помощью метода $.get() и простая обработка ответа. Для работы примера нужно на сервере создать простой текстовый файл с именем  getForecast.txt, содержащий следующий текст:
```
{
  "city": "Васюки",
  "date": "18 марта 2016",
  "forecast": "Зубодробительный холод и слякоть",
  "maxTemp": 1
}
```
Данный файл будет имитировать ответ в формате JSON, который мог быть сформирован скриптом прогноза погоды на сервере.

Затем создаем страницу 2.html в той же папке что и getForecast.txt:

```
    $( function() {
 
    $('#getForecast').click( function() {
      var data; 
      $.get( "getForecast.txt", data, success, "json" );
    } );
 
    function success( forecastData ) {
      var forecast = forecastData.city + " прогноз на " + forecastData.date;
      forecast += ": " + forecastData.forecast + ". Максимальная температура: " + forecastData.maxTemp + "C";

      $("#feeds").html(forecast).show("slow");
      
    }
 
  } );

  <button id="getForecast">Получить прогноз погоды</button> 
        
  <div id="feeds" style="margin:20px;display:none;height:50px;"></div>

```
Вот как работает данный код:
- get.html содержит элемент button "Получить прогноз погоды" с ID getForecast.
- JavaScript вверху страницы выполняется как только страница будет загружена и DOM окажется в состоянии готовности.
- Код JavaScript сначала привязывает обработчик события click к кнопке #getForecast. Данный обработчик выполняет AJAX запрос GET к getForecast.txt, передавая название города и дату для прогноза. 
- Также определяется возвратная функция success(), которая будет выполняться по завершению запроса. Формат возвращаемых сервером данных определяется как JSON.
- Файл getForecast.txt возвращает браузеру данные прогноза в формате JSON.
- Вызывается функция success(). jQuery разбирает данные JSON, полученные от getForecast.txt, конвертирует их в объект JavaScript, и передает их в функцию.
- Функция возвращает объект данных forecastData и выводит сообщение, которое содержит несколько свойств объекта, включая название города, прогноз и температуру.

## Ajax запрос JSON-данных

### 3 jQuery.getJSON()
Производит запрос json-данных у сервера, методом GET, без перезагрузки страницы. Функция имеет несколько необязательных параметров.
```
jQuery.getJSON(url,[data],[callback]):jqXHRv:1.0
```
- url — url-адрес, по которому будет отправлен запрос.
- data — данные, которые будут отправлены на сервер. Они должны быть представлены в объектом, в формате: {fName1:value1, fName2:value2, ...}.
- callback(data, textStatus, jqXHR) — пользовательская функция, которая будет вызвана после ответа сервера.
- data — данные, присланные с сервера.
- textStatus — статус того, как был выполнен запрос.
- jqXHR — объект jqXHR (в версиях до jquery-1.5, вместо него использовался XMLHttpRequest)
- $.getJSON() является сокращенным вариантом функции $.ajax(), вызванной со следующими параметрами:
```
$.ajax({
  url: url,
  dataType: 'json',
  data: data,
  success: callback
});
```
Полученные в результате запроса данные, можно получить в обработчике удачного выполнения запроса. Они будут предварительно преобразованы в javascript-объект или массив с помощью $.parseJSON(). 

запрошенный json-файл содержит данные в следующем формате:
```
 {
        "age": 0,
        "id": "motorola-xoom-with-wi-fi",
        "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "name": "Motorola XOOM\u2122 with Wi-Fi",
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    },

```
Сформируем из полученных данных html-список и вставим на страницу:
```
$(window).load(function(){

$.getJSON('phones.json', function(data){
 var items = [];
 console.log(data[0]['name']);
  $.each(data[0], function(key, val){
    items.push('<li id="' + key + '">' + val + '</li>');
  });
 
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('body');
});
});
```
Начиная с jQuery-1.5, метод $.getJSON() возвращает объект jqXHR, который помимо прочего реализует интерфейс deferred, что позволяет задавать дополнительные обработчики выполнения. Помимо стандартных для объекта deferred методов .done(), .fail() и .then(), с помощью которых можно устанавливать обработчики, в jqXHR реализованы их копии: .success(), .error() и .complete(). Это сделано для соответствия привычным названиям методов, с помощью которых устанавливаются обработчики выполнения ajax-запросов.
```
  // Запустим ajax-запрос, установим обработчики его выполнения и
  // сохраним объект jqxhr данного запроса для дальнейшего использования.
  var jqxhr = $.getJSON("phones.json")
  .success(function() { alert("Успешное выполнение"); })
  .error(function() { alert("Ошибка выполнения"); })
  .complete(function() { alert("Завершение выполнения"); });
 
  // какой-либо код...
 
  // установим еще один обработчик удачного выполнения запроса
  jqxhr.complete(function(){ alert("Успешное выполнения 2"); });

```
загрузить 4 последних изображений с помощью Flickr JSONP API
---------------------------------------------------------------
```
    <div id="images">
    </div>

(function() {
 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
 $.getJSON( flickerAPI, {
   tags: "mount rainier",
   tagmode: "any",
   format: "json"
 })
 .done(function( data ) {
   $.each( data.items, function( i, item ) {
     $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#images" );
     if ( i === 3 ) {
       return false;
     }
   });
 });
})();

```

CATALOG.JS
----------
```
$(document).ready(function () {
    var $shop = $('#grid');
    var url = "/shopdata";
   
    $.getJSON( url, {
               format: "json"
            }).done(function( data ) {
            
            $.each( data, function( i, item ) {
               var itemName = item['name'],
                   itemSku = item['scu'],
                   itemDescription = item['snippet'], 
                   itemPrice = item['price'], 
                   itemDiscontPrice = item['discont'], 
                   itemImg = item['impriceUrl'], 
                   itemId = item['id'];
                        
                        $template = $($('#productTemplate').html());
                        $template.find('h4').text(itemName);
                        $template.find('.sku strong').text(itemSku);
                        $template.find('p').text(itemDescription);
                        $template.find('.price-big').text('$' + itemPrice);
                        $template.find('.product_price').text('$' + itemPrice*(100-itemDiscontPrice)/100);
                        $template.find('.product_name').text(itemName);
                        $template.find('img').attr('src',itemImg);
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }
                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner').addClass('banner sale').text('Sale');
                        }
                        $shop.append($template);
                })
            });

 });

```