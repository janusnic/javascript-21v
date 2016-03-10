# javascript-21v

prev
====

Получает набор элементов, содержащий уникальные предыдущие родственные элементы для всех элементов существующего набора. Также можно использовать выражение для дополнительной фильтрации.
Возвращается только непосредственно предыдущий родственный элемент, а не все родственные элементы.
 
Аргументы:
```
выражение (необязательно)   Строка  
```
Выражение для дополнительной фильтрации элементов.

Поиск ближайшего предыдущего родственного элемента для каждого элемента div.
----------------------------------------------------------------------------
```
    var $curr = $("#start");
    $curr.css("background", "#f99");
    $("button").click(function () {
      $curr = $curr.prev();
      $("div").css("background", "");
      $curr.css("background", "#f99");
    });
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    var $curr = $("#start");
    $curr.css("background", "#f99");
    $("button").click(function () {
      $curr = $curr.prev();
      $("div").css("background", "");
      $curr.css("background", "#f99");
    });

  });
  </script>

  <style>
  div { width:40px; height:40px; margin:10px;
        float:left; border:2px blue solid;
        padding:2px; }
  span { font-size:14px; }
  p { clear:left; margin:10px; }
  </style>
</head>
<body>
  <div></div>
  <div></div>

  <div><span>has child</span></div>
  <div></div>
  <div></div>
  <div></div>

  <div id="start"></div>
  <div></div>
  <p><button>Go to Prev</button></p>
</body>

</html>
```

Поиск ближайшего предыдущего родственного элемента каждого параграфа (предыдущий элемент перед параграфом), который имеет класс “selected”.
```
$("p").prev(".selected").css("background", "yellow");
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){
    $("p").prev(".selected").css("background", "yellow");
  });
  </script>

</head>
<body>

  <div><span>Hello</span></div>
  <p class="selected">Hello Again</p>
  <p>And Again</p>

</body>
</html>
```

catalog.js
----------

```
function previous(){
    
    new_page = parseInt($('#current_page').val()) - 1;
    //if there is an item before the current active link run the function
    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }
    
}

```
next
====

Получает набор элементов, содержащий уникальные родственные элементы, следующие непосредственно за указанным элементом.
next возвращает лишь ближайший родственный элемент для каждого элемента, не все элементы, а именно следующий непосредственно за нужным. Если нужны все элементы, то используйте nextAll.
Также можете указать выражение, с помощью которого можно отфильтровать возвращаемый набор элементов.

Аргументы:
```
выражение (необязательно)   Строка  
```
Выражение, с помощью которого можно отфильтровать возвращаемый набор элементов.

Примеры:
--------
Поиск ближайшего родственного элемента каждой неактивной кнопки (следующий элемент за кнопкой) и изменение его текста на «this button is disabled».
```
$("button[disabled]").next().text("this button is disabled");
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){
    $("button[disabled]").next().text("this button is disabled");
  });
  </script>
  <style>

  span { color:blue; font-weight:bold; }
  button { width:100px; }
  </style>
</head>
<body>
  <div><button disabled="disabled">First</button> - <span></span></div>

  <div><button>Second</button> - <span></span></div>
  <div><button disabled="disabled">Third</button> - <span></span></div>

</body>
</html>
```

Поиск ближайшего родственного элемента каждого параграфа (следующий элемент за параграфом), который имеет класс «selected».
```
$("p").next(".selected").css("background", "yellow");
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){
    $("p").next(".selected").css("background", "yellow");
  });
  </script>

</head>
<body>
  <p>Hello</p>

  <p class="selected">Hello Again</p>
  <div><span>And Again</span></div>
</body>
</html>
```

catalog.js
----------
```
function next(){
    new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }
    
}
```
slice
======
```
slice( начало, [конец] )
```
Выделяет подмножество из набора совпавших элементов.
Ведет себя точно также как и встроенный метод разделения массивов. (допускаются отрицательные значения)

Аргументы:
начало  Integer 
---------------
Указание начала подмножества. Отсчет с нуля. Значение может быть отрицательным, это позволит начать с конца выборки.
конец (необязательно)   Integer 
-------------------------------
Указание конца подмножества (не включая самого элемента). Если не указано, то концом подмножества является конец самой выборки. 
 
Случайным образом закрашивает элементы div.
--------------------------------------------
```
    function colorEm() {
      var $div = $("div");
      var start = Math.floor(Math.random() *
                             $div.length);
      var end = Math.floor(Math.random() *
                           ($div.length - start)) +
                           start + 1;
      if (end == $div.length) end = undefined;
      $div.css("background", "");
      if (end)
        $div.slice(start, end).css("background", "yellow");
       else
        $div.slice(start).css("background", "yellow");

      $("span").text('$("div").slice(' + start +
                     (end ? ', ' + end : '') +
                     ').css("background", "yellow");');
    }

    $("button").click(colorEm);
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    function colorEm() {
      var $div = $("div");
      var start = Math.floor(Math.random() *
                             $div.length);
      var end = Math.floor(Math.random() *
                           ($div.length - start)) +
                           start + 1;
      if (end == $div.length) end = undefined;
      $div.css("background", "");
      if (end)
        $div.slice(start, end).css("background", "yellow");
       else
        $div.slice(start).css("background", "yellow");

      $("span").text('$("div").slice(' + start +
                     (end ? ', ' + end : '') +
                     ').css("background", "yellow");');
    }

    $("button").click(colorEm);

  });
  </script>

  <style>
  div { width:40px; height:40px; margin:10px; float:left;
        border:2px solid blue; }
  span { color:red; font-weight:bold; }
  button { margin:5px; }
  </style>
</head>
<body>
  <button>Turn slice yellow</button>
  <span>Click the button!</span>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
</body>

</html>
```

Выделяет все параграфы на странице,затем разделяет выборку таким образом, чтобы захватить только первый элемент.
```
$("p").slice(0, 1).wrapInner("<b></b>");
```

Выделяет все параграфы на странице,затем разделяет выборку таким образом, чтобы захватить только первый и второй элементы.
```
$("p").slice(0, 2).wrapInner("<b></b>");
```

Выделяет все параграфы на странице,затем разделяет выборку таким образом, чтобы захватить только второй элемент.
```
$("p").slice(1, 2).wrapInner("<b></b>");
```
Выделяет все параграфы на странице,затем разделяет выборку таким образом, чтобы захватить только второй и третий элементы.
```
$("p").slice(1).wrapInner("<b></b>");
```
Выделяет все параграфы на странице,затем разделяет выборку таким образом, чтобы захватить только третий элемент.
```
$("p").slice(-1).wrapInner("<b></b>");
```
siblings
========
```
siblings( [выражение] )
```
Получает набор элементов, содержащий все уникальные родственные элементы для набора совпавших элементов.
Также можно использовать выражение, чтобы дополнительно отфильтровать набор элементов.

выражение (необязательно)   Строка  
----------------------------------
Выражение для дополнительной фильтрации элементов.

Примеры:
--------
Поиск уникальных родственных элементов для всех элементов li желтого цвета в трех списках ( включая другие элементы li, если они подходят).
```
    var len = $(".hilite").siblings()
                          .css("color", "red")
                          .length;
    $("b").text(len);
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    var len = $(".hilite").siblings()
                          .css("color", "red")
                          .length;
    $("b").text(len);

  });
  </script>

  <style>
  ul { float:left; margin:5px; font-size:16px; font-weight:bold; }
  p { color:blue; margin:10px 20px; font-size:16px; padding:5px;
      font-weight:bolder; }
  .hilite { background:yellow; }
</style>
</head>
<body>
  <ul>
    <li>One</li>

    <li>Two</li>
    <li class="hilite">Three</li>
    <li>Four</li>
  </ul>

  <ul>
    <li>Five</li>
    <li>Six</li>
    <li>Seven</li>

  </ul>
  <ul>
    <li>Eight</li>
    <li class="hilite">Nine</li>

    <li>Ten</li>
    <li class="hilite">Eleven</li>
  </ul>
  <p>Unique siblings: <b></b></p>

</body>
</html>
```

Поиск всех родственных элементов для каждого элемента div, обладающих классом «selected».
```
$("p").siblings(".selected").css("background", "yellow");
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){
    $("p").siblings(".selected").css("background", "yellow");
  });
  </script>

</head>
<body>

  <div><span>Hello</span></div>
  <p class="selected">Hello Again</p>
  <p>And Again</p>

</body>
</html>
```

val
====
Получает содержимое атрибута value для первого элемента ввода в наборе.
Содержимое атрибута value может возвращаться для всех элементов ввода включая элементы выбора и текстовые области. В случае применения к элементам с возможностью выбора нескольких значений возвращается массив значений.

Получает одно значение из выпадающего списка и массив значений из второго списка с возможностью выбора нескольких вариантов, а затем отображает их.
```
    function displayVals() {
      var singleValues = $("#single").val();
      var multipleValues = $("#multiple").val() || [];
      $("p").html("<b>Single:</b> " +
                  singleValues +
                  " <b>Multiple:</b> " +
                  multipleValues.join(", "));
    }

    $("select").change(displayVals);
    displayVals();
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    function displayVals() {
      var singleValues = $("#single").val();
      var multipleValues = $("#multiple").val() || [];
      $("p").html("<b>Single:</b> " +
                  singleValues +
                  " <b>Multiple:</b> " +
                  multipleValues.join(", "));
    }

    $("select").change(displayVals);
    displayVals();

  });
  </script>

  <style>
  p { color:red; margin:4px; }
  b { color:blue; }
  </style>
</head>
<body>
  <p></p>
  <select id="single">

    <option>Single</option>
    <option>Single2</option>
  </select>
  <select id="multiple" multiple="multiple">

    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>

  </select>
</body>
</html>
```

Поиск значения поля ввода текста.
```
    $("input").keyup(function () {
      var value = $(this).val();
      $("p").text(value);
    }).keyup();
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>

  $(document).ready(function(){

    $("input").keyup(function () {
      var value = $(this).val();
      $("p").text(value);
    }).keyup();

  });
  </script>
  <style>

  p { color:blue; margin:8px; }
  </style>
</head>
<body>
  <input type="text" value="some text"/>
  <p></p>

</body>
</html>
```

val( значение )
---------------
Примеры
-------
Устанавливает значение атрибута value для каждого совпавшего элемента в наборе.

Аргументы:
----------
значение    Строка  
Значение, которое необходимо установить.
Примеры:
--------
Установка значения поля ввода текста.
```

    $("button").click(function () {
      var text = $(this).text();
      $("input").val(text);
    });
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("button").click(function () {
      var text = $(this).text();
      $("input").val(text);
    });

  });
  </script>

  <style>
  button { margin:4px; cursor:pointer; }
  input { margin:4px; color:blue; }
  </style>
</head>
<body>
  <div>
    <button>Feed</button>

    <button>the</button>
    <button>Input</button>
  </div>
  <input type="text" value="click a button" />

</body>
</html>
```

Установка значений элементов select.
```
    $("#single").val("Single2");
    $("#multiple").val(["Multiple2", "Multiple3"]);
    $("input").val(["check1","check2", "radio1" ]);
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("#single").val("Single2");
    $("#multiple").val(["Multiple2", "Multiple3"]);
    $("input").val(["check1","check2", "radio1" ]);

  });
  </script>

  <style>
  body { color:blue; }
  </style>
</head>
<body>
  <select id="single">
    <option>Single</option>

    <option>Single2</option>
  </select>
  <select id="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>

    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select><br/>
  <input type="checkbox" name="checkboxname" value="check1"/> check1
  <input type="checkbox" name="checkboxname" value="check2"/> check2
  <input type="radio"  name="r" value="radio1"/> radio1
  <input type="radio"  name="r" value="radio2"/> radio2

</body>
</html>
```
catalog.js
-----------
```
function go_to_page(page_num){
    //get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val());
    
    //get the element number where to start the slice from
    start_from = page_num * show_per_page;
    
    //get the element number where to end the slice
    end_on = start_from + show_per_page;
    
    //hide all children elements of grid div, get specific items and show them
    $('#grid').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
    
    /*get the page link that has longdesc attribute of the current page and add active_page class to it
    and remove that class from previously active page link*/
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
    
    //update the current page input field
    $('#current_page').val(page_num);
}

```
catalog.js
----------

```
$(document).ready(function () {
    
    var $shop = $('#grid');
    var url = "/shopdata";
 
    //how much items per page to show
    var show_per_page = 8; 
    var number_of_items;

        $.ajax({
          url: url,
          async: false,
          dataType: 'json',
          success: function (data) {
            //getting the amount of elements inside grid div
            number_of_items = data.length;
          }
        })
          .done(function( data ) {  
          $.each( data, function( i, item ) {
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
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }
                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner').addClass('banner sale').text('Sale');
                        }
                        $shop.append($template);
       })
       
   });
    
    //calculate the number of pages we are going to have
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
    
    //set the value of our hidden input fields
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
    
    //now when we got all we need for the navigation let's make it '
    
    /* 
    what are we going to have in the navigation?
        - link to previous page
        - links to specific pages
        - link to next page
    */
    var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
        current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';
    
    $('#page_navigation').html(navigation_html);
    
    //add active_page class to the first page link
    $('#page_navigation .page_link:first').addClass('active_page');
    
    //hide all the elements inside grid div
    $('#grid').children().css('display', 'none');
    
    //and show the first n (show_per_page) elements
    $('#grid').children().slice(0, show_per_page).css('display', 'block');
    
});
```
css
----

```

#page_navigation a{
    padding:3px;
    border:1px solid gray;
    margin:2px;
    color:black;
    text-decoration:none
}
.active_page{
    background:darkblue;
    color:white !important;
}
```
catalog.js
----------

```
$('.largeGrid').click(function () {
        $(this).find('a').addClass('active');
        $('.smallGrid a').removeClass('active');
        $('.product').addClass('large').each(function () {
        });
        setTimeout(function () {
            $('.info-large').show();
        }, 200);
       /* setTimeout(function () {
            $('.view_gallery').trigger('click');
        }, 400);*/
        return false;
    });
    $('.smallGrid').click(function () {
        $(this).find('a').addClass('active');
        $('.largeGrid a').removeClass('active');
        $('div.product').removeClass('large');
        $('.make3D').removeClass('animate');
        $('.info-large').fadeOut('fast');
        setTimeout(function () {
            $('div.flip-back').trigger('click');
        }, 400);
        return false;
    });
    $('.smallGrid').click(function () {
        $('.product').removeClass('large');
        return false;
    });
    $('.colors-large a').click(function () {
        return false;
    });
```