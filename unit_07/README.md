# javascript-21v

1 Log in Form
==============
1.html
-------
```
<!DOCTYPE html>
<html class=''>
<head>
<meta charset='UTF-8'>
<link href='css/style.css' rel='stylesheet' type='text/css'>
<style>
</style>
</head><body>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
<div id="wrapper">
<div class="cart-icon-top">
</div>
<div class="cart-icon-bottom">
</div>
<div id="checkout">
    CHECKOUT
</div>
<div id="header">   
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">BRANDS</a></li>
        <li><a href="">DESIGNERS</a></li>
        <li><a href="">SingIn/SignUp</a></li>                                              
        <li><a href="">CONTACT</a></li>                                              
    </ul>       
</div>

<div id="sidebar">
    <h3>CART</h3>
    <div id="cart">
        <span class="empty">No items in cart.</span>       
    </div>
    <h3>CATEGORIES</h3>
    <h3>COLORS</h3>
    <h3>SIZES</h3>
    <h3>PRICE RANGE</h3>
</div>

<div id="grid-selector">
       Showing 1–9 of 48 results 
</div>
    <div id="grid">
        <div class="product">
        </div>
        <div class="product">
        </div>
        <div class="product">
        </div>
        <div class="product">
        </div>
        <div class="product">
        </div>
        <div class="product">
        </div>
        <div class="product">
        </div>
        <div class="product">
        </div>    
    </div>
</div>
<footer id="info">
    <p class="i1">Add to cart interaction</p><p>Follow me on <a href="" style="color:#ea4c89" target="_blank">Dribbble</a> | <a style="color:#2aa9e0" href="" target="_blank">Twitter</a></p>
</footer>
<script src="js/jquery.min.js"></script>
<script>
</script>
</body></html>
```
Login/Register
--------------
```
      <div id='loginbox'>
        <div class="form">
        <div class="toggle"><i class="fa fa-times fa-pencil"></i>
          <div class="tooltip">Register</div>
        </div>
          <h2>Login to your account</h2>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button id='signin'>Login</button>
          </form>
        </div>
        <div class="form">
        <div class="toggle"><i class="fa fa-times fa-pencil"></i>
          <div class="tooltip">Login</div>
        </div>
          <h2>Create an account</h2>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <input type="email" placeholder="Email Address"/>
            <input type="tel" placeholder="Phone Number"/>
            <button id='signup'>Register</button>
          </form>
        </div>
        <div class="cta"><a href="#">Forgot your password?</a></div>
      </div>
```
on activation 3.html
--------------------
```
/* on activation */
#loginbox.on span {
  background-color: transparent;
}
#loginbox.on span:before {
  transform: rotate(45deg) translate(5px, 5px);
}
#loginbox.on span:after {
  transform: rotate(-45deg) translate(7px, -8px);
}
#loginbox.on {
  opacity: 1;
  display: block;
}

<div id="header">   
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">BRANDS</a></li>
        <li><a href="">DESIGNERS</a></li>
        <li><a href="" id='login'>SingIn/SignUp</a></li>
        <li><a href="">CONTACT</a></li>                                              
    </ul>       
</div>

```
4.html
------
```
 
$(document).ready(function () {
  $('#login').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  

});
```
5.html
------
```
$(document).ready(function () {
  $('#login').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  
  $('#signin').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  
  $('#signup').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  

});
```
6.html
-------
```
$(document).ready(function () {
  $('#login').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  
  $('#signin').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  
  $('#signup').on('click', function () {
        $('#loginbox').toggleClass('on');
  });

   $('.toggle').click(function () {
    $(this).children('i').toggleClass('fa-pencil');
    $('.form').animate({
        height: 'toggle',
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, 'slow');
  });  

});
```

:submit селектор
=================
Соответствует всем элементам ввода типа submit.

Поиск всех элементов ввода типа submit.
---------------------------------------
```
<!DOCTYPE HTML>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    var input = $(":submit").parent('td').css({background:"yellow", border:"3px red solid"});

    $('#result').text('jQuery matched ' + input.length + ' elements.');

    // so it won't submit
    $("form").submit(function () { return false; });

    // Extra JS to make the HTML easier to edit (None of this is relevant to the ':submit' selector
    $('#exampleTable').find('td').each(function(i, el) {
        var inputEl = $(el).children().get(0);
        $(el).before('<td>' + $(inputEl).attr('type') + '</td>');
    })

  });
  </script>

  <style>
  textarea { height:45px; }
  </style>
</head>
<body>

<table>
<form>
<table id="exampleTable" border="1" cellpadding="10" align="center">

    <tr>
        <th>
            Element Type
        </th>
        <th>
            Element
        </th>

    </tr
    <tr>
        <td>
            <input type="button" value="Input Button"/>
        </td>

    </tr>
    <tr>
        <td>
            <input type="checkbox" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="file" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="hidden" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="image" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="password" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="radio" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="reset" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="submit" />
        </td>

    </tr>
    <tr>
        <td>
            <input type="text" />
        </td>

    </tr>
    <tr>
        <td>
            <select><option>Option</option></select>
        </td>

    </tr>
    <tr>
        <td>
            <textarea></textarea>
        </td>
    </tr>

    <tr>
        <td>
            <button>Button</button>
          </td>
      </tr>

</table>
</form>
<div id="result"></div>

</body>
</html>
```

Обработчик или источник события submit
======================================
Устанавливает обработчик отправки формы на сервер, либо запускает это событие. 
submit()
--------
Вызывает событие submit для каждого элемента набора.
Это приводит к тому, что все привязанные к событию submit функции выполняются и вызывается действие браузера по умолчанию для каждого совпавшего элемента набора. Действие браузера по умолчанию можно предотвратить путем возвращения false от одной из функций привязанных к событию submit.

Для вызовы события submit для первой формы на странице:
--------------------------------------------------------
```
$("form:first").submit();
```

submit(функция)
---------------
Назначает функцию к событию submit для каждого элемента набора.
Данное событие обычно активируется, когда отправляется форма.

Функция.
--------
```
function callback(eventObject) {
  this; // dom element
}
```
Для того, чтобы запретить отправку форм, если не установлена какая-либо переменная:
-----------------------------------------------------------------------------------
```
<!DOCTYPE HTML>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("form").submit(function() {
      if ($("input:first").val() == "correct") {
        $("span").text("Validated...").show();
        return true;
      }
      $("span").text("Not valid!").show().fadeOut(1000);
      return false;
    });

  });
  </script>

  <style>
  p { margin:0; color:blue; }
  div,p { margin-left:10px; }
  span { color:red; }
  </style>
</head>
<body>
  <p>Type 'correct' to validate.</p>
  <form action="javascript:alert('success!');">

    <div>
      <input type="text" />
      <input type="submit" />
    </div>

  </form>
  <span></span>
</body>
</html>

```


Клавиатура: keyup, keydown, keypress
=====================================

События keydown и keyup
-----------------------
События keydown/keyup происходят при нажатии/отпускании клавиши и позволяют получить её скан-код в свойстве keyCode.

Скан-коды
---------
Для буквенно-цифровых клавиш есть очень простое правило: скан-код будет равен коду соответствующей заглавной английской буквы/цифры.

Например, при нажатии клавиши S (не важно, каков регистр и раскладка) её скан-код будет равен "S".charCodeAt(0).

Для других символов, в частности, знаков пунктуации, есть таблица кодов, которую можно взять, например, из статьи Джона Уолтера: JavaScript Madness: Keyboard Events http://unixpapa.com/js/key.html.

Событие keypress
------------------
Событие keypress возникает сразу после keydown, если нажата символьная клавиша, т.е. нажатие приводит к появлению символа.

Любые буквы, цифры генерируют keypress. Управляющие клавиши, такие как Ctrl, Shift, F1, F2… – keypress не генерируют.

Событие keypress позволяет получить код символа. В отличие от скан-кода, он специфичен именно для символа и различен для "z" и "я".

Код символа хранится в свойствах: charCode и which.
---------------------------------------------------
Получение символа в keypress
----------------------------
Кросс-браузерная функция для получения символа из события keypress:
-------------------------------------------------------------------
```
// event.type должен быть keypress
function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
    return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}
```
- Во всех браузерах, кроме IE, у события keypress есть свойство charCode, которое содержит код символа.
- Браузер IE для keypress не устанавливает charCode, а вместо этого он записывает код символа в keyCode (в keydown/keyup там хранится скан-код).
- Также в функции выше используется проверка if(event.which!=0), а не более короткая if(event.which). При event.which=null первое сравнение даст true, а второе – false.

перевод символа в верхний регистр
----------------------------------
В примере действие браузера отменяется с помощью return false, а вместо него в input добавляется значение в верхнем регистре:
```
<input id="only-upper" type="text" size="2">
<script>
  document.getElementById('only-upper').onkeypress = function(e) {
    // спец. сочетание - не обрабатываем
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var char = getChar(e);

    if (!char) return; // спец. символ - не обрабатываем

    this.value = char.toUpperCase();

    return false;
  };
</script>
```

Обработчик или источник события keyup
=====================================
.keyup()
--------
Устанавливает обработчик возвращения клавиши клавиатуры в ненажатое состояние, либо, запускает это событие. Метод имеет три варианта использования:

.keyup(handler(eventObject))
----------------------------
Устанавливает функцию handler в качестве обработчика события keyup, на выбранные элементы. 
Метод является аналогом bind("keyup", handler(eventObject)).

handler(eventObject) — функция, которая будет установлена в качестве обработчика. При вызове она будет получать объект события eventObject.

.keyup(eventData, handler(eventObject))
----------------------------------------
Метод отличается от предыдущего возможностью передавать в обработчик дополнительные данные. 
Является аналогом bind("keyup", eventData, handler(eventObject)).

eventData — дополнительные данные, передаваемые в обработчик. Они должны быть представлены объектом в формате: {fName1:value1, fName2:value2, ...}.

.keyup()
--------
Вызывает событие keyup, у выбранных элементов страницы. Метод является аналогом trigger("keyup").

Обработчик может быть установлен на любой элемент страницы, однако он получит уведомление о событии, только если этот элемент будет находиться в фокусе. Поскольку в различных браузерах список элементов, которые могут получать фокус, может отличаться, то надежнее всего будет привязать это событие к элементам формы. Если необходимо отслеживать нажатие клавиши не в отдельном элементе, а на всей странице сразу, то можно привязать обработчик к объекту документа: $(document).keyup(handler).

Код нажатой клавиши
-------------------
Для того, чтобы узнать какая именно клавиша клавиатуры была отпущена, можно посмотреть значение переменной eventObject.which, которая содержит код нажатой клавиши. метод keyup как и keydown определяют отпущенную клавишу, а не вводимый с ее помощью символ, таким образом, при введении латинских "a" и "A" и кириллических "ф" и "Ф", переменная eventObject.which внутри обработчика события keyup будет содержать одно значение — 65, поскольку все они находятся на одной кнопке. 

Для того, чтобы узнать вводимый символ (а не клавишу) нужно использовать метод keypress.

Пример
-------
```
// установим обработчик события keyup, элементу с идентификатором foo
// и проверим, какая именно клавиша была отпущена
$('#foo').keyup(function(eventObject){
  alert('Клавиша клавиатуры возвратилась в ненажатое состояние. Код символа на этой клавише - ' + eventObject.which);
});
 
// вызовем событие keyup на элементе foo
$('#foo').keyup();
 
// установим еще один обработчик события keyup, на этот раз элементам 
// с классом block. В обработчик передадим дополнительные данные
$('.block').keyup({a:12, b:"abc"}, function(eventObject){
  var externalData = "a=" + eventObject.data.a + ", b=" + eventObject.data.b;
  alert('Кнопка клавиатуры была отпущена. '+
        'В обработчик этого события переданы данные: ' + externalData );
});

```

Фокусировка: focus/blur
=======================
элемент «получает фокус», когда посетитель фокусируется на нём. Обычно фокусировка автоматически происходит при нажатии на элементе мышкой, но также можно перейти на нужный элемент клавиатурой – через клавишу Tab, нажатие пальцем на планшете и так далее.

При получении фокуса мы можем подгрузить данные для автодополнения, начать отслеживать изменения. При потере – проверить данные, которые ввёл посетитель.

События focus/blur
==================
Событие focus вызывается тогда, когда пользователь фокусируется на элементе, а blur – когда фокус исчезает, например посетитель кликает на другом месте экрана.

используем для проверки («валидации») введённых в форму значений.
-----------------------------------------------------------------
- Обработчик onblur проверяет, что в поле введено число, если нет – показывает ошибку.
- Обработчик onfocus, если текущее состояние поля ввода – «ошибка» – скрывает её (потом при onblur будет повторная проверка).

если набрать что-нибудь в поле «возраст» и завершить ввод, нажав Tab или кликнув в другое место страницы, то введённое значение будет автоматически проверено:

```
<style> .error { border-color: red; } </style>

Введите ваш возраст: <input type="text" id="input">

<div id="error"></div>

<script>
input.onblur = function() {
  if (isNaN(this.value)) { // введено не число
    // показать ошибку
    this.className = "error";
    error.innerHTML = 'Вы ввели не число. Исправьте, пожалуйста.'
  }
};

input.onfocus = function() {
  if (this.className == 'error') { // сбросить состояние "ошибка", если оно есть
    this.className = "";
    error.innerHTML = "";
  }
};
</script>
```
Методы focus/blur
=================
Методы с теми же названиями переводят/уводят фокус с элемента.

при неверном вводе посетитель не может уйти с элемента:
--------------------------------------------------------
```

<style>
  .error {
    background: red;
  }
</style>

<div>Возраст:
  <input type="text" id="age">
</div>

<div>Имя:
  <input type="text">
</div>

<script>
  age.onblur = function() {
    if (isNaN(this.value)) { // введено не число
      // показать ошибку
      this.classList.add("error");
      //... и вернуть фокус обратно
      age.focus();
    } else {
      this.classList.remove("error");
    }
  };
</script>
```
Этот пример работает во всех браузерах, кроме Firefox (ошибка).

Если ввести что-то нецифровое в поле «возраст», и потом попытаться табом или мышкой перейти на другой input, то обработчик onblur вернёт фокус обратно.

HTML5 и CSS3 вместо focus/blur
------------------------------

Подсветка при фокусировке
--------------------------
Стилизация полей ввода может быть решена средствами CSS – селектором :focus:

```
<style>
input:focus {
  background: #FA6;
  outline: none;  /* убрать рамку */
}
</style>
<input type="text">

<p>Селектор :focus выделит элемент при фокусировке на нем и уберёт рамку, которой браузер выделяет этот элемент по умолчанию.</p>
```
В IE (включая более старые) скрыть фокус также может установка специального атрибута hideFocus.

Автофокус
----------
При загрузке страницы, если на ней существует элемент с атрибутом autofocus – браузер автоматически фокусируется на этом элементе. Работает во всех браузерах, кроме IE9-.
```
<input type="text" name="search" autofocus>
```
Если нужны старые IE, то же самое может сделать JavaScript:
```
<input type="text" name="search">
<script>
  document.getElementsByName('search')[0].focus();
</script>
```
Как правило, этот атрибут используется при изначальной загрузке, для страниц поиска и так далее, где главный элемент очевиден.

Плейсхолдер
------------
Плейсхолдер – это значение-подсказка внутри INPUT, которое автоматически исчезает при фокусировке и существует, пока посетитель не начал вводить текст.

Во всех браузерах, кроме IE9-, это реализуется специальным атрибутом placeholder:
```
<input type="text" placeholder="E-mail">
```
В некоторых браузерах этот текст можно стилизовать:
---------------------------------------------------
```                           
<style>
.my::-webkit-input-placeholder {
  color: red;
  font-style: italic;
}
.my::-moz-input-placeholder {
  color: red;
  font-style: italic;
}
.my::-ms-input-placeholder {
  color: red;
  font-style: italic;
}
</style>

<input class="my" type="text" placeholder="E-mail">
```
Стилизованный плейсхолдер
-------------------------
Разрешаем фокус на любом элементе: tabindex
--------------------------------------------
По умолчанию не все элементы поддерживают фокусировку.
на элементах для форматирования, таких как div, span, table – по умолчанию сфокусироваться нельзя.

В HTML есть атрибут tabindex.
-----------------------------
Его основной смысл – это указать номер элемента при переборе клавишей Tab.

Исключением являются специальные значения:
------------------------------------------
- tabindex="0" делает элемент всегда последним.
- tabindex="-1" означает, что клавиша Tab будет элемент игнорировать.
- Любой элемент поддерживает фокусировку, если у него есть tabindex.

```
<ul>
  <li tabindex="1">Один</li>
  <li tabindex="0">Ноль</li>
  <li tabindex="2">Два</li>
  <li tabindex="-1">Минус один</li>
</ul>

<style>
  li { cursor: pointer; }
  :focus { outline: 1px dashed green; }
</style>
```
Порядок перемещения по клавише «Tab» в примере выше должен быть таким: 1 - 2 - 0 (ноль всегда последний). 

Делегирование с focus/blur
--------------------------
События focus и blur не всплывают.
----------------------------------

```
<!-- при фокусировке на форме ставим ей класс -->
<form onfocus="this.className='focused'">
  <input type="text" name="name" value="Ваше имя">
  <input type="text" name="surname" value="Ваша фамилия">
</form>

<style> .focused { outline: 1px solid red; } </style>
```
Пример выше не работает, т.к. при фокусировке на любом input событие focus срабатывает только на этом элементе и не всплывает наверх. Так что обработчик onfocus на форме никогда не сработает.

focus/blur могут быть пойманы на фазе перехвата.
------------------------------------------------

```
<form id="form">
  <input type="text" name="name" value="Ваше имя">
  <input type="text" name="surname" value="Ваша фамилия">
</form>

<style>
  .focused {
    outline: 1px solid red;
  }
</style>

<script>
  // ставим обработчики на фазе перехвата, последний аргумент true
  form.addEventListener("focus", function() {
    this.classList.add('focused');
  }, true);

  form.addEventListener("blur", function() {
    this.classList.remove('focused');
  }, true);
</script>
```
События focusin/focusout
========================
События focusin/focusout – то же самое, что и focus/blur, только они всплывают.

Из-за отсутствия подержки Firefox эти события используют редко. 

Подсветка формы
---------------
```
 <form name="form">
  <input type="text" name="name" value="Ваше имя">
  <input type="text" name="surname" value="Ваша фамилия">
</form>
<style>
  .focused {
    outline: 1px solid red;
  }
</style>

<script>
  function onFormFocus() {
    this.className = 'focused';
  }

  function onFormBlur() {
    this.className = '';
  }

  var form = document.forms.form;

  if (form.addEventListener) {
    // focus/blur на стадии перехвата срабатывают во всех браузерах
    // поэтому используем их
    form.addEventListener('focus', onFormFocus, true);
    form.addEventListener('blur', onFormBlur, true);
  } else {
    // ветка для IE8-, где нет стадии перехвата, но есть focusin/focusout
    form.onfocusin = onFormFocus;
    form.onfocusout = onFormBlur;
  }
</script>
```


событие blur( )
===============
Вызывает событие blur для каждого элемента набора.
Это приводит к тому, что все привязанные к событию blur функции выполняются и вызывается действие браузера по умолчанию для каждого совпавшего элемента набора. Действие браузера по умолчанию можно предотвратить путем возвращения false от одной из функций привязанных к событию blur. Данное событие обычно активируется, когда элемент теряет фокус либо при навигации указывающим устройством либо при помощи клавиши Tab.

Активирует событие blur.
------------------------
```
<!DOCTYPE HTML>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("input").blur(function () {
         $(this).next("span").css('display','inline').fadeOut(1000);
    });

  });
  </script>

  <style>span {display:none;}</style>
</head>
<body>
  <p><input type="text" /> <span>blur fire</span></p>

<p><input type="password" /> <span>blur fire</span></p>
</body>
</html>
```

.blur( handler(eventObject) )
-----------------------------
handler(eventObject)
--------------------
Функция-обработчик события.

.blur( [eventData ], handler(eventObject) )
--------------------------------------------
eventData
---------
Объект с данными, передаваемые в обработчик.

.blur()
-------
Данный метод, это алиас для методов .on( "blur", handler ) или .trigger( "blur" ).

Событие blur происходит, когда элемент теряет фокус. Обычно данное событие применяется для элементов форм input. Элемент теряет фокус в том числе, когда по пользователь переключается по полям формы, используя клавишу Tab.

К примеру, у нас есть HTML:
```
<form>
 <input id="target" type="text" value="Field 1">
 <input type="text" value="Field 2">
</form>
<div id="other">
 Trigger the handler
</div>
```
The event handler can be bound to the first input field:
```
$( "#target" ).blur(function() {
 alert( "Handler for .blur() called." );
});
```
Теперь после перехода с первого элемента: будет вызван обработчик события .blur().

Для вызова события вручную:
---------------------------
```
$( "#other" ).click(function() {
 $( "#target" ).blur();
});
```

Применить событие event ко всем параграфам:
-------------------------------------------
```
$( "p" ).blur();
```



событие focus
==============
.focus()
-----------
Вызывается или отслеживается JavaScript событие "focus".

Вызывает событие focus для каждого элемента набора.
Это приводит к тому, что все привязанные к событию focus функции выполняются.

Для того, чтобы при загрузке страницы немедленно передать фокус элементу с ID ‘login’:
```
$(document).ready(function(){
  $("#login").focus();
});
```
.focus(handler(eventObject))
------------------------------
handler(eventObject) 
--------------------
Функция-обработчик события.

.focus( [eventData ], handler(eventObject) )
---------------------------------------------
eventData 
---------
Объект с данными, которые будут переданы в обработчик. 

Событие focus срабатывает, когда пользователь переключается на элемент формы. Оно отслеживает поля input, select и так далее. Для селект боксов, радио кнопок и чекбоксов событие срабатывает сразу же после изменения, в других же случаях только в тот момент, как пользователь перейдёт на другой элемент.

К примеру, у нас есть следующий HTML:
--------------------------------------
```
<form>
 <input class="target" type="text" value="Field 1">
 <select class="target">
   <option value="option1" selected="selected">Option 1</option>
   <option value="option2">Option 2</option>
 </select>
</form>
<div id="other">
 Trigger the handler
</div>
```
Обработчик события может быть прикреплён следующим образом:
-----------------------------------------------------------
```
$( ".target" ).focus(function() {
 alert( "Handler for .focus() called." );
});
```
Теперь при переключении элементов формы, вы увидите сообщение:
```
Handler for .focus() called.
```
Самостоятельный вызов события:
-------------------------------
```
$( "#other" ).click(function() {
 $( ".target" ).focus();
});
```

Активирует событие focus.
-------------------------
```
<!DOCTYPE HTML>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("input").focus(function () {
         $(this).next("span").css('display','inline').fadeOut(1000);
    });

  });
  </script>

  <style>span {display:none;}</style>
</head>
<body>
  <p><input type="text" /> <span>focus fire</span></p>

<p><input type="password" /> <span>focus fire</span></p>
</body>
</html>
```
Пример: вызываем событие.
-------------------------
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>focus demo</title>
  <style>
  span {
    display: none;
  }
  </style>
  <script src="http://code.jquery.com/jquery.js"></script>
</head>
<body>
<p><input type="text"> <span>focus fire</span></p>
<p><input type="password"> <span>focus fire</span></p>
 
<script>
$( "input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});
</script>

</body>
</html>
```

Пример: предотвращаем заполнение полей формы:
----------------------------------------------
```
$( "input[type=text]" ).focus(function() {
 $( this ).blur();
});
```
Пример: сфокусироваться на поле с id = login:
----------------------------------------------
```
$( document ).ready(function() {
 $( "#login" ).focus();
});
```

2 Sign Up and Log In Form
==========================
```
<!DOCTYPE html>
<html class=''>
<head>
<meta charset='UTF-8'>

<link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,300,600' rel='stylesheet' type='text/css'>
<link rel='stylesheet prefetch' href='normalize.css'>
<style>
*, *:before, *:after {
  box-sizing: border-box;
}

html {
  overflow-y: scroll;
}

body {
  background: #c1bdba;
  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration: none;
  color: #1ab188;
  -webkit-transition: .5s ease;
  transition: .5s ease;
}
a:hover {
  color: #179b77;
}

.form {
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}

.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.tab-group:after {
  content: "";
  display: table;
  clear: both;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
  -webkit-transition: .5s ease;
  transition: .5s ease;
}
.tab-group li a:hover {
  background: #179b77;
  color: #ffffff;
}
.tab-group .active a {
  background: #1ab188;
  color: #ffffff;
}

.tab-content > div:last-child {
  display: none;
}

h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  margin: 0 0 40px;
}

label {
  position: absolute;
  -webkit-transform: translateY(6px);
          transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
}
label .req {
  margin: 2px;
  color: #1ab188;
}

label.active {
  -webkit-transform: translateY(50px);
          transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}
label.active .req {
  opacity: 0;
}

label.highlight {
  color: #ffffff;
}

input, textarea {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #a0b3b0;
  color: #ffffff;
  border-radius: 0;
  -webkit-transition: border-color .25s ease, box-shadow .25s ease;
  transition: border-color .25s ease, box-shadow .25s ease;
}
input:focus, textarea:focus {
  outline: 0;
  border-color: #1ab188;
}

textarea {
  border: 2px solid #a0b3b0;
  resize: vertical;
}

.field-wrap {
  position: relative;
  margin-bottom: 40px;
}

.top-row:after {
  content: "";
  display: table;
  clear: both;
}
.top-row > div {
  float: left;
  width: 48%;
  margin-right: 4%;
}
.top-row > div:last-child {
  margin: 0;
}

.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: #1ab188;
  color: #ffffff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
.button:hover, .button:focus {
  background: #179b77;
}

.button-block {
  display: block;
  width: 100%;
}

.forgot {
  margin-top: -20px;
  text-align: right;
}
</style></head><body>
<div class="form">
      
      <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          <h1>Sign Up for Free</h1>
          
          <form action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">
              <label>
                First Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>
        
            <div class="field-wrap">
              <label>
                Last Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <button type="submit" class="button button-block"/>Get Started</button>
          
          </form>

        </div>
        
        <div id="login">   
          <h1>Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a href="#">Forgot Password?</a></p>
          
          <button class="button button-block"/>Log In</button>
          
          </form>

        </div>
        
      </div><!-- tab-content -->
      
</div> <!-- /form -->

<script src='jquery.min.js'></script>
<script>

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
    var $this = $(this), label = $this.prev('label');
    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {
        if ($this.val() === '') {
            label.removeClass('highlight');
        } else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }
});
$('.tab a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    target = $(this).attr('href');
    $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);
});

</script>

</body></html>
```

Навигация и свойства элементов формы
=====================================

Псевдомассив form.elements
---------------------------
Элементы FORM можно получить по имени или номеру, используя свойство document.forms[name/index].

Например:
```
document.forms.my -- форма с именем 'my'
document.forms[0] -- первая форма в документе
```
Любой элемент формы form можно получить, используя свойство form.elements.
--------------------------------------------------------------------------

```
 <body>
  <form name="my">
    <input name="one" value="1">
    <input name="two" value="2">
  </form>

  <script>
    var form = document.forms.my; // можно document.forms[0]

    var elem = form.elements.one; // можно form.elements[0]

    alert( elem.value ); // "один"
  </script>
</body>
```
Может быть несколько элементов с одинаковым именем. 
----------------------------------------------------
В таком случае form.elements[name] вернет коллекцию элементов:
```
<body>
<form>
  <input type="radio" name="age" value="10">
  <input type="radio" name="age" value="20">
</form>

<script>
var form = document.forms[0];

var elems = form.elements.age;

alert(elems[0].value); // 10, первый input
</script>
</body>
```
Свойство elements также есть у элементов fieldset.
```
<body>
  <form>
    <fieldset name="set">
      <legend>fieldset</legend>
      <input name="text" type="text">
    </fieldset>
  </form>

  <script>
    var form = document.forms[0];

    alert( form.elements.text ); // INPUT
    alert( form.elements.set.elements.text ); // INPUT
  </script>
</body>
```
Получить доступ к элементам формы можно через form[index/name].
----------------------------------------------------------------
если к элементу обратиться по его name, а потом свойство name изменить, то он по-прежнему будет доступен под старым именем.
```
 <form name="myform">
  <input name="text">
</form>

<script>
  var form = document.forms.myform;

  alert( form.elements.text == form.text ); // true, это тот самый INPUT

  form.text.name = "new-name"; // меняем name ему

  // нет больше элемента с таким именем
  alert( form.elements.text ); // undefined

  alert( form.text ); //  INPUT (а должно быть undefined!)
</script>
```
Ссылка на форму element.form
-----------------------------
По элементу можно получить его форму, используя свойство element.form.

```
<body>
<form>
  <input type="text" name="surname">
</form>

<script>
var form = document.forms[0];

var elem = form.elements.surname;

alert(elem.form == form); // true
</script>
</body>
```

Элемент label
-------------
Клик на label засчитывается как фокусировка или клик на элементе формы, к которому он относится.
Это позволяет посетителям кликать на метке, а не на маленьком квадратике input type=checkbox (radio).

Есть два способа показать, какой элемент относится к label:
------------------------------------------------------------

1. Дать метке атрибут for, равный id соответствующего input:
```
<table>
  <tr>
    <td>
      <label for="agree">Согласен с правилами</label>
    </td>
    <td>
      <input id="agree" type="checkbox">
    </td>
  </tr>
  <tr>
    <td>
      <label for="not-a-robot">Я не робот</label>
    </td>
    <td>
      <input id="not-a-robot" type="checkbox">
    </td>
  </tr>
</table>
```
2. Завернуть элемент в label. В этом случае можно обойтись без дополнительных атрибутов:
```
<label>Кликни меня <input type="checkbox"></label>
```
Элементы input и textarea
---------------------------
Для большинства типов input значение ставится/читается через свойство value.
```
input.value = "Новое значение";
textarea.value = "Новый текст";
```
Для элементов textarea также доступно свойство innerHTML, но лучше им не пользоваться: оно хранит только HTML, изначально присутствовавший в элементе, и не меняется при изменении значения.

Исключения – input type="checkbox" и input type="radio"

Текущее «отмеченное» состояние для checkbox и radio находится в свойстве checked (true/false).
```
if (input.checked) {
  alert( "Чекбокс выбран" );
}
```
Элементы select и option
------------------------
Селект в JavaScript можно установить двумя путями: поставив значение select.value, либо установив свойство select.selectedIndex в номер нужной опции.:
```
select.selectedIndex = 0; // первая опция
```
Установка selectedIndex = -1 очистит выбор.
-------------------------------------------
Список элементов-опций доступен через select.options.
-----------------------------------------------------
Если select допускает множественный выбор (атрибут multiple), то значения можно получить/установить, сделав цикл по select.options. При этом выбранные опции будут иметь свойство option.selected = true.

```
<form name="form">
  <select name="genre" multiple>
    <option value="blues" selected>Мягкий блюз</option>
    <option value="rock" selected>Жёсткий рок</option>
    <option value="classic">Классика</option>
  </select>
</form>

<script>
var form = document.forms[0];
var select = form.elements.genre;

for (var i = 0; i < select.options.length; i++) {
  var option = select.options[i];
  if(option.selected) {
    alert( option.value );
  }
}
</script>
```
Спецификация: the select element.
----------------------------------
new Option
----------
В стандарте the option element есть короткий синтаксис для создания элемента с тегом option:
```
option = new Option(text, value, defaultSelected, selected);
```
Параметры:
----------
- text – содержимое,
- value – значение,
- defaultSelected и selected поставьте в true, чтобы сделать элемент выбранным.
Его можно использовать вместо document.createElement('option'), например:
```
var option = new Option("Текст", "value");
// создаст <option value="value">Текст</option>
```
Такой же элемент, но выбранный:
```
var option = new Option("Текст", "value", true, true);
```
Дополнительные свойства option
-------------------------------
У элементов option также есть особые свойства:

- selected - выбрана ли опция
- index - номер опции в списке селекта
- text - Текстовое содержимое опции (то, что видит посетитель).

Работа с атрибутом value
========================
.val()
------
Метод позволяет получать и изменять значения элементов форм. Для элементов input это значение атрибута value; для списков выбора (select) – значение value выбранного элемента (в случае множественного выбора – массив значений); в случае с textarea, метод .val() будет работать непосредственно с содержимым тега textarea. 

Метод имеет три варианта использования:
---------------------------------------
.val()
------
возвращает значение атрибута value у выбранного элемента формы. Если выбрано несколько элементов, то значение будет взято у первого. В случае, элемента формы select multiple="multiple" возвращается массив всех выбранных значений.
.val(newVal)
------------
атрибуту value будет присвоено значение newVal, у всех выбранных элементов.

.val(function(index, newVal))
-------------------------------
атрибуту value будет присвоено значение, возвращенное пользовательской функцией. Функция вызывается отдельно, для каждого из выбранных элементов. При вызове, ей передаются следующие параметры: index — позиция элемента в наборе, newVal — текущее значение атрибута value у элемента.
```
$("#surname").val() вернет значение элемента с идентификатором surname
$(".surname").val() вернет значение первого элемента с классом surname
$("input[name='surname']").val()  вернет значение первого элемента формы с атрибутом name равным surname
$(".surname").val("Задерищенко")  присвоит значение "Задерищенко" всем элементам формы с классом surname
```
используя метод .val(), вы получите значения атрибута value, только у первого элемента из всех выбранных. Если вам нужны значения всех элементов, то следует использовать конструкции типа .map() или .each().

Для элементов select и чекбоксов, мы можем так же использовать :selected и :checked:
------------------------------------------------------------------------------------
```
$('select.foo option:selected').val();    // достаём значение из элемента select

$('select.foo').val();                    // альтернативный способ

$('input:checkbox:checked').val();        // достаём значение из чекбокса

$('input:radio[name=bar]:checked').val(); // достаём значение из группы радио кнопок
```
Пример: 
-------
достать значение из элемента select и массив значений из множественного селектов.

```
<!DOCTYPE html>
<html>
<head>
 <style>
 p { color:red; margin:4px; }
 b { color:blue; }
 </style>
 <script src="jquery.min.js"></script>
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
<script>
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
</script>
</body>
</html>
```

Пример: 
-------
получить значение поля input.

```
<!DOCTYPE html>
<html>
<head>
 <style>
 p { color:blue; margin:8px; }
 </style>
 <script src="jquery.min.js"></script>
</head>
<body>
 <input type="text" value="some text"/>
 <p></p>
<script>
   $("input").keyup(function () {
     var value = $(this).val();
     $("p").text(value);
   }).keyup();
</script>
</body>
</html>
```
Так же мы можем задавать значения.

Пример: задаём значение полю input. 
-----------------------------------

```
<!DOCTYPE html>
<html>
<head>
 <style>
 button { margin:4px; cursor:pointer; }
 input { margin:4px; color:blue; }
 </style>
 <script src="jquery.min.js"></script>
</head>
<body>
 <div>
   <button>Feed</button>
   <button>the</button>
   <button>Input</button>
 </div>
 <input type="text" value="click a button" />
<script>
   $("button").click(function () {
     var text = $(this).text();
     $("input").val(text);
   });
</script>
</body>
</html>
```
Пример:
-------
используем функция в качестве аргумента для установки значения input.

```
<!DOCTYPE html>
<html>
<head>
 <script src="jquery.min.js"></script>
</head>
<body>
 <p>Type something and then click or tab out of the input.</p>
 <input type="text" value="type something" />
<script>
 $('input').on('blur', function() {
   $(this).val(function( i, val ) {
     return val.toUpperCase();
   });
 });
 </script>
</body>
</html>
```
Пример: 
-------
задаём значение селекту из одного значения, и множественному селекту, а так же чекбоксам и группе радио кнопок.

```
<!DOCTYPE html>
<html>
<head>
 <style>
 body { color:blue; }
 </style>
 <script src="jquery.min.js"></script>
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
<script>
   $("#single").val("Single2");
   $("#multiple").val(["Multiple2", "Multiple3"]);
   $("input").val(["check1","check2", "radio1" ]);
</script>
</body>
</html>
```

3 Contact Form
===============
```

<!DOCTYPE html>
<html class=''>
<head>
<meta charset='UTF-8'>

<script src="modernizr.js" type="text/javascript"></script>

<meta name="viewport" content="width=device-width">
<link rel='stylesheet prefetch' href='normalize.css'>
<style>
@import url(http://fonts.googleapis.com/css?family=Roboto:400,700);
* {
  margin: 0;
  padding: 0;
}

body {
  background: #cbd0d3;
  color: #1a1a1a;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
}

input, textarea {
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
}

label:hover {
  cursor: text;
}

.credit {
  bottom: 40px;
  color: #949ea4;
  font-size: 12px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  z-index: 99;
}
.credit a {
  color: #6c7880;
  text-decoration: none;
}
.credit a:hover {
  color: #1a1a1a;
}
.credit a:active {
  color: #343434;
}

.contact-form {
  background: #ffffff;
  height: auto;
  margin: 100px auto;
  max-width: 500px;
  overflow: hidden;
  width: 65%;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;
  -webkit-box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;
  box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;
}
@media (max-width: 500px) {
  .contact-form {
    margin: 0 0 100px;
    width: 100%;
  }
}
.contact-form .email, .contact-form .message, .contact-form .name {
  position: relative;
}
.contact-form .email input:focus, .contact-form .email textarea:focus, .contact-form .message input:focus, .contact-form .message textarea:focus, .contact-form .name input:focus, .contact-form .name textarea:focus {
  background: #f4f5f6;
}
.contact-form .email label, .contact-form .message label, .contact-form .name label {
  color: #cbd0d3;
  left: 23px;
  position: absolute;
  top: 23px;
  -moz-transition: all, 150ms;
  -o-transition: all, 150ms;
  -webkit-transition: all, 150ms;
  transition: all, 150ms;
}
.contact-form .email.typing label, .contact-form .message.typing label, .contact-form .name.typing label {
  color: #3498db;
  font-size: 10px;
  top: 7px;
}
.contact-form .email, .contact-form .name {
  width: calc(50% - 1px);
}
@media (max-width: 500px) {
  .contact-form .email, .contact-form .name {
    width: 100%;
  }
}
.contact-form .email input, .contact-form .name input {
  padding: 23px 0 8px 23px;
}
.contact-form .email {
  border-left: 1px #e6e6e6 solid;
  float: right;
}
@media (max-width: 500px) {
  .contact-form .email {
    border-left: none;
    border-top: 1px #e6e6e6 solid;
  }
}
.contact-form .message {
  border-bottom: 1px #e6e6e6 solid;
  border-top: 1px #e6e6e6 solid;
  clear: both;
}
.contact-form .message textarea {
  height: 200px;
  padding: 23px;
}
.contact-form .name {
  float: left;
}
.contact-form .submit {
  background: #f4f5f6;
  display: block;
  overflow: hidden;
  padding: 23px;
}
.contact-form .submit .button {
  background: #3498db;
  border: 1px #3498db solid;
  color: #ffffff;
  float: right;
  padding: 9px 0;
  width: 100px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
@media (max-width: 500px) {
  .contact-form .submit .button {
    float: none;
  }
}
.contact-form .submit .button:hover {
  background: #4aa3df;
}
.contact-form .submit .button:active {
  background: #258cd1;
}
.contact-form .submit .button:focus {
  border-color: #b6daf2;
  -moz-box-shadow: #75b9e7 0 0 4px 1px, #75b9e7 0 0 4px 1px inset;
  -webkit-box-shadow: #75b9e7 0 0 4px 1px, #75b9e7 0 0 4px 1px inset;
  box-shadow: #75b9e7 0 0 4px 1px, #75b9e7 0 0 4px 1px inset;
}
.contact-form .submit .user-message {
  float: left;
  padding-top: 22px;
}
@media (max-width: 500px) {
  .contact-form .submit .user-message {
    float: none;
    padding: 0 0 10px;
  }
}
</style></head><body>
<form class="contact-form">
  <div class="name">
    <label for="name">Full Name</label>
    <input type="text" id="name" />
  </div>  
  <div class="email">
    <label for="email">Email</label>
    <input type="text" id="email" />
  </div>
  <div class="message">
    <label for="message">Message</label>
    <textarea name="message" id="message"></textarea>
  </div>
  <div class="submit">
    <p class="user-message">Message to the user.</p>
    <input type="submit" value="Send" class="button" />
  </div>
</form>

<script src='jquery.min.js'></script>
<script>
$('#name').keyup(function () {
    $('.name').addClass('typing');
    if ($(this).val().length == 0) {
        $('.name').removeClass('typing');
    }
});
$('#email').keyup(function () {
    $('.email').addClass('typing');
    if ($(this).val().length == 0) {
        $('.email').removeClass('typing');
    }
});
$('#message').keyup(function () {
    $('.message').addClass('typing');
    if ($(this).val().length == 0) {
        $('.message').removeClass('typing');
    }
});

</script>

</body></html>
```

4 Contact Validation
====================
```

<!DOCTYPE html>
<html class=''>
<head>
<meta charset='UTF-8'>

<link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Michroma|Ubuntu:300,300italic,400'>
<style>
html {
  font: 300 100%/1.5 Ubuntu, sans-serif;
  color: #333;
  overflow-x: hidden;
}
h2 {
  margin: 0;
  color: #8495a5;
  font-size: 2.5em;
  font-weight: 300;
}
#contact-form {
  max-width: 1208px;
  max-width: 75.5rem;
  margin: 0 auto;
}
#contact, label, input[name="submit"] {
  position: relative;
}
label > span, input, textarea, button {
  box-sizing: border-box;
}
label {
  display: block;
}
label > span {
  display: none;
}
input, textarea, button {
  width: 100%;
  padding: 0.5em;
  border: none;
  font: 300 100%/1.2 Ubuntu, sans-serif;
}
input[type="text"], input[type="email"], textarea {
  margin: 0 0 1em;
  border: 1px solid #ccc;
  outline: none;
}
input.invalid, textarea.invalid {
  border-color: #d5144d;
}
textarea {
  height: 6em;
}
input[type="submit"], button {
  background: #a7cd80;
  color: #333;
}
input[type="submit"]:hover, button:hover {
  background: #91b36f;
}
@media screen and (min-width: 30em) {
  #contact-form h2 {
    margin-left: 26.3736%;
    font-size: 2em;
    line-height: 1.5;
  }
  label > span {
    vertical-align: top;
    display: inline-block;
    width: 26.3736%;
    padding: 0.5em;
    border: 1px solid transparent;
    text-align: right;
  }
  input, textarea, button {
    width: 73.6263%;
    line-height: 1.5;
  }
  textarea {
    height: 10em;
  }
  input[type="submit"], button {
    margin-left: 26.3736%;
  }
}
@media screen and (min-width: 48em) {
  #contact-form {
    text-align: justify;
    line-height: 0;
  }
  #contact-form:after {
    content: '';
    display: inline-block;
    width: 100%;
  }
  #contact-form h2 {
    margin-left: 17.2661%;
  }
  #contact-form form, #contact-form aside {
    vertical-align: top;
    display: inline-block;
    width: 65.4676%;
    text-align: left;
    line-height: 1.5;
  }
  #contact-form aside {
    width: 30.9353%;
  }
}</style></head><body>
<section id="contact-form">
  <h2>Contact</h2>
  <form id="contact" name="contact" accept-charset="utf-8">
    <label><span>Name</span><input name="name" type="text" placeholder="Name"/></label>
    <label><span>Email</span><input name="email" type="email" placeholder="Email"/></label>
    <label><span>Message</span><textarea name="message" placeholder="Message"></textarea></label>
    <input name="submit" type="submit" value="Send"/>
  </form>
  <aside>
    <p>Just hit Send on an empty form to see the invalid input animation</p>
    <p>Fill in the form fields to see the success animation (no real validation, any random input will do)</p>
  </aside>
</section>
<script src='jquery.min.js'></script>
<script>
var form = $('#contact'), submit = form.find('[name="submit"]');
form.on('submit', function (e) {
    e.preventDefault();
    if (submit.attr('value') !== 'Send')
        return;
    var valid = true;
    form.find('input, textarea').removeClass('invalid').each(function () {
        if (!this.value) {
            $(this).addClass('invalid');
            valid = false;
        }
    });
    if (!valid) {
        form.animate({ left: '-3em' }, 50).animate({ left: '3em' }, 100).animate({ left: '0' }, 50);
    } else {
        submit.attr('value', 'Sending...').css({
            boxShadow: '0 0 200em 200em rgba(225, 225, 225, 0.6)',
            backgroundColor: '#ccc'
        });
        setTimeout(function () {
            form.find('label').animate({ left: '100%' }, 500).animate({ opacity: '0' }, 500);
        }, 1000);
        setTimeout(function () {
            submit.attr('value', 'Thank you :)').css({ boxShadow: 'none' });
        }, 2000);
        setTimeout(function () {
            form.find('input, textarea').val('');
            form.find('label').css({ left: '0' }).animate({ opacity: '1' }, 500);
            submit.attr('value', 'Send').css({ backgroundColor: '' });
        }, 4000);
    }
});

</script>

</body></html>
```
Login Validation
================
```
          <form id="login_form" accept-charset="utf-8">
            <label><span>Name</span><input type="text" placeholder="Username"/></label>
            <label><span>Password</span><input type="password" placeholder="Password"/></label>
            <button id='signin' name="signin" type="submit" value="Send">Login</button>
          </form>

$(document).ready(function () {
  

  $('#login').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  

  $('#signup').on('click', function () {
        $('#loginbox').toggleClass('on');
  });

   $('.toggle').click(function () {
    $(this).children('i').toggleClass('fa-pencil');
    $('.form').animate({
        height: 'toggle',
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, 'slow');
  });  

 var form_login = $('#login_form'), submit = form_login.find('[name="signin"]');
 
 form_login.on('submit', function (e) {
    e.preventDefault();
    if (submit.attr('value') !== 'Send')
        return;
    var valid = true;
    form_login.find('input').removeClass('invalid').each(function () {
        if (!this.value) {
            $(this).addClass('invalid');
            
            valid = false;
        }
    });
    if (!valid) {
        $('#loginbox').animate({ left: '-1em' }, 50).animate({ left: '1em' }, 100).animate({ left: '40%' }, 50);
    } else {
        submit.attr('value', 'Sending...').css({
            boxShadow: '0 0 200em 200em rgba(225, 225, 225, 0.6)',
            backgroundColor: '#ccc'
        });
        setTimeout(function () {
            form_login.find('label').animate({ left: '100%' }, 500).animate({ opacity: '0' }, 500);
        }, 1000);
        setTimeout(function () {
            submit.attr('value', 'Thank you :)').css({ boxShadow: 'none' });
            console.log('test val',submit.attr('value'));
        }, 2000);
        setTimeout(function () {
            form_login.find('input').val('');
            form_login.find('label').css({ left: '0' }).animate({ opacity: '1' }, 500);
            submit.attr('value', 'Send').css({ backgroundColor: '' });
        }, 4000);
        $('#loginbox').fadeToggle(1000).toggleClass('on');
        //$('#loginbox').toggleClass('on');
    }
});

```


5 Account Setup
===============
```

<!DOCTYPE html>
<html class=''>
<head>
<meta charset='UTF-8'>

<link rel='stylesheet prefetch' href='reset.css'>
<style>
/*custom font*/
@import url(http://fonts.googleapis.com/css?family=Montserrat);

/*basic reset*/
* {margin: 0; padding: 0;}

html {
    height: 100%;
    /*Image only BG fallback*/
    background: url('gs.png');
    /*background = gradient + image pattern combo*/
    background: 
        linear-gradient(rgba(196, 102, 0, 0.2), rgba(155, 89, 182, 0.2)), 
        url('gs.png');
}

body {
    font-family: montserrat, arial, verdana;
}
/*form styles*/
#msform {
    width: 400px;
    margin: 50px auto;
    text-align: center;
    position: relative;
}
#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;
    
    /*stacking fieldsets above each other*/
    position: relative;
}
/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
    display: none;
}
/*inputs*/
#msform input, #msform textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
}
/*buttons*/
#msform .action-button {
    width: 100px;
    background: #27AE60;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 1px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}
#msform .action-button:hover, #msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
/*headings*/
.fs-title {
    font-size: 15px;
    text-transform: uppercase;
    color: #2C3E50;
    margin-bottom: 10px;
}
.fs-subtitle {
    font-weight: normal;
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
}
/*progressbar*/
#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    /*CSS counters to number the steps*/
    counter-reset: step;
}
#progressbar li {
    list-style-type: none;
    color: white;
    text-transform: uppercase;
    font-size: 9px;
    width: 33.33%;
    float: left;
    position: relative;
}
#progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 20px;
    line-height: 20px;
    display: block;
    font-size: 10px;
    color: #333;
    background: white;
    border-radius: 3px;
    margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1; /*put it behind the numbers*/
}
#progressbar li:first-child:after {
    /*connector not needed before the first step*/
    content: none; 
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,  #progressbar li.active:after{
    background: #27AE60;
    color: white;
}



</style></head><body>
<!-- multistep form -->
<form id="msform">
    <!-- progressbar -->
    <ul id="progressbar">
        <li class="active">Account Setup</li>
        <li>Social Profiles</li>
        <li>Personal Details</li>
    </ul>
    <!-- fieldsets -->
    <fieldset>
        <h2 class="fs-title">Create your account</h2>
        <h3 class="fs-subtitle">This is step 1</h3>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="pass" placeholder="Password" />
        <input type="password" name="cpass" placeholder="Confirm Password" />
        <input type="button" name="next" class="next action-button" value="Next" />
    </fieldset>
    <fieldset>
        <h2 class="fs-title">Social Profiles</h2>
        <h3 class="fs-subtitle">Your presence on the social network</h3>
        <input type="text" name="twitter" placeholder="Twitter" />
        <input type="text" name="facebook" placeholder="Facebook" />
        <input type="text" name="gplus" placeholder="Google Plus" />
        <input type="button" name="previous" class="previous action-button" value="Previous" />
        <input type="button" name="next" class="next action-button" value="Next" />
    </fieldset>
    <fieldset>
        <h2 class="fs-title">Personal Details</h2>
        <h3 class="fs-subtitle">We will never sell it</h3>
        <input type="text" name="fname" placeholder="First Name" />
        <input type="text" name="lname" placeholder="Last Name" />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="address" placeholder="Address"></textarea>
        <input type="button" name="previous" class="previous action-button" value="Previous" />
        <input type="submit" name="submit" class="submit action-button" value="Submit" />
    </fieldset>
</form>

<script src='jquery.min.js'></script>
<script src='jquery.easing.min.js'></script>
<script>
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$('.next').click(function () {
    if (animating)
        return false;
    animating = true;
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');
    next_fs.show();
    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
            scale = 1 - (1 - now) * 0.2;
            left = now * 50 + '%';
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({
                'left': left,
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        easing: 'easeInOutBack'
    });
});
$('.previous').click(function () {
    if (animating)
        return false;
    animating = true;
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    $('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');
    previous_fs.show();
    current_fs.animate({ opacity: 0 }, {
        step: function (now, mx) {
            scale = 0.8 + (1 - now) * 0.2;
            left = (1 - now) * 50 + '%';
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        easing: 'easeInOutBack'
    });
});
$('.submit').click(function () {
    return false;
});

</script>

</body></html>
```
