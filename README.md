# javascript-21v unit 18

Выделение: Range, TextRange и Selection
=======================================

Range
-----
Range. – это объект, соответствующий фрагменту документа, который может включать узлы и участки текста из этого документа.

DOM-реализация Range (кроме IE8-)
---------------------------------
Range состоит из двух граничных точек (boundary-points), соответствующих началу и концу области. Позиция любой граничной точки определяется в документе с помощью двух свойств: узел (node) и смещение (offset).

Контейнером (container) называют узел, содержащий граничную точку. Сам контейнер и все его предки называются родительскими контейнерами (ancestor containers) для граничной точки. Родительский контейнер, включающий обе граничные точки, называют корневым контейнером (root container).

Если контейнер является текстовым узлом, то смещение определяется в символах от начала DOM-узла. Если контейнер является элементом (Document, DocumentFragment, Element…), то смещение определяется в дочерних узлах.

Пример Range

Объекты Range создаются с помощью вызова document.createRange(). Объект при этом создается пустой, и граничные точки нужно задать далее его методами setStart и setEnd. 


        <div id="ex2">
          <h2>Соз|даем объект Range</h2>
          <p>От третье|го символа заголовка до десятого символа это абзаца.</p>
        </div>

        <button onclick="alert(domRangeCreate())">
          Создать Range и вывести его текст
        </button>

        <script>
          function domRangeCreate() {
            // Найдем корневой контейнер
            var root = document.getElementById('ex2');
            // Найдем контейнеры граничных точек (в данном случае тестовые)
            var start = root.getElementsByTagName('h2')[0].firstChild;
            var end = root.getElementsByTagName('p')[0].firstChild;
            if (root.createRange) {
              // Создаем Range
              var rng = root.createRange();
              // Задаем верхнюю граничную точку, передав контейнер и смещение
              rng.setStart(start, 3);
              // Аналогично для нижней границы
              rng.setEnd(end, 10);
              // Теперь мы можем вернуть текст, который содержится в полученной области
              return rng.toString();
            } else {
              return 'Вероятно, у вас IE8-, смотрите реализацию TextRange ниже';
            }
          }
        </script>

 
Свойство commonAncestorContainer 
--------------------------------
вернет ссылку на наиболее вложенный корневой контейнер.

Свойство startContainer (endContainer) 
--------------------------------------
вернет ссылку на контейнер верхней (нижней) граничной точки.

Свойство startOffset (endOffset) 
--------------------------------
вернет смещение для верхней (нижней) граничной точки.

Свойство collapsed 
------------------
вернет true, если граничные точки имеют одинаковые контейнеры и смещение (false в противном случае).

Метод setStart (setEnd)
-----------------------
задает контейнер (ссылка на узел) и смещение (целочисленное значение) для соответствующих граничных точек.

Методы setStartBefore, setStartAfter, setEndBefore, setEndAfter 
---------------------------------------------------------------
принимают в качестве единственного аргумента ссылку на узел и устанавливают граничные точки в соот-ии с естественной границей переданного узла. Например:

        <span id="s1">First</span>
        <span id="s2">Second</span>

        var rng = document.createRange();
        // Установит верхнюю граничную точку по левой границе спана #s1
        rng.setStartBefore(document.getElementById('s1'));
        // Установит нижнюю граничную точку по правой границе спана #s2
        rng.setEndAfter(document.getElementById('s2'));

Методы selectNode и selectNodeContents 
--------------------------------------
позволяют создать объект Range по границам узла, ссылку на который они принимают в качестве единственного аргумента. При использовании selectNode передаваемый узел также войдет в Range, в то время как selectNodeContents создаст объект только из содержимого узла

Метод collapse 
--------------
объединяет граничные точки объекта Range. В качестве единственного аргумента принимает булево значение (true – для объединения в верхней точке, false – в нижней). По-умолчанию true.

Метод toString 
--------------
вернет текстовое содержимое объекта Range.

Метод cloneContents 
-------------------
вернет копию содержимого объекта Range в виде фрагмента документа.

Метод cloneRange 
----------------
вернет копию самого объекта Range.

Метод deleteContents 
--------------------
удаляет всё содержимое объекта Range.

Метод detach 
------------
извлекает текущий объект из DOM, так что на него больше нельзя сослаться.

Метод insertNode 
-----------------
принимает в качестве единственного аргумента ссылку на узел (или фрагмент документа) и вставляет его в содержимое объекта Range в начальной точке.

Метод extractContents 
----------------------
вырезает содержимое объекта Range и возвращает ссылку на полученный фрагмент документа.

Метод surroundContents 
----------------------
помещает всё содержимое текущего объекта Range в новый родительский элемент, ссылка на который принимается в качестве единственного аргумента.

Метод compareBoundaryPoints 
---------------------------
используется для сравнения граничных точек.

Найдём в текстовом узле фразу и подсветим её синим фоном.
----------------------------------------------------------
        <div id="ex3">
          Найдем в этом тексте слово "бабуля" и подсветим его синим фоном
        </div>

        <script>
          function domRangeHighlight(text) {
            // Получим текстовый узел
            var root = document.getElementById('ex3').firstChild;
            // и его содержимое
            var content = root.nodeValue;
            // Проверим есть ли совпадения с переданным текстом
            if (~content.indexOf(text)) {
              if (document.createRange) {
                // Если есть совпадение, и браузер поддерживает Range, создаем объект
                var rng = document.createRange();
                // Ставим верхнюю границу по индексу совпадения,
                rng.setStart(root, content.indexOf(text));
                // а нижнюю по индексу + длина текста
                rng.setEnd(root, content.indexOf(text) + text.length);
                // Создаем спан с синим фоном
                var highlightDiv = document.createElement('span');
                highlightDiv.style.backgroundColor = 'blue';
                // Обернем наш Range в спан
                rng.surroundContents(highlightDiv);
              } else {
                alert( 'Вероятно, у вас IE8-' );
              }
            } else {
              alert( 'Совпадений не найдено' );
            }
          }
        </script>


Selection
=========
Получаем пользовательское выделение
-----------------------------------

        function getSelectionText() {
          var txt = '';
          if (txt = window.getSelection) // Не IE, используем метод getSelection
            txt = window.getSelection().toString();
          } else { // IE, используем объект selection
            txt = document.selection.createRange().text;
          }
          return txt;
        }
Все браузеры, кроме IE8- поддерживают метод window.getSelection(), который возвращает объект, схожий с Range. У этого объекта есть точка начала выделения (anchor) и фокусная точка окончания (focus). Точки могут совпадать. 

Свойство anchorNode 
-------------------
вернет контейнер, в котором начинается выделение. началом выделения считается та граница, от которой вы начали выделение. То есть, если вы выделяете справа налево, то началом будет именно правая граница.
Свойство anchorOffset 
---------------------
вернет смещение для начала выделения в пределах контейнера anchorNode.
Свойства focusNode и focusOffset 
--------------------------------
работают аналогично для фокусных точек, то есть точек окончания выделения.
Свойство rangeCount 
-------------------
возвращает число объектов Range, которые входят в полученное выделение. Это свойство полезно при использовании метода addRange.
Метод getRangeAt 
----------------
принимает в качестве аргумента индекс объекта Range и возвращает сам объект. Если rangeCount == 1, то работать будет только getRangeAt(0). Таким образом, мы можем получить объект Range, полностью соответствующий текущему выделению.
Метод collapse 
--------------
сворачивает выделение в точку (каретку). Методу можно передать в качестве первого аргумента узел, в который нужно поместить каретку.
Метод extend 
------------
принимает в качестве аргументов ссылку на контейнер и смещение (parentNode, offset), и перемещает фокусную точку в это положение.
Метод collapseToStart (collapseToEnd) 
-------------------------------------
перемещает фокусную (начальную) границу к начальной (фокусной), тем самым сворачивая выделение в каретку.
Метод selectAllChildren 
-----------------------
принимает в качестве единственного аргумента ссылку на узел и добавляет всех его потомков в выделение.
Метод addRange 
--------------
принимает в качестве аргумента объект Range и добавляет его в выделение. Таким образом можно увеличить количество объектов Range, число которых нам подскажет свойство rangeCount.
Метод removeRange (removeAllRanges) 
-----------------------------------
удаляет переданный (все) объект Range из выделения.
Метод toString 
--------------
вернет текстовое содержимое выделения.
Снятие выделения
================


        function clearSelection() {
          try {
            // современный объект Selection
            window.getSelection().removeAllRanges();
          } catch (e) {
            // для IE8-
            document.selection.empty();
          }
        }

Javascript editor
=================


        <!DOCTYPE html>
        <html>
        <head>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8">
          <title> editor </title>
         
        <script type='text/javascript'>//<![CDATA[
        window.onload=function(){
        document.getElementById('make-bold').addEventListener('click', function(event){
            event.preventDefault();
            
            var selection = window.getSelection();
            var range = selection.getRangeAt(0).cloneRange();
            var tag = document.createElement('strong');
            
            range.surroundContents(tag);
            selection.addRange(range);
        });
        }//]]> 

        </script>
        </head>

        <body>
          <div id="editor" contenteditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

        <br><br>
        <button id="make-bold">Make bold</button>
        </body>
        </html>

Text Editor With jQuery
=======================

            <!DOCTYPE html>
            <html>
            <head>
                <link href="materialize.min.css" rel="stylesheet" async="async"/>
                <link href="style.css" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="utf-8"/>
                <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Ubuntu' type='text/css' media='all'/>
                <script src="jquery.min.js"></script>
                <script src="texteditor.js"></script>
                <title>Simple Text Editor Created Using jQuery</title>
                <style>
                .font-bold.bold {font-weight:bold}
                .italic {font-style:italic}
                .selected .btn {background:orange!important}
                #openpb {margin:15px}
                </style>
            </head>

            <body>

                <div class="site-header">
                    Developer <span class="site-byline">Coding Experiments</span>
                </div>

            <div id="content">
                <h2>Simple Text Editor With jQuery</h2>
                <div class="ze ie">
                    <button type="button" class="btn orange" id='stext'>Text</button>
                    <button type="button" class="btn blue" id='shtml'>HTML</button>
                </div>
                
                <div id="controls" style="margin: 10px;">
                    <a id="bold" style="color:black;display: inline-block;" class="font-bold">
                        <button type="button" class="btn indigo">B</button>
                    </a>
                    <a id="italic" style="color:black !important;display: inline-block;" class="italic">
                        <button type="button" class="btn indigo">I</button> 
                    </a>
                    <a id="link" class="link" style="display: inline-block;">
                        <button type="button" class="btn indigo">Link</button>
                    </a>
                   
                    <select id="fonts" class="btn green" style="display: inline-block;">
                        <option value="Normal">Normal</option>
                        <option value="Arial">Arial</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Monotype Corsiva">Monotype</option>
                        <option value="Tahoma New">Tahoma</option>
                        <option value="Times">Times</option>
                        <option value="Trebuchet New">Trebuchet</option>
                        <option value="Ubuntu">Ubuntu</option>
                    </select>
                </div>

                <iframe frameborder="0" id="textEditor" style="width:500px; height:80px;border:2px solid #CCC;border-radius:20px;overflow:auto;margin: 10px;"></iframe>

                <textarea name="text" id='text' style="border-radius:20px;overflow:auto;display:none;padding-left: 10px;margin: 10px;" rows="6" cols="53"></textarea>

            </div>
            <div class="site-footer"><div>
         </body></html>



            $(document).ready(function(){

             document.getElementById('textEditor').contentWindow.document.designMode="on";
             document.getElementById('textEditor').contentWindow.document.close();
             var edit = document.getElementById("textEditor").contentWindow;

             edit.focus();
             $("#bold").click(function(){
              if($(this).hasClass("selected")){
               $(this).removeClass("selected");
              }else{
               $(this).addClass("selected");
              }
              boldIt();
             });

             $("#italic").click(function(){
              if($(this).hasClass("selected")){
               $(this).removeClass("selected");
              }else{
               $(this).addClass("selected");
              }
              ItalicIt();
             });

             $("#fonts").on('change',function(){
              changeFont($("#fonts").val());
             });

             $("#link").click(function(){
              var urlp=prompt("What is the link:","http://");
              url(urlp);
             }); 

             $("#stext").click(function(){
              $("#text").hide();
              $("#textEditor").show();
              $("#controls").show()
             });

             $("#shtml").on('click',function(){
              $("#text").css("display","block");
              $("#textEditor").hide();
              $("#controls").hide();
             });
            });

            function boldIt(){
             var edit = document.getElementById("textEditor").contentWindow;
             edit.focus();
              edit.document.execCommand("bold", false, "");
              edit.focus();
            }

            function ItalicIt(){
             var edit = document.getElementById("textEditor").contentWindow;
             edit.focus();
             edit.document.execCommand("italic", false, "");
             edit.focus();
            }

            function changeFont(font){
             var edit = document.getElementById("textEditor").contentWindow;
             edit.focus();
             edit.document.execCommand("FontName", false, font);
             edit.focus();
            }

            function url(url){
             var edit = document.getElementById("textEditor").contentWindow;
             edit.focus();
             edit.document.execCommand("Createlink", false, url);
             edit.focus();
            }

            setInterval(function(){
             var gyt=$("#textEditor").contents().find("body").html().match(/@/g);
             if($("#textEditor").contents().find("body").html().match(/@/g)>=0){}else{
              $("#text").val($("#textEditor").contents().find("body").html());
             }
             $("#text").val($("#textEditor").contents().find("body").html());
            },1000);
