# javascript-21v

jQuery UI
==========
http://blog.jqueryui.com/
--------------------------
jQuery UI - это библиотека на основе jQuery, реализующая более 20 плагинов, среди которых плагины организующие различное поведение (например перетаскивание или растягивание элементов), восемь видов виджетов (такие как календарь, диалоговые окна, систему вкладок и.т.д) и анимационные эффекты. Кроме этого, UI обладает несколькими темами оформления, с помощью которых оформляются виджеты и которые содержат набор полезных иконок. Любая из тем оформления может быть подкорректирована прямо на сайте jQuery UI, непосредственно перед загрузкой.

# Принцип работы со всей библиотекой jQuery UI.

## Выбор компонентов и загрузка
Зайдите на страницу загрузки jQuery UI и вы увидите, что перед скачиванием можно выбрать необходимые компоненты, тему оформления и версию библиотеки:

- вес js-файла, включающего все компоненты составляет 200кб (в несжатом виде), поэтому исключение ненужных компонент может оказаться весьма полезным. Посмотреть как выглядят те или иные темы оформления, а так же отредактировать одну из них для себя, можно на странице http://jqueryui.com/themeroller/.
- Если вы хотите использовать тему оформления, которую вы настроите самостоятельно, то в начале сделайте все необходимые настройки темы на этой странице, затем нажмите кнопку "Download theme" и вы окажетесь на странице загрузки библиотеки, где в поле Theme будет указана отредактированная вами тема.
- После того, как вы определились с темой оформления и требуемыми компонентами, на странице загрузки нужно нажать на Download, после чего на ваш компьютер будет загружен архив. Он будет содержать три папки:

1. css — содержит файлы оформления (CSS-файл и изображения).
2. Js — содержит файлы с jQuery и jQuery UI.
3. Development-bundle — эту папку можно не загружать на сайт, все ее содержимое носит вспомогательный характер. Здесь много различных файлов с демонстрацией работы плагина и другими вспомогательными файлами.
4. Кроме этих трех папок, в корне архива лежит файл index.html, с демонстрацией скачанных плагинов.

## Подключение UI к вашему сайту

Install via bower
-----------------
```
    bower install jquery/jquery-ui#1.11.1
```
Чтобы jQuery UI заработал на страницах вашего сайта необходимо, чтобы к странице был подключен js-файл библиотеки jQuery, js-файл jQuery UI (находится в папке js скачанного архива) и содержимое папки css (важно, чтобы все оно (содержимое css) располагалось на хостинге в одном каталоге):

jQuery CDN, powered by MaxCDN
------------------------------
    Uncompressed: http://code.jquery.com/ui/1.11.1/jqueryui/1.11.1/jquery-ui.js
    Compressed: http://code.jquery.com/ui/1.11.1/jquery-ui.min.js
Themes:
-------
    black-tie, blitzer, cupertino, dark-hive, dot-luv, eggplant, excite-bike, flick, hot-sneaks, humanity, le-frog, mint-choc, overcast, pepper-grinder, redmond, smoothness, south-street, start, sunny, swanky-purse, trontastic, ui-darkness, ui-lightness, and vader.

Google Ajax Libraries API (CDN)
--------------------------------
    Uncompressed: http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.js
    Compressed: http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js
Themes:
-------
    black-tie, blitzer, cupertino, dark-hive, dot-luv, eggplant, excite-bike, flick, hot-sneaks, humanity, le-frog, mint-choc, overcast, pepper-grinder, redmond, smoothness, south-street, start, sunny, swanky-purse, trontastic, ui-darkness, ui-lightness, and vader.

Microsoft Ajax CDN (CDN)
-------------------------
    Uncompressed: http://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.1/jquery-ui.js
    Compressed: http://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.1/jquery-ui.min.js
Themes:
-------
    black-tie, blitzer, cupertino, dark-hive, dot-luv, eggplant, excite-bike, flick, hot-sneaks, humanity, le-frog, mint-choc, overcast, pepper-grinder, redmond, smoothness, south-street, start, sunny, swanky-purse, trontastic, ui-darkness, ui-lightness, and vader.


    <link type="text/css" href="css/themename/jquery-ui-1.11.2.custom.css" rel="Stylesheet" />      

    <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>


После этого вы можете использовать возможности jQuery UI на вашей странице. Например с помощью одной строки javascript-кода сделать обычный элемент - перетаскиваемым
Все плагины поведения и виджетов обладают схожим принципом работы. Каждый плагин jQuery UI представлен одним основным методом, который вызывается на выбранных элементах. Его имя всегда совпадает с именем плагина. С помощью этого метода можно инстанцировать (устанавливать) плагин на элементы, узнавать и изменять свойства плагина, устанавливать обработчики событий, а так же, запускать функции плагина, которые обычно называют методами (хотя они не являются методами в обычном смысле этого понятия).

## Инстанцирование (установка)
Для установки любого плагина на элементы страницы, достаточно выбрать нужные элементы средствами jQuery и затем вызвать на них метод работы с плагином (имя которого всегда совпадает с названием плагина):
```
$("#someId").dialog()
```
применит плагин Dialog к элементу с идентификатором someId, превратив его в диалоговое окно.
```
$("div:lt(3)").draggable()
```
применит плагин Draggable к первым трем div'ам на странице, сделав их перетаскиваемыми.
## Методы
Обычно, под методом какого-то объекта в javascript, подразумевается функция, вызываемая на этом объекте следующим образом:
```
obj.A(); // вызов метода A на объекте obj
obj.B(); // вызов метода B на объекте obj
```
Однако в пределах работы с конкретными плагинами jQuery UI, методами называют такую форму записи:
```
$("#someId").plaginName("имя метода", параметры метода);
```
Например:
```
$("#someId").dialog("close")
```
Метод close закроет диалоговое окно, установленное на элемент с id = someId
$("div").draggable("destroy")
Destroy удалит функциональность draggable со всех div-элементов на странице
## Свойства
Каждый плагин обладают рядом свойств. Каждое свойство можно задать в момент инстанцирования плагина. Для этого, при установке плагина на элемент нужно передать объект со свойствами в формате {имя_свойства_1:значение_1, имя_свойства_2:значение_2, ...}:
```
// сделаем из элемента с id=someId диалоговое окно с помощью 
// плагина dialog и укажем при этом заголовок для окна
$("#someId").dialog({title:"Сообщение"});

// сделаем из первого div'а на странице календарь с помощью 
// плагина datepicker, и укажем минимальную и максимальную дату
$("div:first").datepicker({
  minDate:new Date(2007, 1 - 1, 1),
  maxDate:new Date(2013, 1 - 1, 1)
});
```
Кроме того, значение любого свойства можно узнать или изменить уже после инстанцирования плагина. Для этого необходимо использовать метод "option":
```
// узнаем заголовок у диалогового окна
var dialogTitle = $("#someId").dialog("option", "title");

// изменим заголовок, добавив к нему префикс "#1 "
$("#someId").dialog("option", "title", "#1 " + dialogTitle)

// изменим минимальную дату в календаре, 
// который установлен на первый div на странице
$("div:first").datepicker("option", "minDate", new Date(2008, 1 - 1, 1));
```
## События
Каждый плагин является источником ряда специфических событий. Например перетаскиваемые элементы производят события начала перетаскивания (dragstart) и окончания перетаскивания (dragstop), диалоговые окна являются источниками событий их открытия и закрытия (dialogopen и dialogclose) и т.д. Обработчики событий можно устанавливать средствами основного метода плагина:
```
// обработка события close диалогового окна
$("selector").dialog({
   close: function(event, ui) { ... }
});
```
или с помощью bind стандартного метода библиотеки jQuery. В этом случае, к названию события всегда будет добавляться префикс из названия плагина (dialogclose вместо close, dragstopвместо stop и т. д.):
```
// обработка события close диалогового окна
$("selector").bind( "dialogclose", function(event, ui){ ... });
```

### Оформление
Все плагины jQuery UI обладают общей системой оформления. Ее можно настраивать с помощью визуального редактора ThemeRoller, а так же манипулируя css напрямую. 

## Создание своих плагинов
Помимо того, что jQuery UI организует множество удобных и интуитивно понятных плагинов, она предоставляет средство, с помощью которого можно делать подобные плагины самостоятельно —фабрику виджетов UI. Одним из ее больших плюсов является то, что в ней организованы некоторые возможности ООП, позволяющие дорабатывать существующие виджеты и создавать собственные иерархии виджетов.

Все плагины jQuery UI спроектированы так, чтобы UI-виджеты можно было подстраивать под особенности оформления и работы большинства сайтов. Оформление каждого виджета описано с помощью CSS и содержит два уровня правил оформления: базовые стили CSS-фреймворка и специфические стили, описывающие правила выбранной темы оформления.

jQuery UI CSS-фреймворк обладает набором правил для названия классов, присваиваемых элементам, участвующим в работе виджета. Эти правила позволяют легко находить требуемые части виджета, как например заголовок, содержимое или кликабельная зона. Так же, эти правила действуют для всех плагинов UI, поэтому, к примеру, кликабельные зоны будет обладать одним и тем же классом - ui-state-default, как у UI-кнопок, так и у UI-аккордеона. Если пользователь наведет на элемент с таким классом курсор, то класс будет автоматически изменен на ui-state-hover, а если кликнет по нему, то элемент изменит этот класс на ui-state-active. Этот и многие другие принципы классификации UI-элементов помогают разработчикам работать с UI-плагинами в максимально просто и понятно.

Все стили jQuery UI CSS-фреймворка находятся в одном файле — ui.theme.css, изменения в котором можно производить в визуальном-онлайн редакторе ThemeRoller. Все правила в этом файле отвечают только за визуальное оформление элементов плагинов (цвета, фон элементов, иконки). Такое разделение гарантирует безопасное редактирование стилей, которое в дальнейшем не скажется на работе плагинов при обновлении UI. Структурные правила оформления элементов (размеры, отступы, позиционирование, float) расположены в отдельных файлах (обычно с именем, типа jquery.ui.accordion.css). Их стоит менять с большой осторожностью — они участвуют в логике поведения плагинов и при обновлении jQuery UI это может нарушить их нормальную работу.

Вносить изменения в оформление jQuery UI плагинов можно на трех различных уровнях:
- Воспользоваться визуальным редактором ThemeRoller. И это наиболее простой из способов. Вы просто вносите необходимые изменения и загружаете файл со стилями (ui.theme.css) и необходимыми картинками оформления. Однако это средство наименее гибкое, поскольку ограничено возможностями ThemeRoller.
- Вносить изменения в css вручную. Чтобы получить больший контроль над тем, как оформлены элементы, участвующие в работе плагина, можно в начале сконфигурировать тему с помощью ThemeRoller, а затем внести необходимые изменения в полученный ui.theme.css файл или в один из css-файлов конкретного плагина (последнее, как уже было описано, не рекомендуется). Так например, вы можете задать радиус углов у кнопок, отличный от радиуса у других компонентов или изменить путь к спрайту картинок плагина.
- Сделать css-файл "с нуля". Если необходимо кардинально изменить внешний вид элементов плагина, то вполне возможно, лучшим вариантом будет создать его самостоятельно, "с нуля". Однако, это требует хорошего понимания html и css структуры UI-плагинов, а так же хороших знаний в области css.

## Советы по созданию собственных UI css-правил
- Имя классов начинайте с указания пространства имен ui-
- Конкретизируя группу элементов, предворяйте имя их классов пространством имен менее конкретной группы. Например, класс диалогового окна является виджетом (более обширная группа), поэтому их класс имеет вид .ui-widget-dialog.
- Не создавайте глобальные стили
- Не используйте id для стилизации (только для поиска элементов)
- Не используйте заглавные буквы
- Используйте дефис, а не подчеркивания для разделения слов в именах классов

## jQuery UI CSS Framework
Следующие css-классы находятся в ui.core.css и ui.theme.css, в зависимости от того, за что они отвечают: расположение и структуру элементов или их оформление (цвет, фон, иконки) соответственно. Эти классы общие для всех UI-элементов, что обеспечивает единый стиль их оформления.
### Вспомогательные элементы (helper'ы)
В некоторых плагинах используются вспомогательные элементы. Например, в плагине, делающим элементы перетаскиваемыми, в течении перетаскивания, оригинал может быть заменен на вспомогательный элемент (в зависимости от настроек).
- .ui-helper-hidden — элемент скрыт (его css-свойство display будет равно true).
- .ui-helper-hidden-accessible — элемент скрыт но доступен на странице (для такого скрытия элемент убирается за пределы страницы, обычно на 10000 пикселей влево).
- .ui-helper-reset — этот класс присваивается вспомогательным элементам, у которых временно сбросили базовые UI css-правила. Такие как: padding, margin, text-decoration, list-style и т. д.
- .ui-helper-clearfix — этот класс присваивается "плавающим" (в смысле css-свойства float) элементам, к которым были применены меры, чтобы их родительские элементы могли их оборачивать.
- .ui-helper-zfix — Applies iframe "fix" css to iframe elements when needed in overlays.
## Контейнеры виджетов
- .ui-widget — Этот класс присваивается основному (внешнему) html-элементу, отвечающему за виджет. Обычно, для этого класса прописывают шрифтовые параметры виджета, поскольку они будут распространяться на него всего.
- .ui-widget-header — устанавливается элементу, который отвечает за область заголовка виджета.
- .ui-widget-content — устанавливается элементу, который отвечает за область содержимого виджета.
- .ui-widget-content — устанавливается элементу, который отвечает за область содержимого виджета.
## Состояния кликабельных элементов
- .ui-state-default — устанавливается "кнопкоподобным" кликабельным элементам.
- .ui-state-hover — устанавливается "кнопкоподобным" элементам, над которыми в настоящий момент находится курсор.
- .ui-state-focus — устанавливается "кнопкоподобным" элементам, которые находятся в фокусе в настоящий момент.
- .ui-state-active — устанавливается "кнопкоподобным" элементам, нажатым в настоящий момент.
## Interaction Cues
- .ui-state-highlight — этот класс присваивается подсвеченным или выбранным элементам.
- .ui-state-error — этот класс присваивается элементам с сообщением об ошибке.
- .ui-state-error-text — дополнительный класс, который присваивается элементам, в которых только текст будет стилизован под сообщение об ошибке, а фон нет. Это актуально напримерlabel-элементов в формах.
- .ui-state-disabled — класс неактивного элемента. Такой элемент не выполняет своего функционального назначения. Внешне он приглушается с помощью частичной прозрачности.
- .ui-priority-primary — если необходима иерархия кнопок, то такой класс присваивается элементам верхней иерархии (priority-1). Такие кнопки имеют жирный текст.
- .ui-priority-secondary — если необходима иерархия кнопок, то такой класс присваивается элементам второго уровня иерархии (priority-2). Такие кнопки имеют нежирный текст и небольшую прозрачность.

## Иконки
- .ui-icon — это базовый класс, который присваивается всем элементам с иконками jQuery UI. Таким элементам прописываются следующие css-правила: это 16-ти пиксельные квадратные элементы без текста, с фоном с заданной иконкой (берется из большого спрайта, идущего с jQuery UI). Нужно отметить, что вид иконок у элементов с классом ui-icon может варьироваться, в зависимости от их родительских элементов. Например, ui-icon элемент, лежащий внутри ui-state-default будет иметь цвет, прописанный специально для иконок лежащих в ui-state-default.
- .ui-icon-{icon type}-{icon sub description}-{direction} — после указания класса ui-icon, можно указать второй класс, который определит тип отображаемой иконки. Например класс ui-icon-triangle-1-e задаст иконку с треугольным указателем, направленным вправо. Все возможные варианты иконок можно найти на странице с Themeroller (наводя курсор на каждую из них, будет показываться имя соответствующего класса).

## Остальное
- .ui-corner-tl — присваивается элементу, с помощью которого выполняется скругление верхнего левого угла.
- .ui-corner-tr — присваивается элементу, с помощью которого выполняется скругление верхнего правого угла.
- .ui-corner-bl — присваивается элементу, с помощью которого выполняется скругление нижнего левого угла.
- .ui-corner-br — присваивается элементу, с помощью которого выполняется скругление нижнего правого угла.
- .ui-corner-top — присваивается элементу, с помощью которого выполняется скругление верхних углов.
- .ui-corner-bottom — присваивается элементу, с помощью которого выполняется скругление нижних углов.
- .ui-corner-right — присваивается элементу, с помощью которого выполняется скругление правых углов.
- .ui-corner-left — присваивается элементу, с помощью которого выполняется скругление левых углов.
- .ui-corner-all — присваивается элементу, с помощью которого выполняется скругление всех углов.
- .ui-widget-overlay — этот класс присваивается элементу, которому необходимо перекрыть весь экран (например для модального окна). За этим классом закрепляются css-правила, задающие ширину, высоту, фон (иногда с картинкой) и уровень прозрачности.
- .ui-widget-shadow — применяется к элементу, который должен организовывать эффект тени для другого элемента (он находится внутри первого). За этим классом закрепляются css-правила, задающие фон/текстуру, радиус скругления углов, прозрачность, верхний и левый отступ и "толщина" тени. Толщина задается параметром padding, а отступ с помощью margin-left и margin-top (могут быть отрицательными).


UI предоставляет 12 плагинов организующих виджеты:
==================================================

Widgets

Widgets are full-featured UI controls that bring the richness of desktop applications to the Web. All widgets provide a solid core with plenty of extension points for customizing behavior, as well as full theming support.

Accordion
==========

accord1.html
------------

        <div id="accordion">
          <h4>Setunggal</h4>
          <div>
            <p>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
            ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
            amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
            odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
            </p>
          </div>
          <h4>Kalih</h4>
          <div>
            <p>
            Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
            purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
            velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
            suscipit faucibus urna.
            </p>
          </div>
          <h4>Tigo</h4>
          <div>
            <p>
            Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
            Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
            ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
            lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
            </p>
          </div>
          <h4>Sekawan</h4>
          <div>
            <p>
            Cras dictum. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
            mauris vel est.
            </p>
          </div>
        </div>

        <script src='js/jquery.min.js'></script>
        <script src='js/jquery-ui.js'></script>
        <script>
        $(function () {
            $('#accordion').accordion({
                collapsible: true,
                heightStyle: 'content'
            });
        });
        </script>


accord2.html
------------

        <title>jQuery UI Accordion - Open on hoverintent</title>
          <link rel="stylesheet" href="js/jquery-ui.min.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.min.js"></script>
          
          <script>
          $(function() {
            $( "#accordion" ).accordion({
              event: "click hoverintent"
            });
          });
         
          $.event.special.hoverintent = {
            setup: function() {
              $( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );
            },
            teardown: function() {
              $( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );
            },
            handler: function( event ) {
              var currentX, currentY, timeout,
                args = arguments,
                target = $( event.target ),
                previousX = event.pageX,
                previousY = event.pageY;
         
              function track( event ) {
                currentX = event.pageX;
                currentY = event.pageY;
              };
         
              function clear() {
                target
                  .unbind( "mousemove", track )
                  .unbind( "mouseout", clear );
                clearTimeout( timeout );
              }
         
              function handler() {
                var prop,
                  orig = event;
         
                if ( ( Math.abs( previousX - currentX ) +
                    Math.abs( previousY - currentY ) ) < 7 ) {
                  clear();
         
                  event = $.Event( "hoverintent" );
                  for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                      event[ prop ] = orig[ prop ];
                    }
                  }
                  delete event.originalEvent;
         
                  target.trigger( event );
                } else {
                  previousX = currentX;
                  previousY = currentY;
                  timeout = setTimeout( handler, 100 );
                }
              }
         
              timeout = setTimeout( handler, 100 );
              target.bind({
                mousemove: track,
                mouseout: clear
              });
            }
          };
          </script>
        </head>
        <body>
         
        <div id="accordion">
          <h3>Section 1</h3>
          <div>
            <p>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
            ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
            amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
            odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
            </p>
          </div>
          <h3>Section 2</h3>


Tabs Widget
===========
tabs1.html
-----------

        <!DOCTYPE html> 
        <html> 
            <head> 
                <meta charset="utf-8"> 
                <title>Tabs</title> 
                <link rel="stylesheet" href="js/jquery-ui.min.css">
            </head> 
            <body> 
                <div id="myTabs"> 
                    <ul> 
                        <li><a href="#a">Tab 1</a></li> 
                        <li><a href="#b">Tab 2</a></li> 
                    </ul> 
                    <div id="a">This is the content panel linked to the first tab, it is shown by default.</div> 
                    <div id="b">This content is linked to the second tab and will be shown when its tab is clicked.</div> 
                </div> 
                  <script src="js/jquery.min.js"></script>
                  <script src="js/jquery-ui.min.js"></script>
                <script> 
                    (function($){ 
                        $("#myTabs").tabs(); 
                    })(jQuery); 
                </script> 
            </body> 
        </html>


tabs2.html custom theme
-----------------------
Vertical Tabs functionality

        <title>jQuery UI Tabs - Vertical Tabs functionality</title>
          <link rel="stylesheet" href="js/jquery-ui.min.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.min.js"></script>
          
          <script>
          $(function() {
            $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
            $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
          });
          </script>
          <style>
          .ui-tabs-vertical { width: 55em; }
          .ui-tabs-vertical .ui-tabs-nav { padding: .2em .1em .2em .2em; float: left; width: 12em; }
          .ui-tabs-vertical .ui-tabs-nav li { clear: left; width: 100%; border-bottom-width: 1px !important; border-right-width: 0 !important; margin: 0 -1px .2em 0; }
          .ui-tabs-vertical .ui-tabs-nav li a { display:block; }
          .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active { padding-bottom: 0; padding-right: .1em; border-right-width: 1px; }
          .ui-tabs-vertical .ui-tabs-panel { padding: 1em; float: right; width: 40em;}
          </style>
        </head>
        <body>
         
        <div id="tabs">



Dialog
=======
dialog1.html - login
---------------------

        <script>
        var $create_dialog = $('#logindialog');
        var buttons = [{
                text: 'Quit',
                click: function () {
                    $(this).dialog('close');
                }
            }];
        $create_dialog.dialog({
            dialogClass: 'no-close',
            width: 'auto',
            height: 'auto',
            resizable: false,
            autoOpen: true,
            closeOnEscape: false,
            buttons: buttons,
            dialogClass: 'showLoginDialog',
            close: function (event, ui) {
                $('#logindialog').remove();
            }
        });

        </script>

dialod2.html
-------------

        <script>
        var front = true;
        $(document).ready(function () {
            $('#dialogfront').dialog({
                create: function (event, ui) {
                    $(this).dialog('widget').addClass('frontui').appendTo('.front');
                }
            });
            $('#dialogback').dialog({
                create: function (event, ui) {
                    $(this).dialog('widget').addClass('backui').appendTo('.back');
                }
            });
            var top = 0;
            var left = 0;
            $('body').on('click', '#flip', function (e) {
                e.preventDefault();
                if (front) {
                    top = $('.frontui').css('top');
                    left = $('.frontui').css('left');
                } else {
                    top = $('.backui').css('top');
                    left = $('.backui').css('left');
                }
                $('.flip-container').css({
                    top: top,
                    left: left
                });
                $('.ui-dialog').css({
                    top: 0,
                    left: 0
                });
                front = !front;
                $('.flip-container').toggleClass('flip');
                setTimeout(function () {
                    $('.ui-dialog').css({
                        top: top,
                        left: left
                    });
                    $('.flip-container').css({
                        top: 0,
                        left: 0
                    });
                }, 600);
            });
        });

        </script>



tabs3,html
-----------

          <style>
          #dialog label, #dialog input { display:block; }
          #dialog label { margin-top: 0.5em; }
          #dialog input, #dialog textarea { width: 95%; }
          #tabs { margin-top: 1em; }
          #tabs li .ui-icon-close { float: left; margin: 0.4em 0.2em 0 0; cursor: pointer; }
          #add_tab { cursor: pointer; }
          </style>
          <script>
          $(function() {
            var tabTitle = $( "#tab_title" ),
              tabContent = $( "#tab_content" ),
              tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
              tabCounter = 2;
         
            var tabs = $( "#tabs" ).tabs();
         
            // modal dialog init: custom buttons and a "close" callback resetting the form inside
            var dialog = $( "#dialog" ).dialog({
              autoOpen: false,
              modal: true,
              buttons: {
                Add: function() {
                  addTab();
                  $( this ).dialog( "close" );
                },
                Cancel: function() {
                  $( this ).dialog( "close" );
                }
              },
              close: function() {
                form[ 0 ].reset();
              }
            });
         
            // addTab form: calls addTab function on submit and closes the dialog
            var form = dialog.find( "form" ).submit(function( event ) {
              addTab();
              dialog.dialog( "close" );
              event.preventDefault();
            });
         
            // actual addTab function: adds new tab using the input from the form above
            function addTab() {
              var label = tabTitle.val() || "Tab " + tabCounter,
                id = "tabs-" + tabCounter,
                li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
                tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";
         
              tabs.find( ".ui-tabs-nav" ).append( li );
              tabs.append( "<div id='" + id + "'><p>" + tabContentHtml + "</p></div>" );
              tabs.tabs( "refresh" );
              tabCounter++;
            }
         
            // addTab button: just opens the dialog
            $( "#add_tab" )
              .button()
              .click(function() {
                dialog.dialog( "open" );
              });
         
            // close icon: removing the tab on click
            tabs.delegate( "span.ui-icon-close", "click", function() {
              var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
              $( "#" + panelId ).remove();
              tabs.tabs( "refresh" );
            });
         
            tabs.bind( "keyup", function( event ) {
              if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
                var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
                $( "#" + panelId ).remove();
                tabs.tabs( "refresh" );
              }
            });
          });
          </script>
        </head>
        <body>

        <div id="dialog" title="Tab data">
          <form>
            <fieldset class="ui-helper-reset">
              <label for="tab_title">Title</label>
              <input type="text" name="tab_title" id="tab_title" value="Tab Title" class="ui-widget-content ui-corner-all">
              <label for="tab_content">Content</label>
              <textarea name="tab_content" id="tab_content" class="ui-widget-content ui-corner-all">Tab content</textarea>
            </fieldset>
          </form>
        </div>
         

dialog3.html
-------------

        <script src='js/jquery.ui.dialog-clickoutside.js'></script>
        <script>
        $(document).ready(function () {
            $('#dialog1').dialog({
                autoOpen: false,
                show: {
                    effect: 'fade',
                    duration: 150
                },
                hide: {
                    effect: 'fade',
                    duration: 150
                },
                position: {
                    my: 'center',
                    at: 'center'
                },
                clickOutside: true,
                clickOutsideTrigger: '#opener1'
            });
            $('#dialog2').dialog({
                autoOpen: false,
                show: {
                    effect: 'fade',
                    duration: 150
                },
                hide: {
                    effect: 'fade',
                    duration: 150
                },
                position: {
                    my: 'center',
                    at: 'center'
                },
                clickOutside: true,
                clickOutsideTrigger: '#opener2'
            });
            $('#dialog3').dialog({
                autoOpen: false,
                show: {
                    effect: 'fade',
                    duration: 150
                },
                hide: {
                    effect: 'fade',
                    duration: 150
                },
                position: {
                    my: 'center',
                    at: 'center'
                },
                clickOutside: false
            });
            $('#opener1').click(function () {
                $('#dialog1').dialog('open');
            });
            $('#opener2').click(function () {
                $('#dialog2').dialog('open');
            });
            $('#opener3').click(function () {
                $('#dialog3').dialog('open');
            });
        });
        $.widget('ui.dialog', $.ui.dialog, {
            options: {
                clickOutside: false,
                clickOutsideTrigger: ''
            },
            open: function () {
                var clickOutsideTriggerEl = $(this.options.clickOutsideTrigger);
                var that = this;
                if (this.options.clickOutside) {
                    $(document).on('click.ui.dialogClickOutside' + that.eventNamespace, function (event) {
                        if ($(event.target).closest($(clickOutsideTriggerEl)).length == 0 && $(event.target).closest($(that.uiDialog)).length == 0) {
                            that.close();
                        }
                    });
                }
                this._super();
            },
            close: function () {
                var that = this;
                $(document).off('click.ui.dialogClickOutside' + that.eventNamespace);
                this._super();
            }
        });

        </script>


Datepicker
==========


        <div class="container">
          
          <div id="newEventHolder">
            <span><i class="fa fa-plus"></i> Add New Event</span>
          </div>
          
          <div id="newEventForm">
            <label for="event-date">Event Date</label>
            <input type="text" id="eventDate">
            <label for="event-title">Event Title</label>
            <input type="text" name="event-title" id="eventTitleInput" maxlength="80"/>
            <label for="event-description">Description</label>
            <textarea name="event-descripton" id="eventDescriptionInput">Event Description</textarea>
            <button name="add-event" id="addEvent">Add New Event</button>
            <button name="cancel-add-event" id="cancelAddEvent">Cancel</button>
          </div>
          
          <ul id="upcomingEvents">
            <li id="eventHolder">  
              <div class="event-date-holder">
                <span id="dateNumber">23</span>
                <span id="dateDay">Jan</span>
              </div>
              <div class="event-details-holder">
                <h1>Akron Flea</h1>
                <span id="eventDescription">Lorem ipsum dolar sit amet&hellip;</span>
                  <ul id="editTools">
                     <li><i class="fa fa-pencil-square-o"></i></li>
                     <li><i class="fa fa-bars"></i></li>
                     <li><i class="fa fa-times" id="removeEvent"></i></li>
                  </ul>
              </div>
            </li>

            <li id="eventHolder">
              <div class="event-date-holder">
                <span id="dateNumber">23</span>
                <span id="dateDay">Jan</span>
              </div>
              <div class="event-details-holder">
                <h1>Cleveland Flea</h1>
                <span id="eventDescription">Lorem ipsum dolar sit amet&hellip;</span>
                  <ul id="editTools">
                     <li><i class="fa fa-pencil-square-o"></i></li>
                     <li><i class="fa fa-bars"></i></li>
                     <li><i class="fa fa-times" id="removeEvent"></i></li>
                  </ul>
              </div>
            </li>

            <li id="eventHolder">
              <div class="event-date-holder">
                <span id="dateNumber">23</span>
                <span id="dateDay">Jan</span>
              </div>
              <div class="event-details-holder">
                <h1>Columbus Flea</h1>
                <span id="eventDescription">Lorem ipsum dolar sit amet&hellip;</span>
                  <ul id="editTools">
                     <li><i class="fa fa-pencil-square-o"></i></li>
                     <li><i class="fa fa-bars"></i></li>
                     <li><i class="fa fa-times" id="removeEvent"></i></li>
                  </ul>
              </div>
            <li>
          </ul>
        </div>

        <script src='js/jquery.min.js'></script>
        <script src='js/jquery-ui.min.js'></script>
        <script>
        var newEventHolder = document.getElementById('newEventHolder');
        var eventForm = document.getElementById('newEventForm');
        var eventDate = document.getElementById('eventDate');
        var addEvent = document.getElementById('addEvent');
        var cancel = document.getElementById('cancelAddEvent');
        var upcomingEvents = document.getElementById('upcomingEvents');
        var eventHolder = document.getElementById('eventHolder');
        var removeEvent = document.getElementById('removeEvent');

        $(newEventHolder).click(function () {
            $(eventForm).slideDown(400);
        });
        $(eventDate).datepicker();
        $(cancel).click(function () {
            $(eventForm).slideUp(400);
        });
        $(removeEvent).click(function () {
            $(eventHolder).addClass('hide').stop();
        });

        </script>



Slider Widget
--------------
slider1.html

         <div class="slider">
            <ul>
              <li><img src="images/1.jpg" alt=""></li>
              <li><img src="images/2.jpg" alt=""></li>
              <li><img src="images/3.jpg" alt=""></li>
              <li><img src="images/4.jpg" alt=""></li>
              <li><img src="images/5.jpg" alt=""></li>
              <li><img src="images/6.jpg" alt=""></li>
              <li><img src="images/7.jpg" alt=""></li>
            </ul>
          </div>
          <!-- /.slider -->
          <div class="slider_control"></div>
        </div>
        <!-- /.wrapper -->

        <script src='js/jquery.min.js'></script>
        <script src='js/jquery-ui.min.js'></script>
        <script>
        $(function () {
            $('.slider_control').slider({
                min: 1,
                max: $('.slider li').length,
                step: 1,
                animate: 'fast',
                slide: function (event, ui) {
                    $('.slider li:visible').fadeOut();
                    $('.slider li:nth-child(' + ui.value + ')').fadeIn();
                }
            });
        });

        </script>


Slider2.html
-------------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Slider - Slider scrollbar</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          
          <style>
          .scroll-pane { overflow: auto; width: 99%; float:left; }
          .scroll-content { width: 2440px; float: left; }
          .scroll-content-item { width: 100px; height: 100px; float: left; margin: 10px; font-size: 3em; line-height: 96px; text-align: center; }
          .scroll-bar-wrap { clear: left; padding: 0 4px 0 2px; margin: 0 -1px -1px -1px; }
          .scroll-bar-wrap .ui-slider { background: none; border:0; height: 2em; margin: 0 auto;  }
          .scroll-bar-wrap .ui-handle-helper-parent { position: relative; width: 100%; height: 100%; margin: 0 auto; }
          .scroll-bar-wrap .ui-slider-handle { top:.2em; height: 1.5em; }
          .scroll-bar-wrap .ui-slider-handle .ui-icon { margin: -8px auto 0; position: relative; top: 50%; }
          </style>
          <script>
          $(function() {
            //scrollpane parts
            var scrollPane = $( ".scroll-pane" ),
              scrollContent = $( ".scroll-content" );
         
            //build slider
            var scrollbar = $( ".scroll-bar" ).slider({
              slide: function( event, ui ) {
                if ( scrollContent.width() > scrollPane.width() ) {
                  scrollContent.css( "margin-left", Math.round(
                    ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
                  ) + "px" );
                } else {
                  scrollContent.css( "margin-left", 0 );
                }
              }
            });
         
            //append icon to handle
            var handleHelper = scrollbar.find( ".ui-slider-handle" )
            .mousedown(function() {
              scrollbar.width( handleHelper.width() );
            })
            .mouseup(function() {
              scrollbar.width( "100%" );
            })
            .append( "<span class='ui-icon ui-icon-grip-dotted-vertical'></span>" )
            .wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
         
            //change overflow to hidden now that slider handles the scrolling
            scrollPane.css( "overflow", "hidden" );
         
            //size scrollbar and handle proportionally to scroll distance
            function sizeScrollbar() {
              var remainder = scrollContent.width() - scrollPane.width();
              var proportion = remainder / scrollContent.width();
              var handleSize = scrollPane.width() - ( proportion * scrollPane.width() );
              scrollbar.find( ".ui-slider-handle" ).css({
                width: handleSize,
                "margin-left": -handleSize / 2
              });
              handleHelper.width( "" ).width( scrollbar.width() - handleSize );
            }
         
            //reset slider value based on scroll content position
            function resetValue() {
              var remainder = scrollPane.width() - scrollContent.width();
              var leftVal = scrollContent.css( "margin-left" ) === "auto" ? 0 :
                parseInt( scrollContent.css( "margin-left" ) );
              var percentage = Math.round( leftVal / remainder * 100 );
              scrollbar.slider( "value", percentage );
            }
         
            //if the slider is 100% and window gets larger, reveal content
            function reflowContent() {
                var showing = scrollContent.width() + parseInt( scrollContent.css( "margin-left" ), 10 );
                var gap = scrollPane.width() - showing;
                if ( gap > 0 ) {
                  scrollContent.css( "margin-left", parseInt( scrollContent.css( "margin-left" ), 10 ) + gap );
                }
            }
         
            //change handle position on window resize
            $( window ).resize(function() {
              resetValue();
              sizeScrollbar();
              reflowContent();
            });
            //init scrollbar size
            setTimeout( sizeScrollbar, 10 );//safari wants a timeout
          });
          </script>
        </head>
        <body>
         
        <div class="scroll-pane ui-widget ui-widget-header ui-corner-all">
          <div class="scroll-content">
            <div class="scroll-content-item ui-widget-header">1</div>
            <div class="scroll-content-item ui-widget-header">2</div>
            <div class="scroll-content-item ui-widget-header">3</div>
            <div class="scroll-content-item ui-widget-header">4</div>
            <div class="scroll-content-item ui-widget-header">5</div>
            <div class="scroll-content-item ui-widget-header">6</div>
            <div class="scroll-content-item ui-widget-header">7</div>
            <div class="scroll-content-item ui-widget-header">8</div>
            <div class="scroll-content-item ui-widget-header">9</div>
            <div class="scroll-content-item ui-widget-header">10</div>
            <div class="scroll-content-item ui-widget-header">11</div>
            <div class="scroll-content-item ui-widget-header">12</div>
            <div class="scroll-content-item ui-widget-header">13</div>
            <div class="scroll-content-item ui-widget-header">14</div>
            <div class="scroll-content-item ui-widget-header">15</div>
            <div class="scroll-content-item ui-widget-header">16</div>
            <div class="scroll-content-item ui-widget-header">17</div>
            <div class="scroll-content-item ui-widget-header">18</div>
            <div class="scroll-content-item ui-widget-header">19</div>
            <div class="scroll-content-item ui-widget-header">20</div>
          </div>
          <div class="scroll-bar-wrap ui-widget-content ui-corner-bottom">
            <div class="scroll-bar"></div>
          </div>
        </div>



Button
=======

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Button - Toolbar</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          
          <style>
          #toolbar {
            padding: 4px;
            display: inline-block;
          }
          /* support: IE7 */
          *+html #toolbar {
            display: inline;
          }
          </style>
          <script>
          $(function() {
            $( "#beginning" ).button({
              text: false,
              icons: {
                primary: "ui-icon-seek-start"
              }
            });
            $( "#rewind" ).button({
              text: false,
              icons: {
                primary: "ui-icon-seek-prev"
              }
            });
            $( "#play" ).button({
              text: false,
              icons: {
                primary: "ui-icon-play"
              }
            })
            .click(function() {
              var options;
              if ( $( this ).text() === "play" ) {
                options = {
                  label: "pause",
                  icons: {
                    primary: "ui-icon-pause"
                  }
                };
              } else {
                options = {
                  label: "play",
                  icons: {
                    primary: "ui-icon-play"
                  }
                };
              }
              $( this ).button( "option", options );
            });
            $( "#stop" ).button({
              text: false,
              icons: {
                primary: "ui-icon-stop"
              }
            })
            .click(function() {
              $( "#play" ).button( "option", {
                label: "play",
                icons: {
                  primary: "ui-icon-play"
                }
              });
            });
            $( "#forward" ).button({
              text: false,
              icons: {
                primary: "ui-icon-seek-next"
              }
            });
            $( "#end" ).button({
              text: false,
              icons: {
                primary: "ui-icon-seek-end"
              }
            });
            $( "#shuffle" ).button();
            $( "#repeat" ).buttonset();
          });
          </script>
        </head>
        <body>
         
        <div id="toolbar" class="ui-widget-header ui-corner-all">
          <button id="beginning">go to beginning</button>
          <button id="rewind">rewind</button>
          <button id="play">play</button>
          <button id="stop">stop</button>
          <button id="forward">fast forward</button>
          <button id="end">go to end</button>
         
          <input type="checkbox" id="shuffle"><label for="shuffle">Shuffle</label>
         
          <span id="repeat">
            <input type="radio" id="repeat0" name="repeat" checked="checked"><label for="repeat0">No Repeat</label>
            <input type="radio" id="repeat1" name="repeat"><label for="repeat1">Once</label>
            <input type="radio" id="repeatall" name="repeat"><label for="repeatall">All</label>
          </span>
        </div>




Menu
========
menu1.html
----------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Menu - Default functionality</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script>
          $(function() {
            $( "#menu" ).menu();
          });
          </script>
          <style>
          .ui-menu { width: 150px; }
          </style>
        </head>
        <body>
         
        <ul id="menu">
          <li class="ui-state-disabled">Aberdeen</li>
          <li>Ada</li>
          <li>Adamsville</li>
          <li>Addyston</li>
          <li>Delphi
            <ul>
              <li class="ui-state-disabled">Ada</li>
              <li>Saarland</li>
              <li>Salzburg an der schönen Donau</li>
            </ul>
          </li>
          <li>Saarland</li>
          <li>Salzburg
            <ul>
              <li>Delphi
                <ul>
                  <li>Ada</li>
                  <li>Saarland</li>
                  <li>Salzburg</li>
                </ul>
              </li>
              <li>Delphi
                <ul>
                  <li>Ada</li>
                  <li>Saarland</li>
                  <li>Salzburg</li>
                </ul>
              </li>
              <li>Perch</li>
            </ul>
          </li>
          <li class="ui-state-disabled">Amesville</li>
        </ul>
         
         
        </body>
        </html>


menu2.html
----------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Menu - Categories</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script>
          $(function() {
            $( "#menu" ).menu({
              items: "> :not(.ui-widget-header)"
            });
          });
          </script>
          <style>
          .ui-menu { width: 200px; }
          .ui-widget-header { padding: 0.2em; }
          </style>
        </head>
        <body>
         
        <ul id="menu">
          <li class="ui-widget-header">Category 1</li>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li class="ui-widget-header">Category 2</li>    
          <li>Option 4</li>
          <li>Option 5</li>
          <li>Option 6</li>
        </ul>



menu3.html
-----------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Menu - Icons</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script>
          $(function() {
            $( "#menu" ).menu();
          });
          </script>
          <style>
          .ui-menu { width: 150px; }
          </style>
        </head>
        <body>
         
        <ul id="menu">
          <li><span class="ui-icon ui-icon-disk"></span>Save</li>
          <li><span class="ui-icon ui-icon-zoomin"></span>Zoom In</li>
          <li><span class="ui-icon ui-icon-zoomout"></span>Zoom Out</li>
          <li class="ui-state-disabled"><span class="ui-icon ui-icon-print"></span>Print...</li>
          <li>
            Playback
            <ul>
              <li><span class="ui-icon ui-icon-seek-start"></span>Prev</li>
              <li><span class="ui-icon ui-icon-stop"></span>Stop</li>
              <li><span class="ui-icon ui-icon-play"></span>Play</li>
              <li><span class="ui-icon ui-icon-seek-end"></span>Next</li>
            </ul>
          </li>
          <li>Learn more about this menu</li>
        </ul>



Progressbar
===========

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Progressbar - Download Dialog</title>
           <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script>
          $(function() {
            var progressTimer,
              progressbar = $( "#progressbar" ),
              progressLabel = $( ".progress-label" ),
              dialogButtons = [{
                text: "Cancel Download",
                click: closeDownload
              }],
              dialog = $( "#dialog" ).dialog({
                autoOpen: false,
                closeOnEscape: false,
                resizable: false,
                buttons: dialogButtons,
                open: function() {
                  progressTimer = setTimeout( progress, 2000 );
                },
                beforeClose: function() {
                  downloadButton.button( "option", {
                    disabled: false,
                    label: "Start Download"
                  });
                }
              }),
              downloadButton = $( "#downloadButton" )
                .button()
                .on( "click", function() {
                  $( this ).button( "option", {
                    disabled: true,
                    label: "Downloading..."
                  });
                  dialog.dialog( "open" );
                });
         
            progressbar.progressbar({
              value: false,
              change: function() {
                progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
              },
              complete: function() {
                progressLabel.text( "Complete!" );
                dialog.dialog( "option", "buttons", [{
                  text: "Close",
                  click: closeDownload
                }]);
                $(".ui-dialog button").last().focus();
              }
            });
         
            function progress() {
              var val = progressbar.progressbar( "value" ) || 0;
         
              progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
         
              if ( val <= 99 ) {
                progressTimer = setTimeout( progress, 50 );
              }
            }
         
            function closeDownload() {
              clearTimeout( progressTimer );
              dialog
                .dialog( "option", "buttons", dialogButtons )
                .dialog( "close" );
              progressbar.progressbar( "value", false );
              progressLabel
                .text( "Starting download..." );
              downloadButton.focus();
            }
          });
          </script>
          <style>
          #progressbar {
            margin-top: 20px;
          }
         
          .progress-label {
            font-weight: bold;
            text-shadow: 1px 1px 0 #fff;
          }
         
          .ui-dialog-titlebar-close {
            display: none;
          }
          </style>
        </head>
        <body>
         
        <div id="dialog" title="File Download">
          <div class="progress-label">Starting download...</div>
          <div id="progressbar"></div>
        </div>
        <button id="downloadButton">Start Download</button>



Selectmenu
-----------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>jQuery UI Selectmenu - Product Selection</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>

          <script>
          $(function() {
            var circle = $( "#circle" );
         
            $( "#radius" ).selectmenu({
              change: function( event, data ) {
                circle.css({
                  width: data.item.value,
                  height: data.item.value
                });
              }
             });
         
            $( "#color" ).selectmenu({
               change: function( event, data ) {
                 circle.css( "background", data.item.value );
               }
             });
          });
          </script>
          <style>
            fieldset {
              border: 0;
              margin-left: 300px;
            }
            label {
              display: block;
              margin: 20px 0 0 0;
            }
            select {
              width: 200px;
            }
         
            #circle {
              float: left;
              background: yellow;
              border-radius: 50%;
              width: 150px;
              height: 150px;
            }
          </style>
        </head>
        <body>
         
        <div class="demo">
         
        <form action="#">
         
          <div id="circle"></div>
         
          <fieldset>
            <label for="radius">Circle radius</label>
            <select name="radius" id="radius">
              <option value="50">50px</option>
              <option value="100">100px</option>
              <option value="150" selected="selected">150px</option>
              <option value="200">200px</option>
              <option value="250">250px</option>
            </select>
         
            <label for="color">Circle color</label>
            <select name="color" id="color">
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="yellow" selected="selected">Yellow</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </fieldset>
         
        </form>
         
        </div>



Spinner
========

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Spinner - Currency</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
         
          <script src="js/globalize.js"></script>
          <script src="js/globalize.culture.de-DE.js"></script>
          <script src="js/globalize.culture.ja-JP.js"></script>
          
          
          <script>
          $(function() {
            $( "#currency" ).change(function() {
              $( "#spinner" ).spinner( "option", "culture", $( this ).val() );
            });
         
            $( "#spinner" ).spinner({
              min: 5,
              max: 2500,
              step: 25,
              start: 1000,
              numberFormat: "C"
            });
          });
          </script>
        </head>
        <body>
         
        <p>
          <label for="spinner">Amount to donate:</label>
          <input id="spinner" name="spinner" value="5">
        </p>
         
        <p>
          <label for="currency">Currency to donate</label>
          <select id="currency" name="currency">
            <option value="en-US">US $</option>
            <option value="de-DE">EUR €</option>
            <option value="ja-JP">YEN ¥</option>
          </select>
        </p>



Tooltip
========

            <!doctype html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <title>jQuery UI Tooltip - Forms</title>
               <link rel="stylesheet" href="js/jquery-ui.css">
              <script src="js/jquery.min.js"></script>
              <script src="js/jquery-ui.js"></script>
              <style>
              label {
                display: inline-block; width: 5em;
              }
              fieldset div {
                margin-bottom: 2em;
              }
              fieldset .help {
                display: inline-block;
              }
              .ui-tooltip {
                width: 210px;
              }
              </style>
              <script>
              $(function() {
                var tooltips = $( "[title]" ).tooltip({
                  position: {
                    my: "left top",
                    at: "right+5 top-5"
                  }
                });
                $( "<button>" )
                  .text( "Show help" )
                  .button()
                  .click(function() {
                    tooltips.tooltip( "open" );
                  })
                  .insertAfter( "form" );
              });
              </script>
            </head>
            <body>

            <form>
              <fieldset>
                <div>
                  <label for="firstname">Firstname</label>
                  <input id="firstname" name="firstname" title="Please provide your firstname.">
                </div>
                <div>
                  <label for="lastname">Lastname</label>
                  <input id="lastname" name="lastname" title="Please provide also your lastname.">
                </div>
                <div>
                  <label for="address">Address</label>
                  <input id="address" name="address" title="Your home or work address.">
                </div>
              </fieldset>
            </form>
             
             
            </body>
            </html>




jQuery UI обладает пятью плагинами поведения
=============================================

Resizable
==========

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Resizable - Animate</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <style>
          #resizable { width: 150px; height: 150px; padding: 0.5em; }
          #resizable h3 { text-align: center; margin: 0; }
          .ui-resizable-helper { border: 1px dotted gray; }
          </style>
          <script>
          $(function() {
            $( "#resizable" ).resizable({
              animate: true
            });
          });
          </script>
        </head>
        <body>
         
        <div id="resizable" class="ui-widget-content">
          <h3 class="ui-widget-header">Animate</h3>
        </div>
         
         
        </body>
        </html>



Selectable
==========

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Selectable - Display as grid</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
         
          <style>
          #feedback { font-size: 1.4em; }
          #selectable .ui-selecting { background: #FECA40; }
          #selectable .ui-selected { background: #F39814; color: white; }
          #selectable { list-style-type: none; margin: 0; padding: 0; width: 450px; }
          #selectable li { margin: 3px; padding: 1px; float: left; width: 100px; height: 80px; font-size: 4em; text-align: center; }
          </style>
          <script>
          $(function() {
            $( "#selectable" ).selectable();
          });
          </script>
        </head>
        <body>
         
        <ol id="selectable">
          <li class="ui-state-default">1</li>
          <li class="ui-state-default">2</li>
          <li class="ui-state-default">3</li>
          <li class="ui-state-default">4</li>
          <li class="ui-state-default">5</li>
          <li class="ui-state-default">6</li>
          <li class="ui-state-default">7</li>
          <li class="ui-state-default">8</li>
          <li class="ui-state-default">9</li>
          <li class="ui-state-default">10</li>
          <li class="ui-state-default">11</li>
          <li class="ui-state-default">12</li>
        </ol>




Draggable  Droppable
====================
dd1.html Shopping Cart
----------------------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Droppable - Shopping Cart Demo</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <style>
          h1 { padding: .2em; margin: 0; }
          #products { float:left; width: 500px; margin-right: 2em; }
          #cart { width: 200px; float: left; margin-top: 1em; }
          /* style the list to maximize the droppable hitarea */
          #cart ol { margin: 0; padding: 1em 0 1em 3em; }
          </style>
          <script>
          $(function() {
            $( "#catalog" ).accordion();
            $( "#catalog li" ).draggable({
              appendTo: "body",
              helper: "clone"
            });
            $( "#cart ol" ).droppable({
              activeClass: "ui-state-default",
              hoverClass: "ui-state-hover",
              accept: ":not(.ui-sortable-helper)",
              drop: function( event, ui ) {
                $( this ).find( ".placeholder" ).remove();
                $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
              }
            }).sortable({
              items: "li:not(.placeholder)",
              sort: function() {
                // gets added unintentionally by droppable interacting with sortable
                // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
                $( this ).removeClass( "ui-state-default" );
              }
            });
          });
          </script>
        </head>
        <body>
         
        <div id="products">
          <h1 class="ui-widget-header">Products</h1>
          <div id="catalog">
            <h2><a href="#">T-Shirts</a></h2>
            <div>
              <ul>
                <li>Lolcat Shirt</li>
                <li>Cheezeburger Shirt</li>
                <li>Buckit Shirt</li>
              </ul>
            </div>
            <h2><a href="#">Bags</a></h2>
            <div>
              <ul>
                <li>Zebra Striped</li>
                <li>Black Leather</li>
                <li>Alligator Leather</li>
              </ul>
            </div>
            <h2><a href="#">Gadgets</a></h2>
            <div>
              <ul>
                <li>iPhone</li>
                <li>iPod</li>
                <li>iPad</li>
              </ul>
            </div>
          </div>
        </div>
         
        <div id="cart">
          <h1 class="ui-widget-header">Shopping Cart</h1>
          <div class="ui-widget-content">
            <ol>
              <li class="placeholder">Add your items here</li>
            </ol>
          </div>
        </div>


dd2.html photo manager
----------------------

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Droppable - Simple photo manager</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <style>
          #gallery { float: left; width: 65%; min-height: 12em; }
          .gallery.custom-state-active { background: #eee; }
          .gallery li { float: left; width: 96px; padding: 0.4em; margin: 0 0.4em 0.4em 0; text-align: center; }
          .gallery li h5 { margin: 0 0 0.4em; cursor: move; }
          .gallery li a { float: right; }
          .gallery li a.ui-icon-zoomin { float: left; }
          .gallery li img { width: 100%; cursor: move; }
         
          #trash { float: right; width: 32%; min-height: 18em; padding: 1%; }
          #trash h4 { line-height: 16px; margin: 0 0 0.4em; }
          #trash h4 .ui-icon { float: left; }
          #trash .gallery h5 { display: none; }
          </style>
          <script>
          $(function() {
            // there's the gallery and the trash
            var $gallery = $( "#gallery" ),
              $trash = $( "#trash" );
         
            // let the gallery items be draggable
            $( "li", $gallery ).draggable({
              cancel: "a.ui-icon", // clicking an icon won't initiate dragging
              revert: "invalid", // when not dropped, the item will revert back to its initial position
              containment: "document",
              helper: "clone",
              cursor: "move"
            });
         
            // let the trash be droppable, accepting the gallery items
            $trash.droppable({
              accept: "#gallery > li",
              activeClass: "ui-state-highlight",
              drop: function( event, ui ) {
                deleteImage( ui.draggable );
              }
            });
         
            // let the gallery be droppable as well, accepting items from the trash
            $gallery.droppable({
              accept: "#trash li",
              activeClass: "custom-state-active",
              drop: function( event, ui ) {
                recycleImage( ui.draggable );
              }
            });
         
            // image deletion function
            var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
            function deleteImage( $item ) {
              $item.fadeOut(function() {
                var $list = $( "ul", $trash ).length ?
                  $( "ul", $trash ) :
                  $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
         
                $item.find( "a.ui-icon-trash" ).remove();
                $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
                  $item
                    .animate({ width: "48px" })
                    .find( "img" )
                      .animate({ height: "36px" });
                });
              });
            }
         
            // image recycle function
            var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
            function recycleImage( $item ) {
              $item.fadeOut(function() {
                $item
                  .find( "a.ui-icon-refresh" )
                    .remove()
                  .end()
                  .css( "width", "96px")
                  .append( trash_icon )
                  .find( "img" )
                    .css( "height", "72px" )
                  .end()
                  .appendTo( $gallery )
                  .fadeIn();
              });
            }
         
            // image preview function, demonstrating the ui.dialog used as a modal window
            function viewLargerImage( $link ) {
              var src = $link.attr( "href" ),
                title = $link.siblings( "img" ).attr( "alt" ),
                $modal = $( "img[src$='" + src + "']" );
         
              if ( $modal.length ) {
                $modal.dialog( "open" );
              } else {
                var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
                  .attr( "src", src ).appendTo( "body" );
                setTimeout(function() {
                  img.dialog({
                    title: title,
                    width: 400,
                    modal: true
                  });
                }, 1 );
              }
            }
         
            // resolve the icons behavior with event delegation
            $( "ul.gallery > li" ).click(function( event ) {
              var $item = $( this ),
                $target = $( event.target );
         
              if ( $target.is( "a.ui-icon-trash" ) ) {
                deleteImage( $item );
              } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
                viewLargerImage( $target );
              } else if ( $target.is( "a.ui-icon-refresh" ) ) {
                recycleImage( $item );
              }
         
              return false;
            });
          });
          </script>
        </head>
        <body>
         
        <div class="ui-widget ui-helper-clearfix">
         
        <ul id="gallery" class="gallery ui-helper-reset ui-helper-clearfix">
          <li class="ui-widget-content ui-corner-tr">
            <h5 class="ui-widget-header">High Tatras</h5>
            <img src="images/1.jpg" alt="The peaks of High Tatras" width="96" height="72">
            <a href="images/1.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
            <a href="" title="Delete this image" class="ui-icon ui-icon-trash">Delete image</a>
          </li>
          <li class="ui-widget-content ui-corner-tr">
            <h5 class="ui-widget-header">High Tatras 2</h5>
            <img src="images/2.jpg" alt="The chalet at the Green mountain lake" width="96" height="72">
            <a href="images/2.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
            <a href="" title="Delete this image" class="ui-icon ui-icon-trash">Delete image</a>
          </li>
          <li class="ui-widget-content ui-corner-tr">
            <h5 class="ui-widget-header">High Tatras 3</h5>
            <img src="images/3.jpg" alt="Planning the ascent" width="96" height="72">
            <a href="images/3.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
            <a href="" title="Delete this image" class="ui-icon ui-icon-trash">Delete image</a>
          </li>
          <li class="ui-widget-content ui-corner-tr">
            <h5 class="ui-widget-header">High Tatras 4</h5>
            <img src="images/4.jpg" alt="On top of Kozi kopka" width="96" height="72">
            <a href="images/4.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
            <a href="" title="Delete this image" class="ui-icon ui-icon-trash">Delete image</a>
          </li>
        </ul>
         
        <div id="trash" class="ui-widget-content ui-state-default">
          <h4 class="ui-widget-header"><span class="ui-icon ui-icon-trash">Trash</span> Trash</h4>
        </div>
         
        </div>
         


Sortable
=========

            <!doctype html>
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <title>jQuery UI Sortable - Drop placeholder</title>
                <link rel="stylesheet" href="js/jquery-ui.css">
              <script src="js/jquery.min.js"></script>
              <script src="js/jquery-ui.js"></script>

              <style>
              #sortable { list-style-type: none; margin: 0; padding: 0; width: 60%; }
              #sortable li { margin: 0 5px 5px 5px; padding: 5px; font-size: 1.2em; height: 1.5em; }
              html>body #sortable li { height: 1.5em; line-height: 1.2em; }
              .ui-state-highlight { height: 1.5em; line-height: 1.2em; }
              </style>
              <script>
              $(function() {
                $( "#sortable" ).sortable({
                  placeholder: "ui-state-highlight"
                });
                $( "#sortable" ).disableSelection();
              });
              </script>
            </head>
            <body>
             
            <ul id="sortable">
              <li class="ui-state-default">Item 1</li>
              <li class="ui-state-default">Item 2</li>
              <li class="ui-state-default">Item 3</li>
              <li class="ui-state-default">Item 4</li>
              <li class="ui-state-default">Item 5</li>
              <li class="ui-state-default">Item 6</li>
              <li class="ui-state-default">Item 7</li>
            </ul>


Autocomplete
============

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Autocomplete - Categories</title>
         <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <style>
          .ui-autocomplete-category {
            font-weight: bold;
            padding: .2em .4em;
            margin: .8em 0 .2em;
            line-height: 1.5;
          }
          </style>
          <script>
          $.widget( "custom.catcomplete", $.ui.autocomplete, {
            _create: function() {
              this._super();
              this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
            },
            _renderMenu: function( ul, items ) {
              var that = this,
                currentCategory = "";
              $.each( items, function( index, item ) {
                var li;
                if ( item.category != currentCategory ) {
                  ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                  currentCategory = item.category;
                }
                li = that._renderItemData( ul, item );
                if ( item.category ) {
                  li.attr( "aria-label", item.category + " : " + item.label );
                }
              });
            }
          });
          </script>
          <script>
          $(function() {
            var data = [
              { label: "anders", category: "" },
              { label: "andreas", category: "" },
              { label: "antal", category: "" },
              { label: "annhhx10", category: "Products" },
              { label: "annk K12", category: "Products" },
              { label: "annttop C13", category: "Products" },
              { label: "anders andersson", category: "People" },
              { label: "andreas andersson", category: "People" },
              { label: "andreas johnson", category: "People" }
            ];
         
            $( "#search" ).catcomplete({
              delay: 0,
              source: data
            });
          });
          </script>
        </head>
        <body>
         
        <label for="search">Search: </label>
        <input id="search">



Effects
=========

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Effects - Toggle Demo</title>
          <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <style>
          .toggler {
            width: 500px;
            height: 200px;
          }
          #button {
            padding: .5em 1em;
            text-decoration: none;
          }
          #effect {
            position: relative;
            width: 240px;
            height: 135px;
            padding: 0.4em;
          }
          #effect h3 {
            margin: 0;
            padding: 0.4em;
            text-align: center;
          }
          </style>
          <script>
          $(function() {
            // run the currently selected effect
            function runEffect() {
              // get effect type from
              var selectedEffect = $( "#effectTypes" ).val();
         
              // most effect types need no options passed by default
              var options = {};
              // some effects have required parameters
              if ( selectedEffect === "scale" ) {
                options = { percent: 0 };
              } else if ( selectedEffect === "size" ) {
                options = { to: { width: 200, height: 60 } };
              }
         
              // run the effect
              $( "#effect" ).toggle( selectedEffect, options, 500 );
            };
         
            // set effect from select menu value
            $( "#button" ).click(function() {
              runEffect();
            });
          });
          </script>
        </head>
        <body>
         
        <div class="toggler">
          <div id="effect" class="ui-widget-content ui-corner-all">
            <h3 class="ui-widget-header ui-corner-all">Toggle</h3>
            <p>
              Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede. Nulla lorem metus, adipiscing ut, luctus sed, hendrerit vitae, mi.
            </p>
          </div>
        </div>
         
        <select name="effects" id="effectTypes">
          <option value="blind">Blind</option>
          <option value="bounce">Bounce</option>
          <option value="clip">Clip</option>
          <option value="drop">Drop</option>
          <option value="explode">Explode</option>
          <option value="fold">Fold</option>
          <option value="highlight">Highlight</option>
          <option value="puff">Puff</option>
          <option value="pulsate">Pulsate</option>
          <option value="scale">Scale</option>
          <option value="shake">Shake</option>
          <option value="size">Size</option>
          <option value="slide">Slide</option>
        </select>
         
        <button id="button" class="ui-state-default ui-corner-all">Run Effect</button>
         
         
        </body>
        </html>


Color Animation
================

        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>jQuery UI Effects - Animate demo</title>
            <link rel="stylesheet" href="js/jquery-ui.css">
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-ui.js"></script>

          <style>
            .toggler { width: 500px; height: 200px; position: relative; }
            #button { padding: .5em 1em; text-decoration: none; }
            #effect { width: 240px; height: 135px; padding: 0.4em; position: relative; background: #fff; }
            #effect h3 { margin: 0; padding: 0.4em; text-align: center; }
          </style>
          <script>
          $(function() {
            var state = true;
            $( "#button" ).click(function() {
              if ( state ) {
                $( "#effect" ).animate({
                  backgroundColor: "#aa0000",
                  color: "#fff",
                  width: 500
                }, 1000 );
              } else {
                $( "#effect" ).animate({
                  backgroundColor: "#fff",
                  color: "#000",
                  width: 240
                }, 1000 );
              }
              state = !state;
            });
          });
          </script>
        </head>
        <body>
         
        <div class="toggler">
          <div id="effect" class="ui-widget-content ui-corner-all">
            <h3 class="ui-widget-header ui-corner-all">Animate</h3>
            <p>
              Etiam libero neque, luctus a, eleifend nec, semper at, lorem. Sed pede. Nulla lorem metus, adipiscing ut, luctus sed, hendrerit vitae, mi.
            </p>
          </div>
        </div>
         
        <button id="button" class="ui-state-default ui-corner-all">Toggle Effect</button>
         


SHOP
====



                <!DOCTYPE html>
                <html class=''>
                <head>

                <meta charset='UTF-8'>

                <script src="js/modernizr.js" type="text/javascript"></script>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
                <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700' rel='stylesheet' type='text/css'>
                <link rel='stylesheet prefetch' href='css/reset.css'>
                <link rel='stylesheet prefetch' href='css/jquery-ui.css'>
                <link rel='stylesheet' href='css/admin.css'>
                <style>

                </style></head><body>
                <script type="text/template" id='productListTemplate'>
                  
                  <li id="productHolder">  
                      <div class="product-date-holder">
                        <span id="dateNumber">23</span>
                        <span id="dateDay">Jan</span>
                      </div>
                      <div class="product-details-holder">
                        <h1></h1>
                        <span id="productPrice"></span>
                        <span id="productQuantity"></span>
                          <ul id="editTools">
                             <li><i class="fa fa-pencil-square-o"></i></li>
                             <li><i class="fa fa-bars"></i></li>
                             <li><i class="fa fa-times" id="removeproduct"></i></li>
                          </ul>
                      </div>
                    </li>

                </script>

                <div class="container">
                  
                  <div id="newproductHolder">
                    <span><i class="fa fa-plus"></i> Add New product</span>
                  </div>
                  
                  <div id="newProductForm">
                    <label for="product-date">Date:</label>
                    <input type="text" id="productDate">
                    <label for="product-title">Product Title</label>
                    <input type="text" name="product-title" id="productTitleInput" maxlength="80"/>
                    <label for="product-category">Product Category</label>
                    <input type="text" name="product-category" id="productCategoryInput" maxlength="80"/>
                    <label for="product-price">Product Price</label>
                    <input type="number" name="product-price" id="productPriceInput" value=0 />
                    <label for="product-discont">Product Discont</label>
                    <input type="number" name="product-discont" id="productDiscontInput" value=0 />
                    <label for="product-quantity">Product Quantity</label>
                    <input type="number" name="product-quantity" id="productQuantityInput" value=0 />
                    <label for="product-description">Description</label>
                    <textarea name="product-descripton" id="productDescriptionInput">Product Description</textarea>
                    <button name="add-product" id="addproduct">Add New product</button>
                    <button name="cancel-add-product" id="cancelAddproduct">Cancel</button>
                  </div>
                  
                  <ul id="upcomingproducts">

                    
                  </ul>
                </div>


                <script src='js/jquery.min.js'></script>
                <script src='js/jquery-ui.min.js'></script>
                <script>
                var products = [
                    {
                        "id": 0,
                        "sku": 100001,
                        "date": "03/28/2016",
                        "category": "smartphone",
                        "discont": 30,
                        "price": 1231,
                        "quantity": 30,
                        "impriceUrl": ["/images/1.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"],
                        "name": "Motorola XOOM\u2122 with Wi-Fi",
                        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
                    },
                    {
                        "id": 1,
                        "sku": 100002,
                        "date": "02/28/2016",
                        "category": "smartphone",
                        "discont": 10,
                        "price": 2231,
                        "quantity": 20,
                        "impriceUrl": ["/images/2.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"],
                        "name": "MOTOROLA XOOM\u2122",
                        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
                    },
                    {
                        "id": 2,
                        "sku": 100004,
                        "date": "02/28/2016",
                        "category": "smartphone",
                        "discont": 20,
                        "price": 1131,
                        "quantity": 10,
                        "impriceUrl": ["/images/6.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"],
                        "name": "MOTOROLA\u2122",
                        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
                    }
                    ];

                var newproductHolder = document.getElementById('newproductHolder');
                var productForm = document.getElementById('newProductForm');
                var productDate = document.getElementById('productDate');
                var addproduct = document.getElementById('addproduct');
                var cancel = document.getElementById('cancelAddproduct');
                var upcomingproducts = document.getElementById('upcomingproducts');
                var productHolder = document.getElementById('productHolder');
                var removeproduct = document.getElementById('removeproduct');


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
                               itemId = item['id'];
                                        
                                        $template = $($('#productListTemplate').html());
                                        $template.find('h1').text(itemName);

                                        $template.find('#productPrice').text(itemPrice);
                                        $template.find('#productQuantity').text(itemQuantity);

                                        $list.append($template);
                       });
                       
                   }
                init(products);

                $(newproductHolder).click(function () {
                    $(productForm).slideDown(400);
                });
                $(productDate).datepicker();

                $(cancel).click(function () {
                    $(productForm).slideUp(400);
                });

                </script>

                </body></html>
