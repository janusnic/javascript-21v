# javascript-21v

(Immediately-Invoked Function Expression) - IIFE
=================================================
Немедленно вызываемые функции 
-----------------------------

Немедленно вызываемая функция в JavaScript (IIFE) — это синтаксическая конструкция, позволяющая вызвать функцию сразу же в месте ее определения.

Немедленно вызываемая функция выглядит так:
```

(function () {
    // ...
}());
```
Или так:

```
(function () {
    // Code goes here
})();

```
Оба эти варианта эквивалентны. Определяя функцию, например, function doSomething() {} или var doSomething = function() {}, мы тем самым создаем идентификатор функции, которую можно вызвать, добавив круглые скобки: doSomething(). Таким образом, чтобы немедленно вызвать функцию, необходимо после функционального выражения поставить круглые скобки. Однако просто добавление круглых скобок вызовет синтаксическую ошибку, само функциональное выражение, в свою очередь, тоже нужно обернуть в скобки.

Чтобы понять, почему функциональное выражение следует оборачивать в круглые скобки, рассмотрим несколько неправильных вариантов, и подумаем, почему они неправильные:

```
function(){ /* code */ }(); /* SyntaxError: function statement requires a name */
```
В этом примере будет выброшено исключение SyntaxError. Дело в том, что, когда интерпретатор встречает ключевое слово function, по умолчанию, он принимает за определение функции (а не функциональное выражение). А объявление функции требует указания имени.

```
function foo(){ /* code */ }(); /* SyntaxError: syntax error */
```
Объявление функции теперь корректно с точки зрения синтаксиса, но это объявление функции, а не выражение, и скобки в данном случае не будут отнесены к функции, а будут выполнять роль оператора группировки (управляют приоритетом операций). Такие скобки не могут быть пустыми, поэтому будет выброшено исключение.

```
function foo(){ /* code */ }( 1 + 1 );
```
Пример выше не вызовет никаких ошибок, т.к. определение фкнции вполне корректно, и оператор группировки содержит выражение. Однако функция не выполнится немедленно, т.к. не является функцией-выражением.

Поэтому простой способ сказать интерпретатору, что ключевое слово function описывает функциональное выражение — обернуть его в круглые скобки. Также следует обратить внимание, что функция, присваиваемая переменной, является фукциональным выражением, поэтому не требует дополнительных скобок:
```
var value = function() { /* ... */ }();
```
Данные пример не вызовет никаких ошибок, а функция вызовется как положено. Но для чистоты кода и удобства чтения, все же рекомендуют использовать круглые скобки и в данном случае. Таким образом, человек, читающий наш код сразу обратит внимание, что переменной присвоится значение функции, а не само функциональное выражение

Передача параметров в немедленно вызываемую функцию
---------------------------------------------------
Так же, как и в обычные функции, в немедленно вызываемые функции можно передавать параметры:

```
(function sum(a, b) {
    console.log(a + b); // 5
})(2, 3);
```
Возвращаемое значение немедленно вызываемой функции
----------------------------------------------------
как и обычная функция, немедленно вызываемая функция может возвращать значение:

```
var result = (function(a, b) { 
    return a + b;
})(2, 5);
```
Прием немедленно вызываемой функции испольузется для “фиксации” значения, изменяемого в цикле.

```
var elements = document.getElementsByTagName('a');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(e) {
    e.preventDefault();
    alert('Link #' + i);
  }, false);
}
```
Мы выбираем массив ссылок и на каждую из них навешиваем обработчик события click. Ожидается, что по клику на ссылку будет выведен ее порядковый номер в массиве. Но данный пример не будет работать корректно. Пока наступит событие click, значение переменной i изменится, и клик по всем ссылкам будет выводить только последнее значение индекса i.

Для исправления этой ситуации используется немедленно вызываемая функция. Мы передаем текущее значение i в эту функцию и, тем самым, «фиксируем» его:

```
var elements = document.getElementsByTagName('a');
for (var i = 0; i < elements.length; i++) {
  (function(localIndex){
    elements[i].addEventListener('click', function(e) {
      e.preventDefault();
      alert('Link #' + localIndex);
    }, false);
  })(i);
}
```
Также с помощью немедленно вызываемой функции мы можем сгенерировать обработчик события:

```
var elements = document.getElementsByTagName('a');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (function(localIndex){
    return function(e) {
      e.preventDefault();
      alert('Link #' + localIndex);
    };
  })(i), false);
}
```
Responsive Tabs
---------------
```
  <div class="o-container">

    <div class="o-section">
      <div id="tabs" class="c-tabs no-js">
        <div class="c-tabs-nav">
          <a href="#" class="c-tabs-nav__link is-active">
            <i class="fa fa-home"></i>
            <span>Home</span>
          </a>
          <a href="#" class="c-tabs-nav__link">
            <i class="fa fa-book"></i>
            <span>Books</span>
          </a>
          <a href="#" class="c-tabs-nav__link">
            <i class="fa fa-heart"></i>
            <span>Favourites</span>
          </a>
          <a href="#" class="c-tabs-nav__link">
            <i class="fa fa-calendar"></i>
            <span>Calendar</span>
          </a>
          <a href="#" class="c-tabs-nav__link">
            <i class="fa fa-cog"></i>
            <span>Settings</span>
          </a>
        </div>
        <div class="c-tab is-active">
          <div class="c-tab__content">
            <h2>Welcome home!</h2>
            <p>Home ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo minus voluptate unde tempore eveniet consequuntur in, quod animi libero rem similique pariatur quos, et eum nisi ducimus, architecto voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aspernatur natus dolorem fuga cumque optio saepe corrupti earum. Ipsam quaerat asperiores similique omnis excepturi temporibus ab eum magnam ipsa, odio.</p>
          </div>
        </div>
        <div class="c-tab">
          <div class="c-tab__content">
            <h2>All Books</h2>
            <p>Books ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo minus voluptate unde tempore eveniet consequuntur in, quod animi libero rem similique pariatur quos, et eum nisi ducimus, architecto voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aspernatur natus dolorem fuga cumque optio saepe corrupti earum. Ipsam quaerat asperiores similique omnis excepturi temporibus ab eum magnam ipsa, odio.</p>
          </div>
        </div>
        <div class="c-tab">
          <div class="c-tab__content">
            <h2>Your Favourites!</h2>
            <p>Favourites ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo minus voluptate unde tempore eveniet consequuntur in, quod animi libero rem similique pariatur quos, et eum nisi ducimus, architecto voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aspernatur natus dolorem fuga cumque optio saepe corrupti earum. Ipsam quaerat asperiores similique omnis excepturi temporibus ab eum magnam ipsa, odio.</p>
          </div>
        </div>
        <div class="c-tab">
          <div class="c-tab__content">
            <h2>Stay Busy</h2>
            <p>Calendar ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo minus voluptate unde tempore eveniet consequuntur in, quod animi libero rem similique pariatur quos, et eum nisi ducimus, architecto voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aspernatur natus dolorem fuga cumque optio saepe corrupti earum. Ipsam quaerat asperiores similique omnis excepturi temporibus ab eum magnam ipsa, odio.</p>
          </div>
        </div>
        <div class="c-tab">
          <div class="c-tab__content">
            <h2>Change It Up</h2>
            <p>Settings ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo minus voluptate unde tempore eveniet consequuntur in, quod animi libero rem similique pariatur quos, et eum nisi ducimus, architecto voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aspernatur natus dolorem fuga cumque optio saepe corrupti earum. Ipsam quaerat asperiores similique omnis excepturi temporibus ab eum magnam ipsa, odio.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="o-section">
      <div id="github-icons"></div>
    </div>
  </div>
```
wrap code in an IIFE:
---------------------
```
<script>
  (function() {
  'use strict';
  var tabs = function(options) {
    var init = function() {
    };
    return {
      init: init,
    };
  };
})();

</script>

```

pass in all global variables:
-----------------------------
```
 (function(window) {
    'use strict';

    //code here
}(window)); 

```
Attach to global namespace:
---------------------------
```
(function(window) {
  'use strict';
  var tabs = function(options) {
    var init = function() {
    };
    return {
      init: init,
    };
  };
 
 window.tabs = tabs;
})(window);
```
Объекты в JavaScript
====================
Объекты в JavaScript, как и во многих других языках программирования, похожи на объекты реальной жизни. Концепцию объектов JavaScript легче понять, проводя паралелли с реально существующими в жизни объектами.

В JavaScript, объект это самостоятельная единица, имеющая свойства и определенный тип.
```
var opts = {
            el: '#tabs',
            tabNavigationLinks: '.c-tabs-nav__link',
            tabContentContainers: '.c-tab'
           }
```
Объекты и свойства
-------------------
В JavaScript объект имеет свойства, ассоциированные с ним. Свойство объекта можно понимать как переменную, закрепленную за объектом. Свойства объекта в сущности являются теми же самыми переменными JavaScript, за тем исключением, что они закреплены за объектом. Свойства объекта определяют его характеристики. Получить доступ к свойству объекта можно так:
```
console.log(opts.el);
console.log(opts.tabNavigationLinks);
console.log(opts.tabContentContainers);

```
Как и все переменные JavaScript, имя объекта (которое тоже может быть переменной) и имя свойства являются чуствительными к регистру. Вы определяете свойство, просто указывая его значение. 

Доступ к свойствам объектов JavaScript можно получить через квадратные скобки. Объекты являются, ассоциативными массивами, так как каждое свойство ассоциировано с именем, через которое можно получить доступ к нему. Например, доступ к свойствам объекта opts можно получить след.образом:
```
        console.log(options['el']);
        console.log(options['tabNavigationLinks']);
        console.log(options['tabContentContainers']);

```
Имена свойств объекта могут быть строками JavaScript, или тем, что может быть сконвертировано в строку, включая пустую строку. Как бы то ни было, доступ к любому имени свойства, которое содержит невалидный JavaScript идентификатор (например, имя свойства содержит в себе пробел и тире или начинается с цифры), может быть получен с использование квадратных скобок. Этот способ также полезен в случае если имена свойств определяются динамически в процессе выполнения скрипта. 


```
<script>
  (function() {
  'use strict';
  var tabs = function(options) {

        console.log(options['el']);
        console.log(options['tabNavigationLinks']);
        console.log(options['tabContentContainers']);

    var init = function() {
    };
    return {
      init: init,
    };
  };

  window.tabs = tabs;

})();

</script>

<script>
 var opts = {
            el: '#tabs',
            tabNavigationLinks: '.c-tabs-nav__link',
            tabContentContainers: '.c-tab'
           };
  var myTabs = tabs(opts);

  myTabs.init();
</script>

```
myTabs
------
```
<script>

  var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
  });

  myTabs.init();
</script>

```

Поиск querySelector*
=====================
querySelectorAll
----------------
Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem, удовлетворяющие CSS-селектору css.

Это один из самых часто используемых и полезных методов при работе с DOM.

Он есть во всех современных браузерах, включая IE8+ (в режиме соответствия стандарту).

Следующий запрос получает все элементы LI, которые являются последними потомками в UL:

```
<ul>
  <li>Этот</li>
  <li>тест</li>
</ul>
<ul>
  <li>полностью</li>
  <li>пройден</li>
</ul>
<script>
  var elements = document.querySelectorAll('ul > li:last-child');

  for (var i = 0; i < elements.length; i++) {
    alert( elements[i].innerHTML ); // "тест", "пройден"
  }
</script>
```

Псевдо-классы в CSS-селекторе, в частности :hover и :active, также поддерживаются. Например, document.querySelectorAll(':hover') вернёт список, в порядке вложенности, из текущих элементов под курсором мыши.

querySelector
-------------
Вызов elem.querySelector(css) возвращает не все, а только первый элемент, соответствующий CSS-селектору css.

результат такой же, как и при elem.querySelectorAll(css)[0], но в последнем вызове сначала ищутся все элементы, а потом берётся первый, а в elem.querySelector(css) ищется только первый, то есть он эффективнее.

```
    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
```

Этот метод часто используется, когда мы заведомо знаем, что подходящий элемент только один, и хотим получить в переменную сразу его.

```
<script>
  (function() {

  'use strict';

  var tabs = function(options) {

    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);

    var init = function() {
    };

    return {
      init: init,
    };
  };

  window.tabs = tabs;

})();

</script>
<script>
  var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
  });

  myTabs.init();
</script>

```
Классы в виде объекта: classList
================================

Свойство classList — это объект для работы с классами.

Оно поддерживается в IE начиная с IE10, но его можно эмулировать в IE8+, подключив мини-библиотеку classList.js.

Методы classList:
-----------------
- elem.classList.contains("class") — возвращает true/false, в зависимости от того, есть ли у элемента класс class.
- elem.classList.add/remove("class") — добавляет/удаляет класс class
- elem.classList.toggle("class") — если класса class нет, добавляет его, если есть — удаляет.
Кроме того, можно перебрать классы через for, так как classList — это псевдо-массив.

Например:
---------
```
var hasClass, addClass, removeClass, eventType, $q, mobileMenu, navigation, navTrigger, toggleNav;

// проверить наличие класса
hasClass = function (elem, c) {
    return elem.classList.contains(c);
};
// добавить класс
addClass = function (elem, c) {
    elem.classList.add(c);
};

// удалить класс
removeClass = function (elem, c) {
    elem.classList.remove(c);
};

function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
}
```
classList.remove('no-js')
-------------------------
```
        <div class="o-section">
          <div id="tabs" class="c-tabs no-js">
            <div class="c-tabs-nav">
              <a href="#" class="c-tabs-nav__link is-active">
                <i class="fa fa-home"></i>
                <span>Home</span>
              </a>
              <a href="#" class="c-tabs-nav__link">
                <i class="fa fa-book"></i>
                <span>Books</span>
              </a>
              <a href="#" class="c-tabs-nav__link">
                <i class="fa fa-heart"></i>
                <span>Favourites</span>
              </a>
              <a href="#" class="c-tabs-nav__link">
                <i class="fa fa-calendar"></i>
                <span>Calendar</span>
              </a>
              <a href="#" class="c-tabs-nav__link">
                <i class="fa fa-cog"></i>
                <span>Settings</span>
              </a>
            </div>

    var initCalled = false;

    var init = function() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');
      }
    };

```

Генерация событий на элементах
===============================
Можно не только назначать обработчики на события, но и генерировать их самому.

Конструктор Event
-----------------
Синтаксис:
```
var event = new Event(тип события[, флаги]);
```
Где:

- Тип события — может быть как своим, так и встроенным, к примеру "click".
- Флаги — объект вида { bubbles: true/false, cancelable: true/false }, где свойство bubbles указывает, всплывает ли событие, а cancelable — можно ли отменить действие по умолчанию.
- Флаги по умолчанию: {bubbles: false, cancelable: false}.

Метод dispatchEvent
--------------------
чтобы инициировать событие, запускается elem.dispatchEvent(event).

При этом событие срабатывает наравне с браузерными, то есть обычные браузерные обработчики на него отреагируют. Если при создании указан флаг bubbles, то оно будет всплывать.

Отмена действия по умолчанию
----------------------------
На сгенерированном событии, как и на встроенном браузерном, обработчик может вызвать метод event.preventDefault(). Тогда dispatchEvent возвратит false.

Обычно preventDefault() вызов предотвращает действие браузера. В случае, если событие придумано нами, имеет нестандартное имя — никакого действия браузера, конечно, нет.

Но код, который генерирует событие, может предусматривать какие-то ещё действия после dispatchEvent.

Вызов event.preventDefault() является возможностью для обработчика события сообщить в сгенерировавший событие код, что эти действия продолжать не надо.

```
function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
```

При создании события браузер автоматически ставит следующие свойства:
---------------------------------------------------------------------
- isTrusted: false — означает, что событие сгенерировано скриптом, это свойство изменить невозможно.
- target: null — это свойство ставится автоматически позже при dispatchEvent.
- type: тип события — первый аргумент new Event.
- bubbles, cancelable — по второму аргументу new Event.

Другие свойства события, если они нужны, например координаты для события мыши — можно присвоить в объект события позже, например:
```
var event = new Event("click", {bubbles: true, cancelable: false});
event.clientX = 100;
event.clientY = 100;
```

handleClick
------------
```
    var init = function() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');
        
        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };

    var handleClick = function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
    
      });
    };

```

```
    var activeIndex = 0;

    var handleClick = function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    var goToTab = function(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('is-active');
        tabNavigationLinks[index].classList.add('is-active');
        tabContentContainers[activeIndex].classList.remove('is-active');
        tabContentContainers[index].classList.add('is-active');
        activeIndex = index;
      }
    };

```
var tabs = function(options)
============================
```
<script>
  (function() {

  'use strict';

  var tabs = function(options) {
    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
    var activeIndex = 0;
    var initCalled = false;

    var init = function() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');
        
        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };

    var handleClick = function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    var goToTab = function(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('is-active');
        tabNavigationLinks[index].classList.add('is-active');
        tabContentContainers[activeIndex].classList.remove('is-active');
        tabContentContainers[index].classList.add('is-active');
        activeIndex = index;
      }
    };
    
    return {
      init: init,
    };
  };
 
  window.tabs = tabs;
})();

</script>
<script>
   var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.c-tabs-nav__link',
    tabContentContainers: '.c-tab'
  });

  myTabs.init();
</script>

```

toggleMenu
-----------
```
<script>
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(ele, cls) {
    if (!hasClass(ele, cls))
        ele.className += ' ' + cls;
}
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
function init() {
    document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
}
function toggleMenu() {
    var ele = document.getElementsByTagName('body')[0];
    if (!hasClass(ele, 'open')) {
        addClass(ele, 'open');
    } else {
        removeClass(ele, 'open');
    }
}
document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        init();
    }
});

</script>
```
Hamburger Menu Icons
--------------------
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  
  <title>Hamburger Menu Icons</title>
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  
<header class="o-header">
  <nav class="o-header-nav">
    
  </nav>
  <div class="o-container">
    <h1 class="o-header__title">Hamburger Menu Icons</h1>
  </div>
</header>

<main class="o-content">
  <div class="o-container">
    
    <div class="o-grid">
      <div class="o-grid__item">
        <button class="c-hamburger c-hamburger--rot">
          <span>toggle menu</span>
        </button>
      </div>
      <div class="o-grid__item">
        <button class="c-hamburger c-hamburger--htx">
          <span>toggle menu</span>
        </button>
      </div>
      <div class="o-grid__item">
        <button class="c-hamburger c-hamburger--htla">
          <span>toggle menu</span>
        </button>
      </div>
      <div class="o-grid__item">
        <button class="c-hamburger c-hamburger--htra">
          <span>toggle menu</span>
        </button>
      </div>
    </div>

    <div id="github-icons"></div>
  </div>
</main>

<footer class="o-footer">
  <div class="o-container">
    <small>&copy; 2016</small>
  </div>
</footer>

<script>
  (function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  })();
</script>

</body>
</html>
```

Шаблон модуль
==============
С помощью немедленно вызываемой функции в JavaScript реализуется очень полезный паттерн — шаблон «модуль». Суть этого паттерна заключается с создании локальной области видимости, в которой определяются локальные, «приватные» переменные и функции. Сама же немедленно вызываемая функция возращает объект с методами, использующими приватные переменные и функции.

```
var counter = (function() {
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
})();

console.log(counter.get()); // 0
counter.set(3);
console.log(counter.increment()); // 4
console.log(counter.increment()); // 5

console.log(counter.i); // undefined
i; // ReferenceError: i is not defined
```

С помощью немедленно вызываемой функции реализуется прием «фиксации» изменяемого в цикле значения. На немедленно вызываемой функции основан шаблон модуль.

