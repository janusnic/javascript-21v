# javascript-21v

TABLE
=====
- table.rows — коллекция строк TR таблицы.
- table.caption/tHead/tFoot — ссылки на элементы таблицы CAPTION, THEAD, TFOOT.
- table.tBodies — коллекция элементов таблицы TBODY, по спецификации их может быть несколько.

THEAD/TFOOT/TBODY
-----------------
- tbody.rows — коллекция строк TR секции.
TR
--
- tr.cells — коллекция ячеек TD/TH
- tr.sectionRowIndex — номер строки в текущей секции THEAD/TBODY
- tr.rowIndex — номер строки в таблице
TD/TH
------
- td.cellIndex — номер ячейки в строке
Пример использования:
```
<table>
  <tr>
    <td>один</td> <td>два</td>
  </tr>
  <tr>
    <td>три</td>  <td>четыре</td>
  </tr>
</table>

<script>
var table = document.body.children[0];

alert( table.rows[0].cells[0].innerHTML ) // "один"
</script>
```
tableCreate
-----------
index.html
----------

```
    <div id='table_id1'>
    </div>
    <script type="text/javascript">
        function tableCreate(){
            var table1 = document.getElementById('table_id1'),
                tbl  = document.createElement('table');

            table1.appendChild(tbl);
        }
        tableCreate();
   </script>
```
html
----
```
      <div id="table_id1">
        <table></table>
      </div>
```
tbody
=====
html
----
```
<table><tbody></tbody></table>
```
script
------
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');
        var data_container = document.createElement('tbody');
        tbl.appendChild(data_container);
        table1.appendChild(tbl);
        }
tableCreate();
```
tr
==
html
----
```
<table><tbody><tr></tr></tbody></table>
```
script
------
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');
        var data_container = document.createElement('tbody');
        var curr_tr = document.createElement('tr');
        data_container.appendChild(curr_tr);
        tbl.appendChild(data_container);
        table1.appendChild(tbl);
        }
tableCreate();
```
td
==
html
----
```
<table><tbody><tr><td>Cell</td></tr></tbody></table>
```
script
------
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');
        var data_container = document.createElement('tbody');
        var curr_tr = document.createElement('tr');
        var curr_td = document.createElement('td');
        curr_td.appendChild(document.createTextNode('Cell'));
        curr_tr.appendChild(curr_td);
        data_container.appendChild(curr_tr);
        tbl.appendChild(data_container);
        table1.appendChild(tbl);
        }
tableCreate();
```
Особые ссылки для таблиц
=========================
У конкретных элементов DOM могут быть свои дополнительные ссылки для большего удобства навигации.

Аналогичные полезные свойства есть у таблиц и HTML-форм, они позволяют из формы получить все её элементы, а из них — в свою очередь, форму.

insertRow
=========
html
----
```
<table><tbody><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr></tbody></table>
```
script
------
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');
    var data_container = document.createElement('tbody');

    for(var i = 0; i < 5; i++){
        var curr_tr = tbl.insertRow();
    }
    table1.appendChild(tbl);
    return false;
 }

tableCreate();
```
insertCell
==========
html
----
```
<table><tbody><tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr><tr><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td><td>Cell</td></tr></tbody></table>
```
script
------
```
 function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');
    var data_container = document.createElement('tbody');

    for(var i = 0; i < 5; i++){
        var curr_tr = tbl.insertRow();

        for(var j = 0; j < 5; j++){
            var curr_td = curr_tr.insertCell();
            curr_td.appendChild(document.createTextNode('Cell row'+i+' col'+j));
        }
    }
    table1.appendChild(tbl);
    return false;
 }

tableCreate();
```
createTHead
===========
html
----
```
<table><thead><tr><td>Head Cell0</td><td>Head Cell1</td><td>Head Cell2</td><td>Head Cell3</td><td>Head Cell4</td></tr><tr><td>Cell row0 col0</td><td>Cell row0 col1</td><td>Cell row0 col2</td><td>Cell row0 col3</td><td>Cell row0 col4</td></tr><tr><td>Cell row1 col0</td><td>Cell row1 col1</td><td>Cell row1 col2</td><td>Cell row1 col3</td><td>Cell row1 col4</td></tr><tr><td>Cell row2 col0</td><td>Cell row2 col1</td><td>Cell row2 col2</td><td>Cell row2 col3</td><td>Cell row2 col4</td></tr><tr><td>Cell row3 col0</td><td>Cell row3 col1</td><td>Cell row3 col2</td><td>Cell row3 col3</td><td>Cell row3 col4</td></tr><tr><td>Cell row4 col0</td><td>Cell row4 col1</td><td>Cell row4 col2</td><td>Cell row4 col3</td><td>Cell row4 col4</td></tr></thead></table>
```
script
------
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');
    var data_container = document.createElement('tbody');

    var header = tbl.createTHead();
    var curr_tr = header.insertRow(0);
    for(var j = 0; j < 5; j++){

            var th = curr_tr.insertCell();
            th.appendChild(document.createTextNode('Head Cell'+j));

        }

    for(var i = 0; i < 5; i++){
        curr_tr = tbl.insertRow();

        for(var j = 0; j < 5; j++){
            var curr_td = curr_tr.insertCell();
            curr_td.appendChild(document.createTextNode('Cell row'+i+' col'+j));
        }
    }
    table1.appendChild(tbl);
    return false;
 }

tableCreate();
```
createCaption
=============
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');

    var data_container = document.createElement('tbody');

    var header = tbl.createTHead();
    var curr_tr = header.insertRow(0);
    for(var j = 0; j < 5; j++){

            var th = curr_tr.insertCell();
            th.appendChild(document.createTextNode('Head Cell'+j));

        }

    for(var i = 0; i < 5; i++){
        curr_tr = tbl.insertRow();

        for(var j = 0; j < 5; j++){
            var curr_td = curr_tr.insertCell();
            curr_td.appendChild(document.createTextNode('Cell row'+i+' col'+j));
        }
    }
    var caption = tbl.createCaption();
    caption.innerHTML = "<h3>My table caption</h3>";
    table1.appendChild(tbl);

    return false;
 }

tableCreate();
```
createTFoot
===========
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');

    var data_container = document.createElement('tbody');

    var header = tbl.createTHead();
    var curr_tr = header.insertRow(0);
    for(var j = 0; j < 5; j++){

            var th = curr_tr.insertCell();
            th.appendChild(document.createTextNode('Head Cell'+j));

        }

    for(var i = 0; i < 5; i++){
        curr_tr = tbl.insertRow();

        for(var j = 0; j < 5; j++){
            var curr_td = curr_tr.insertCell();
            curr_td.appendChild(document.createTextNode('Cell row'+i+' col'+j));
        }
    }
    var caption = tbl.createCaption();
    caption.innerHTML = "<h3>My table caption</h3>";

    var footer = tbl.createTFoot();
    var row = footer.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>This is a table footer</b>";
    table1.appendChild(tbl);

    return false;
 }

tableCreate();
```

Атрибуты и DOM-свойства
=======================
При чтении HTML браузер генерирует DOM-модель. При этом большинство стандартных HTML-атрибутов становятся свойствами соответствующих объектов.

Например, если тег выглядит как
```
<div id="menu_body">,
```
то у объекта будет свойство div.id = "menu_body".

Свои DOM-свойства
==================
Узел DOM — это объект, поэтому, как и любой объект в JavaScript, он может содержать пользовательские свойства и методы.

Например, создадим в li новое свойство и запишем в него новую функцию:
```
            if (node.nodeName=="li") {
                  node.onmouseover=function() {
                      this.className+=" over";
                  }

```
пользовательские DOM-свойства:
------------------------------
- Могут иметь любое значение.
- Названия свойств чувствительны к регистру.
- Работают за счет того, что DOM-узлы являются объектами JavaScript.

Классы в виде строки: className
===============================
Атрибуту "class" соответствует свойство className.
--------------------------------------------------
Так как слово "class" является зарезервированным словом в Javascript, то при проектировании DOM решили, что соответствующее свойство будет называться className.

Например:
```
<body class="main page">
  <script>
    // прочитать класс элемента
    alert( document.body.className ); // main page

    // поменять класс элемента
    document.body.className = "class1 class2";
  </script>
</body>
```

script
------
```
function tableCreate(){
    var table1 = document.getElementById('table_id1'),
        tbl  = document.createElement('table');

    var data_container = document.createElement('tbody');

    var header = tbl.createTHead();

    var curr_tr = header.insertRow(0);

    curr_tr.className = 'thead';

    for(var j = 0; j < 5; j++){

            var th = curr_tr.insertCell();
            th.className = 'cellhead';
            th.appendChild(document.createTextNode('Head Cell'+j));
        }

    for(var i = 0; i < 5; i++){
        curr_tr = tbl.insertRow();

        curr_tr.className = (i % 2 === 0 ? 'odd' : 'even');

        for(var j = 0; j < 5; j++){
            var curr_td = curr_tr.insertCell();
            curr_td.appendChild(document.createTextNode('Cell row'+i+' col'+j));
        }
    }
    var caption = tbl.createCaption();
    caption.innerHTML = "<h3>My table caption</h3>";

    var footer = tbl.createTFoot();
    var row = footer.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "<b>This is a table footer</b>";
    table1.appendChild(tbl);

    return false;
 }

tableCreate();
```
html
----
```
<table><caption><h3>My table caption</h3></caption><thead><tr class="thead"><td class="cellhead">Head Cell0</td><td class="cellhead">Head Cell1</td><td class="cellhead">Head Cell2</td><td class="cellhead">Head Cell3</td><td class="cellhead">Head Cell4</td></tr><tr class="odd"><td>Cell row0 col0</td><td>Cell row0 col1</td><td>Cell row0 col2</td><td>Cell row0 col3</td><td>Cell row0 col4</td></tr><tr class="even"><td>Cell row1 col0</td><td>Cell row1 col1</td><td>Cell row1 col2</td><td>Cell row1 col3</td><td>Cell row1 col4</td></tr><tr class="odd"><td>Cell row2 col0</td><td>Cell row2 col1</td><td>Cell row2 col2</td><td>Cell row2 col3</td><td>Cell row2 col4</td></tr><tr class="even"><td>Cell row3 col0</td><td>Cell row3 col1</td><td>Cell row3 col2</td><td>Cell row3 col3</td><td>Cell row3 col4</td></tr><tr class="odd"><td>Cell row4 col0</td><td>Cell row4 col1</td><td>Cell row4 col2</td><td>Cell row4 col3</td><td>Cell row4 col4</td></tr></thead><tfoot><tr><td><b>This is a table footer</b></td></tr></tfoot></table>
```

В вертикальном меню, подменю открывается при клике на него.
-----------------------------------------------------------
```
<script type="text/javascript">
var parent_menu = document.getElementById('menu_body');
var ul = document.createElement('ul');
ul.setAttribute('id', 'ul1');
var li1,  a1, ul1, li2;
var li2 = [], a2 = [];
var smenu;
var jsm;
 var createMenu = function () {
     for (var i = 0; i < 10; i++) {
         li1 = document.createElement('li');
         a1 = document.createElement('a');
         a1.appendChild(document.createTextNode('Menu'+i));
         ul1 = document.createElement('ul');

         for (var j = 0; j < i+1; j++) {

             li2[j] = document.createElement('li');
             a2[j] = document.createElement('a');
             a2[j].appendChild(document.createTextNode('Sub Menu'+j));
             a2[j].setAttribute('href', '#');
             li2[j].appendChild(a2[j]);
             ul1.appendChild(li2[j]);
         }

         a1.setAttribute('href', '#');
         li1.appendChild(a1);

         ul1.setAttribute('id', smenu);
         li1.appendChild(ul1);

         ul.appendChild(li1);
       }
     parent_menu.appendChild(ul);
 };

 window.onload=createMenu;
</script>

```

HTML
----
```
    <li><a href="#">Menu9</a>
        <ul id="sub_menu_9">
            <li><a href="#">Sub Menu0</a></li>
            <li><a href="#">Sub Menu1</a></li>
            <li><a href="#">Sub Menu2</a></li>
            <li><a href="#">Sub Menu3</a></li>
            <li><a href="#">Sub Menu4</a></li>
            <li><a href="#">Sub Menu5</a></li>
            <li><a href="#">Sub Menu6</a></li>
            <li><a href="#">Sub Menu7</a></li>
            <li><a href="#">Sub Menu8</a></li>
            <li><a href="#">Sub Menu9</a></li>
        </ul>
    </li>
```
JavaScript
-----------
```
<script>
 var parent_menu = document.getElementById('menu_body');

 var ul = document.createElement('ul');
 ul.setAttribute('id', 'ul1');


var createMenu = function () {
    for (var i = 0; i < 10; i++) {
        var li1 = document.createElement('li');
        var a1 = document.createElement('a');
        a1.appendChild(document.createTextNode('Menu'+i));
        a1.setAttribute('href', '#');
        li1.appendChild(a1);
        var li2 = [], a2 = [];
        var ul1 = document.createElement('ul');

        for (var j = 0; j < i+1; j++) {

            li2[j] = document.createElement('li');
            a2[j] = document.createElement('a');
            a2[j].appendChild(document.createTextNode('Sub Menu'+j));
            a2[j].setAttribute('href', '#');
            li2[j].appendChild(a2[j]);
            ul1.appendChild(li2[j]);
        }
        smenu = 'sub_menu_';
        smenu += i;
        a1.setAttribute('href', '#');

        i1.appendChild(a1);
        ul1.setAttribute('id', smenu);
        li1.appendChild(ul1);

        ul.appendChild(li1);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;
</script>
```
HTML
```
<li>
    <a href="#" onclick="openMenu('sub_menu_1');return(false)">Menu1</a>
        <ul id="sub_menu_1">
            <li><a href="#">Sub Menu0</a></li>
            <li><a href="#">Sub Menu1</a></li>
        </ul>
</li>

```
js
--
```
var createMenu = function () {
    for (var i = 0; i < 10; i++) {
        li1 = document.createElement('li');
        a1 = document.createElement('a');
        a1.appendChild(document.createTextNode('Menu'+i));

        //var li2 = [], a2 = [];
        ul1 = document.createElement('ul');

        for (var j = 0; j < i+1; j++) {

            li2[j] = document.createElement('li');
            a2[j] = document.createElement('a');
            a2[j].appendChild(document.createTextNode('Sub Menu'+j));
            a2[j].setAttribute('href', '#');
            li2[j].appendChild(a2[j]);
            ul1.appendChild(li2[j]);
        }
        smenu = 'sub_menu_';
        smenu += i;
        a1.setAttribute('href', '#');
        jsm = "openMenu('"+smenu+"');return(false)";

        a1.setAttribute('onclick', jsm);
        li1.appendChild(a1);

        ul1.setAttribute('id', smenu);
        li1.appendChild(ul1);

        ul.appendChild(li1);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;

```
openMenu
--------
```
var id_menu = new Array('sub_menu_0','sub_menu_1','sub_menu_2','sub_menu_3','sub_menu_4','sub_menu_5','sub_menu_6','sub_menu_7','sub_menu_8','sub_menu_9');

function openMenu(id){
    for (i=0; i < id_menu.length; i++){
        if (id != id_menu[i]){
            document.getElementById(id_menu[i]).style.display = "none";
        }
    }
    if (document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display = "none";
    }else{
        document.getElementById(id).style.display = "block";
    }
}

```
Catalog
=====
HTML
------
```
<div id="menu_body">

           <ul id="ul1"><li><a href="#" onclick="openMenu('sub_menu_0');return(false)">Главня</a><ul id="sub_menu_0"></ul></li><li><a href="#" onclick="openMenu('sub_menu_1');return(false)">О компании</a><ul id="sub_menu_1"></ul></li><li><a href="#" onclick="openMenu('sub_menu_2');return(false)">Каталог</a><ul id="sub_menu_2"><li><a href="cat.html">Бытовая техника</a></li><li><a href="cat.html">Телефоны</a></li><li><a href="cat.html">Мобильные устройства</a></li><li><a href="cat.html">Гаджеты</a></li><li><a href="cat.html">Компъютеры</a></li><li><a href="cat.html">Комплектующие</a></li></ul></li><li><a href="#" onclick="openMenu('sub_menu_3');return(false)">Услуги</a><ul id="sub_menu_3"><li><a href="1.html">Ремонт</a></li><li><a href="1.html">Настойка</a></li><li><a href="1.html">Доставка</a></li><li><a href="1.html">Косультации</a></li><li><a href="1.html">Модификация</a></li></ul></li><li><a href="#" onclick="openMenu('sub_menu_4');return(false)">Блог</a><ul id="sub_menu_4"></ul></li><li><a href="#" onclick="openMenu('sub_menu_5');return(false)">Контакты</a><ul id="sub_menu_5"></ul></li></ul>

</div>
```
Javascript
-----------
```
var parent_menu = document.getElementById('menu_body');
var ul = document.createElement('ul');
ul.setAttribute('id', 'ul1');
var li1,  a1, ul1, li2;
var li2 = [], a2 = [];
var smenu;
var jsm;

var id_menu =['sub_menu_0','sub_menu_1','sub_menu_2','sub_menu_3','sub_menu_4','sub_menu_5'];

var menu =[
  ['Главня'],
  [ 'О компании'],
  [ 'Каталог',[
    ['Бытовая техника','cat.html'],
    ['Телефоны','cat.html'],
    ['Мобильные устройства','cat.html'],
    ['Гаджеты','cat.html'],
    ['Компъютеры','cat.html'],
    ['Комплектующие','cat.html'],
    ]
  ],
  [ 'Услуги',[
      ['Ремонт','1.html'],
      ['Настойка','1.html'],
      ['Доставка','1.html'],
      ['Косультации','1.html'],
      ['Модификация','1.html']
    ]
  ],
  [ 'Блог'],
  [ 'Контакты']
];

function openMenu(id){
    for (i=0; i < menu.length; i++){
        if (id != id_menu[i]){
          console.log(id,id_menu[i]);
            document.getElementById(id_menu[i]).style.display = "none";
        }
    }
    if (document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display = "none";
    }else{
        document.getElementById(id).style.display = "block";
    }
}

var createMenu = function () {
    for (var i = 0; i < menu.length; i++) {
        li1 = document.createElement('li');
        a1 = document.createElement('a');
        a1.appendChild(document.createTextNode(''+menu[i][0]+''));

        //var li2 = [], a2 = [];
        ul1 = document.createElement('ul');

        if (menu[i][1]) {

          for (var j = 0; j <menu[i][1].length; j++) {

              li2[j] = document.createElement('li');
              a2[j] = document.createElement('a');
              a2[j].appendChild(document.createTextNode(menu[i][1][j][0]));
              a2[j].setAttribute('href', menu[i][1][j][1]);
              li2[j].appendChild(a2[j]);
              ul1.appendChild(li2[j]);
          }
        }

        smenu = 'sub_menu_';
        smenu += i;
        a1.setAttribute('href', '#');
        jsm = "openMenu('"+smenu+"');return(false)";

        a1.setAttribute('onclick', jsm);
        li1.appendChild(a1);

        ul1.setAttribute('id', smenu);
        li1.appendChild(ul1);

        ul.appendChild(li1);
      }
    parent_menu.appendChild(ul);
};

window.onload=createMenu;

```
