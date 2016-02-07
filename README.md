# javascript-21v

JavaScript 
===========
прототипно-ориентированный сценарный язык программирования. Является реализацией языка ECMAScript (стандарт ECMA-262[6]).
JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.
Основные архитектурные черты: 
-----------------------------
динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.
На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java, но при этом лёгким для использования непрограммистами. Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке.
Название «JavaScript» является зарегистрированным товарным знаком компании Oracle Corporation.

В 1992 году компания Nombas (впоследствии приобретённая Openwave) начала разработку встраиваемого скриптового языка Cmm (Си-минус-минус), который, по замыслу разработчиков, должен был стать достаточно мощным, чтобы заменить макросы, сохраняя при этом схожесть с Си, чтобы разработчикам не составляло труда изучить его. Главным отличием от Си была работа с памятью. В новом языке всё управление памятью осуществлялось автоматически: не было необходимости создавать буферы, объявлять переменные, осуществлять преобразование типов. В остальном языки сильно походили друг на друга: в частности, Cmm поддерживал стандартные функции и операторы Си. Cmm был переименован в ScriptEase, поскольку исходное название звучало слишком негативно. На основе этого языка был создан проприетарный продукт CEnvi. В конце ноября 1995 года Nombas разработала версию CEnvi, внедряемую в веб-страницы. Страницы, которые можно было изменять с помощью скриптового языка, получили название Espresso Pages — они демонстрировали использование скриптового языка для создания игры, проверки пользовательского ввода в формы и создания анимации. Espresso Pages позиционировались как демоверсия, призванная помочь представить, что случится, если в браузер будет внедрён язык Cmm. Работали они только в 16-битовом Netscape Navigator под управлением Windows.

JavaScript
-----------
Перед Бренданом Эйхом, нанятым в компанию Netscape 4 апреля 1995 года, была поставлена задача внедрить язык программирования Scheme или что-то похожее в браузер Netscape. Поскольку требования были размыты, Эйха перевели в группу, ответственную за серверные продукты, где он проработал месяц, занимаясь улучшением протокола HTTP. В мае разработчик был переброшен обратно, в команду, занимающуюся клиентской частью (браузером), где он немедленно начал разрабатывать концепцию нового языка программирования. Менеджмент разработки браузера, включая Тома Пакина (Tom Paquin), Михаэля Тоя, Рика Шелла (Rick Schell), был убеждён, что Netscape должен поддерживать язык программирования, встраиваемый в HTML-код страницы.

Помимо Брендана Эйха в разработке участвовали сооснователь Netscape Communications Марк Андрессен и сооснователь Sun Microsystems Билл Джой: чтобы успеть закончить работы над языком к релизу браузера, компании заключили соглашение о сотрудничестве в разработке. Они ставили перед собой цель обеспечить «язык для склеивания» составляющих частей веб-ресурса: изображений, плагинов, Java-апплетов, который был бы удобен для веб-дизайнеров и программистов, не обладающих высокой квалификацией.
Первоначально язык назывался Mocha, затем он был переименован в LiveScript и предназначался как для программирования на стороне клиента, так и для программирования на стороне сервера (там он должен был называться LiveWire). На синтаксис оказали влияние языки Си и Java, и, поскольку Java в то время было модным словом, 4 декабря 1995 года LiveScript переименовали в JavaScript, получив соответствующую лицензию у Sun. Анонс JavaScript со стороны представителей Netscape и Sun состоялся накануне выпуска второй бета-версии Netscape Navigator. В нём декларируется, что 28 лидирующих ИТ-компаний выразили намерение использовать в своих будущих продуктах JavaScript как объектный скриптовый язык с открытым стандартом.
В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.
По инициативе компании Netscape была проведена стандартизация языка ассоциацией ECMA. Стандартизированная версия имеет название ECMAScript, описывается стандартом ECMA-262. Первой версии спецификации соответствовал JavaScript версии 1.1, а также языки JScript и ScriptEasy.

JavaScript является самым популярным языком программирования, используемым для разработки веб-приложений на стороне клиента.

JavaScript является объектно-ориентированным языком, но используемое в языке прототипирование обуславливает отличия в работе с объектами по сравнению с традиционными класс-ориентированными языками. Кроме того, JavaScript имеет ряд свойств, присущих функциональным языкам — функции как объекты первого класса, объекты как списки, карринг, анонимные функции, замыкания — что придаёт языку дополнительную гибкость.
Несмотря на схожий с Си синтаксис, JavaScript по сравнению с языком Си имеет коренные отличия:
- объекты, с возможностью интроспекции;
- функции как объекты первого класса;
- автоматическое приведение типов;
- автоматическая сборка мусора;
- анонимные функции.
В языке отсутствуют:
- модульная система: JavaScript не предоставляет возможности управлять зависимостями и изоляцией областей видимости;
- стандартная библиотека: в частности, отсутствует интерфейс программирования приложений по работе с файловой системой, управлению потоками ввода-вывода, базовых типов для бинарных данных;
- стандартные интерфейсы к веб-серверам и базам данных;
- система управления пакетами, которая бы отслеживала зависимости и автоматически устанавливала их.
Семантика и синтаксис
----------------------
Синтаксис языка JavaScript во многом напоминает синтаксис Си и Java, семантически же язык гораздо ближе к Self, Smalltalk или даже Лиспу.
В JavaScript:
-------------
- все идентификаторы регистрозависимы,
- в названиях переменных можно использовать буквы, подчёркивание, символ доллара, арабские цифры,
названия переменных не могут начинаться с цифры,
- для оформления однострочных комментариев используются //, многострочные и внутристрочные комментарии начинаются с /* и заканчиваются */.

Структура языка
----------------
Структурно JavaScript можно представить в виде объединения трёх чётко различимых друг от друга частей:
- ядро (ECMAScript),
- объектная модель браузера (Browser Object Model или BOM (en)),
- объектная модель документа (Document Object Model или DOM).
Если рассматривать JavaScript в отличных от браузера окружениях, то объектная модель браузера и объектная модель документа могут не поддерживаться.
Объектную модель документа иногда рассматривают как отдельную от JavaScript сущность, что согласуется с определением DOM как независимого от языка интерфейса документа. 
Ядро
-----
ECMAScript не является браузерным языком и в нём не определяются методы ввода и вывода информации. Это основа для построения скриптовых языков. Спецификация ECMAScript описывает типы данных, инструкции, ключевые и зарезервированные слова, операторы, объекты, регулярные выражения, не ограничивая авторов производных языков в расширении их новыми составляющими.
Объектная модель браузера
--------------------------
Объектная модель браузера — браузер-специфичная часть языка, являющаяся прослойкой между ядром и объектной моделью документа. Основное предназначение объектной модели браузера — управление окнами браузера и обеспечение их взаимодействия. Каждое из окон браузера представляется объектом window, центральным объектом DOM. Объектная модель браузера на данный момент не стандартизирована, однако спецификация находится в разработке WHATWG и W3C.
Помимо управления окнами, в рамках объектной модели браузера, браузерами обычно обеспечивается поддержка следующих сущностей:
- управление фреймами,
- поддержка задержки в исполнении кода и зацикливания с задержкой,
- системные диалоги,
- управление адресом открытой страницы,
- управление информацией о браузере,
- управление информацией о параметрах монитора,
- ограниченное управление историей просмотра страниц,
- поддержка работы с HTTP cookie.
Объектная модель документа
---------------------------
Объектная модель документа — интерфейс программирования приложений для HTML и XML-документов. Согласно DOM, документ (например, веб-страница) может быть представлен в виде дерева объектов, обладающих рядом свойств, которые позволяют производить с ним различные манипуляции:
- генерация и добавление узлов,
- получение узлов,
- изменение узлов,
- изменение связей между узлами,
- удаление узлов.

index.html
```
    <html>
        <head>
            
        </head>
        <body>
        </body>
    </html>

html {
    display: block;
}

```
Property
=========
html
----
```
accessKey: ""
attributes: NamedNodeMap
baseURI: "file:///home/janus/github/javascript-21v/unit_01/index.html"
childElementCount: 2
childNodes: NodeList[2]
children: HTMLCollection[2]
classList: DOMTokenList[0]
className: ""
clientHeight: 1207
clientLeft: 0
clientTop: 0
clientWidth: 1645
contentEditable: "inherit"
dataset: DOMStringMap
dir: ""
draggable: false
firstChild: head
firstElementChild: head
hidden: false
id: ""
innerHTML: "<head></head><body></body>"
innerText: ""
isContentEditable: false
lang: ""
lastChild: body
lastElementChild: body
localName: "html"
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: null
nextSibling: null
nodeName: "HTML"
nodeType: 1
nodeValue: null
offsetHeight: 1207
offsetLeft: 0
offsetParent: null
offsetTop: 0
offsetWidth: 1645
onabort: null
onautocomplete: null
onautocompleteerror: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextmenu: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onseeked: null
onseeking: null
onselect: null
onselectstart: null
onshow: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
onvolumechange: null
onwaiting: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwheel: null
outerHTML: "<html><head></head><body></body></html>"
outerText: ""
ownerDocument: document
parentElement: null
parentNode: document
prefix: null
previousElementSibling: null
previousSibling: null
scrollHeight: 1207
scrollLeft: 0
scrollTop: 0
scrollWidth: 1645
shadowRoot: null
spellcheck: true
style: CSSStyleDeclaration
tabIndex: -1
tagName: "HTML"
textContent: ""
title: ""
translate: true
version: ""
webkitdropzone: ""
__proto__: HTMLHtmlElement
```
style
------
```
style: CSSStyleDeclaration
alignContent: ""
alignItems: ""
alignSelf: ""
alignmentBaseline: ""
all: ""
animation: ""
animationDelay: ""
animationDirection: ""
animationDuration: ""
animationFillMode: ""
animationIterationCount: ""
animationName: ""
animationPlayState: ""
animationTimingFunction: ""
backfaceVisibility: ""
background: ""
backgroundAttachment: ""
backgroundBlendMode: ""
backgroundClip: ""
backgroundColor: ""
backgroundImage: ""
backgroundOrigin: ""
backgroundPosition: ""
backgroundPositionX: ""
backgroundPositionY: ""
backgroundRepeat: ""
backgroundRepeatX: ""
backgroundRepeatY: ""
backgroundSize: ""
baselineShift: ""
border: ""
borderBottom: ""
borderBottomColor: ""
borderBottomLeftRadius: ""
borderBottomRightRadius: ""
borderBottomStyle: ""
borderBottomWidth: ""
borderCollapse: ""
borderColor: ""
borderImage: ""
borderImageOutset: ""
borderImageRepeat: ""
borderImageSlice: ""
borderImageSource: ""
borderImageWidth: ""
borderLeft: ""
borderLeftColor: ""
borderLeftStyle: ""
borderLeftWidth: ""
borderRadius: ""
borderRight: ""
borderRightColor: ""
borderRightStyle: ""
borderRightWidth: ""
borderSpacing: ""
borderStyle: ""
borderTop: ""
borderTopColor: ""
borderTopLeftRadius: ""
borderTopRightRadius: ""
borderTopStyle: ""
borderTopWidth: ""
borderWidth: ""
bottom: ""
boxShadow: ""
boxSizing: ""
bufferedRendering: ""
captionSide: ""
clear: ""
clip: ""
clipPath: ""
clipRule: ""
color: ""
colorInterpolation: ""
colorInterpolationFilters: ""
colorRendering: ""
content: ""
counterIncrement: ""
counterReset: ""
cssFloat: ""
cssText: ""
cursor: ""
cx: ""
cy: ""
direction: ""
display: ""
dominantBaseline: ""
emptyCells: ""
fill: ""
fillOpacity: ""
fillRule: ""
filter: ""
flex: ""
flexBasis: ""
flexDirection: ""
flexFlow: ""
flexGrow: ""
flexShrink: ""
flexWrap: ""
float: ""
floodColor: ""
floodOpacity: ""
font: ""
fontFamily: ""
fontFeatureSettings: ""
fontKerning: ""
fontSize: ""
fontStretch: ""
fontStyle: ""
fontVariant: ""
fontVariantLigatures: ""
fontWeight: ""
height: ""
imageRendering: ""
isolation: ""
justifyContent: ""
left: ""
length: 0
letterSpacing: ""
lightingColor: ""
lineHeight: ""
listStyle: ""
listStyleImage: ""
listStylePosition: ""
listStyleType: ""
margin: ""
marginBottom: ""
marginLeft: ""
marginRight: ""
marginTop: ""
marker: ""
markerEnd: ""
markerMid: ""
markerStart: ""
mask: ""
maskType: ""
maxHeight: ""
maxWidth: ""
maxZoom: ""
minHeight: ""
minWidth: ""
minZoom: ""
mixBlendMode: ""
motion: ""
motionOffset: ""
motionPath: ""
motionRotation: ""
objectFit: ""
objectPosition: ""
opacity: ""
order: ""
orientation: ""
orphans: ""
outline: ""
outlineColor: ""
outlineOffset: ""
outlineStyle: ""
outlineWidth: ""
overflow: ""
overflowWrap: ""
overflowX: ""
overflowY: ""
padding: ""
paddingBottom: ""
paddingLeft: ""
paddingRight: ""
paddingTop: ""
page: ""
pageBreakAfter: ""
pageBreakBefore: ""
pageBreakInside: ""
paintOrder: ""
parentRule: null
perspective: ""
perspectiveOrigin: ""
pointerEvents: ""
position: ""
quotes: ""
r: ""
resize: ""
right: ""
rx: ""
ry: ""
shapeImageThreshold: ""
shapeMargin: ""
shapeOutside: ""
shapeRendering: ""
size: ""
speak: ""
src: ""
stopColor: ""
stopOpacity: ""
stroke: ""
strokeDasharray: ""
strokeDashoffset: ""
strokeLinecap: ""
strokeLinejoin: ""
strokeMiterlimit: ""
strokeOpacity: ""
strokeWidth: ""
tabSize: ""
tableLayout: ""
textAlign: ""
textAlignLast: ""
textAnchor: ""
textCombineUpright: ""
textDecoration: ""
textIndent: ""
textOrientation: ""
textOverflow: ""
textRendering: ""
textShadow: ""
textTransform: ""
top: ""
touchAction: ""
transform: ""
transformOrigin: ""
transformStyle: ""
transition: ""
transitionDelay: ""
transitionDuration: ""
transitionProperty: ""
transitionTimingFunction: ""
unicodeBidi: ""
unicodeRange: ""
userZoom: ""
vectorEffect: ""
verticalAlign: ""
visibility: ""
webkitAppRegion: ""
webkitAppearance: ""
webkitBackgroundClip: ""
webkitBackgroundComposite: ""
webkitBackgroundOrigin: ""
webkitBorderAfter: ""
webkitBorderAfterColor: ""
webkitBorderAfterStyle: ""
webkitBorderAfterWidth: ""
webkitBorderBefore: ""
webkitBorderBeforeColor: ""
webkitBorderBeforeStyle: ""
webkitBorderBeforeWidth: ""
webkitBorderEnd: ""
webkitBorderEndColor: ""
webkitBorderEndStyle: ""
webkitBorderEndWidth: ""
webkitBorderHorizontalSpacing: ""
webkitBorderImage: ""
webkitBorderStart: ""
webkitBorderStartColor: ""
webkitBorderStartStyle: ""
webkitBorderStartWidth: ""
webkitBorderVerticalSpacing: ""
webkitBoxAlign: ""
webkitBoxDecorationBreak: ""
webkitBoxDirection: ""
webkitBoxFlex: ""
webkitBoxFlexGroup: ""
webkitBoxLines: ""
webkitBoxOrdinalGroup: ""
webkitBoxOrient: ""
webkitBoxPack: ""
webkitBoxReflect: ""
webkitClipPath: ""
webkitColumnBreakAfter: ""
webkitColumnBreakBefore: ""
webkitColumnBreakInside: ""
webkitColumnCount: ""
webkitColumnGap: ""
webkitColumnRule: ""
webkitColumnRuleColor: ""
webkitColumnRuleStyle: ""
webkitColumnRuleWidth: ""
webkitColumnSpan: ""
webkitColumnWidth: ""
webkitColumns: ""
webkitFilter: ""
webkitFontSizeDelta: ""
webkitFontSmoothing: ""
webkitHighlight: ""
webkitHyphenateCharacter: ""
webkitLineBreak: ""
webkitLineClamp: ""
webkitLocale: ""
webkitLogicalHeight: ""
webkitLogicalWidth: ""
webkitMarginAfter: ""
webkitMarginAfterCollapse: ""
webkitMarginBefore: ""
webkitMarginBeforeCollapse: ""
webkitMarginBottomCollapse: ""
webkitMarginCollapse: ""
webkitMarginEnd: ""
webkitMarginStart: ""
webkitMarginTopCollapse: ""
webkitMask: ""
webkitMaskBoxImage: ""
webkitMaskBoxImageOutset: ""
webkitMaskBoxImageRepeat: ""
webkitMaskBoxImageSlice: ""
webkitMaskBoxImageSource: ""
webkitMaskBoxImageWidth: ""
webkitMaskClip: ""
webkitMaskComposite: ""
webkitMaskImage: ""
webkitMaskOrigin: ""
webkitMaskPosition: ""
webkitMaskPositionX: ""
webkitMaskPositionY: ""
webkitMaskRepeat: ""
webkitMaskRepeatX: ""
webkitMaskRepeatY: ""
webkitMaskSize: ""
webkitMaxLogicalHeight: ""
webkitMaxLogicalWidth: ""
webkitMinLogicalHeight: ""
webkitMinLogicalWidth: ""
webkitPaddingAfter: ""
webkitPaddingBefore: ""
webkitPaddingEnd: ""
webkitPaddingStart: ""
webkitPerspectiveOriginX: ""
webkitPerspectiveOriginY: ""
webkitPrintColorAdjust: ""
webkitRtlOrdering: ""
webkitRubyPosition: ""
webkitTapHighlightColor: ""
webkitTextCombine: ""
webkitTextDecorationsInEffect: ""
webkitTextEmphasis: ""
webkitTextEmphasisColor: ""
webkitTextEmphasisPosition: ""
webkitTextEmphasisStyle: ""
webkitTextFillColor: ""
webkitTextOrientation: ""
webkitTextSecurity: ""
webkitTextStroke: ""
webkitTextStrokeColor: ""
webkitTextStrokeWidth: ""
webkitTransformOriginX: ""
webkitTransformOriginY: ""
webkitTransformOriginZ: ""
webkitUserDrag: ""
webkitUserModify: ""
webkitUserSelect: ""
webkitWritingMode: ""
whiteSpace: ""
widows: ""
width: ""
willChange: ""
wordBreak: ""
wordSpacing: ""
wordWrap: ""
writingMode: ""
x: ""
y: ""
zIndex: ""
zoom: ""
```
HTMLHtmlElement
===============
```
accessKey: (...)
attributes: (...)
baseURI: (...)
childElementCount: (...)
childNodes: (...)
children: (...)
classList: (...)
className: (...)
clientHeight: (...)
clientLeft: (...)
clientTop: (...)
clientWidth: (...)
constructor: HTMLHtmlElement()
contentEditable: (...)
dataset: (...)
dir: (...)
draggable: (...)
firstChild: (...)
firstElementChild: (...)
hidden: (...)
id: (...)
innerHTML: (...)
innerText: (...)
isContentEditable: (...)
lang: (...)
lastChild: (...)
lastElementChild: (...)
localName: (...)
namespaceURI: (...)
nextElementSibling: (...)
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
offsetHeight: (...)
offsetLeft: (...)
offsetParent: (...)
offsetTop: (...)
offsetWidth: (...)
onabort: (...)
onautocomplete: (...)
onautocompleteerror: (...)
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onblur: (...)
oncancel: (...)
oncanplay: (...)
oncanplaythrough: (...)
onchange: (...)
onclick: (...)
onclose: (...)
oncontextmenu: (...)
oncopy: (...)
oncuechange: (...)
oncut: (...)
ondblclick: (...)
ondrag: (...)
ondragend: (...)
ondragenter: (...)
ondragleave: (...)
ondragover: (...)
ondragstart: (...)
ondrop: (...)
ondurationchange: (...)
onemptied: (...)
onended: (...)
onerror: (...)
onfocus: (...)
oninput: (...)
oninvalid: (...)
onkeydown: (...)
onkeypress: (...)
onkeyup: (...)
onload: (...)
onloadeddata: (...)
onloadedmetadata: (...)
onloadstart: (...)
onmousedown: (...)
onmouseenter: (...)
onmouseleave: (...)
onmousemove: (...)
onmouseout: (...)
onmouseover: (...)
onmouseup: (...)
onmousewheel: (...)
onpaste: (...)
onpause: (...)
onplay: (...)
onplaying: (...)
onprogress: (...)
onratechange: (...)
onreset: (...)
onresize: (...)
onscroll: (...)
onsearch: (...)
onseeked: (...)
onseeking: (...)
onselect: (...)
onselectstart: (...)
onshow: (...)
onstalled: (...)
onsubmit: (...)
onsuspend: (...)
ontimeupdate: (...)
ontoggle: (...)
onvolumechange: (...)
onwaiting: (...)
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
onwheel: (...)
outerHTML: (...)
outerText: (...)
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
prefix: (...)
previousElementSibling: (...)
previousSibling: (...)
scrollHeight: (...)
scrollLeft: (...)
scrollTop: (...)
scrollWidth: (...)
shadowRoot: (...)
spellcheck: (...)
style: (...)
tabIndex: (...)
tagName: (...)
textContent: (...)
title: (...)
translate: (...)
version: (...)
get version: ()
set version: ()
webkitdropzone: (...)
__proto__: HTMLElement
```
HTMLElement
===========
```
accessKey: (...)
get accessKey: ()
set accessKey: ()
attributes: (...)
baseURI: (...)
blur: blur()
childElementCount: (...)
childNodes: (...)
children: (...)
classList: (...)
className: (...)
click: click()
clientHeight: (...)
clientLeft: (...)
clientTop: (...)
clientWidth: (...)
constructor: HTMLElement()
contentEditable: (...)
get contentEditable: ()
set contentEditable: ()
dataset: (...)
get dataset: ()
dir: (...)
get dir: ()
set dir: ()
draggable: (...)
get draggable: ()
set draggable: ()
firstChild: (...)
firstElementChild: (...)
focus: focus()
hidden: (...)
get hidden: ()
set hidden: ()
id: (...)
innerHTML: (...)
innerText: (...)
get innerText: ()
set innerText: ()
isContentEditable: (...)
get isContentEditable: ()
lang: (...)
get lang: ()
set lang: ()
lastChild: (...)
lastElementChild: (...)
localName: (...)
namespaceURI: (...)
nextElementSibling: (...)
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
offsetHeight: (...)
get offsetHeight: ()
offsetLeft: (...)
get offsetLeft: ()
offsetParent: (...)
get offsetParent: ()
offsetTop: (...)
get offsetTop: ()
offsetWidth: (...)
get offsetWidth: ()
onabort: (...)
get onabort: ()
set onabort: ()
onautocomplete: (...)
get onautocomplete: ()
set onautocomplete: ()
onautocompleteerror: (...)
get onautocompleteerror: ()
set onautocompleteerror: ()
onbeforecopy: (...)
onbeforecut: (...)
onbeforepaste: (...)
onblur: (...)
get onblur: ()
set onblur: ()
oncancel: (...)
get oncancel: ()
set oncancel: ()
oncanplay: (...)
get oncanplay: ()
set oncanplay: ()
oncanplaythrough: (...)
get oncanplaythrough: ()
set oncanplaythrough: ()
onchange: (...)
get onchange: ()
set onchange: ()
onclick: (...)
get onclick: ()
set onclick: ()
onclose: (...)
get onclose: ()
set onclose: ()
oncontextmenu: (...)
get oncontextmenu: ()
set oncontextmenu: ()
oncopy: (...)
oncuechange: (...)
get oncuechange: ()
set oncuechange: ()
oncut: (...)
ondblclick: (...)
get ondblclick: ()
set ondblclick: ()
ondrag: (...)
get ondrag: ()
set ondrag: ()
ondragend: (...)
get ondragend: ()
set ondragend: ()
ondragenter: (...)
get ondragenter: ()
set ondragenter: ()
ondragleave: (...)
get ondragleave: ()
set ondragleave: ()
ondragover: (...)
get ondragover: ()
set ondragover: ()
ondragstart: (...)
get ondragstart: ()
set ondragstart: ()
ondrop: (...)
get ondrop: ()
set ondrop: ()
ondurationchange: (...)
get ondurationchange: ()
set ondurationchange: ()
onemptied: (...)
get onemptied: ()
set onemptied: ()
onended: (...)
get onended: ()
set onended: ()
onerror: (...)
get onerror: ()
set onerror: ()
onfocus: (...)
get onfocus: ()
set onfocus: ()
oninput: (...)
get oninput: ()
set oninput: ()
oninvalid: (...)
get oninvalid: ()
set oninvalid: ()
onkeydown: (...)
get onkeydown: ()
set onkeydown: ()
onkeypress: (...)
get onkeypress: ()
set onkeypress: ()
onkeyup: (...)
get onkeyup: ()
set onkeyup: ()
onload: (...)
get onload: ()
set onload: ()
onloadeddata: (...)
get onloadeddata: ()
set onloadeddata: ()
onloadedmetadata: (...)
get onloadedmetadata: ()
set onloadedmetadata: ()
onloadstart: (...)
get onloadstart: ()
set onloadstart: ()
onmousedown: (...)
get onmousedown: ()
set onmousedown: ()
onmouseenter: (...)
get onmouseenter: ()
set onmouseenter: ()
onmouseleave: (...)
get onmouseleave: ()
set onmouseleave: ()
onmousemove: (...)
get onmousemove: ()
set onmousemove: ()
onmouseout: (...)
get onmouseout: ()
set onmouseout: ()
onmouseover: (...)
get onmouseover: ()
set onmouseover: ()
onmouseup: (...)
get onmouseup: ()
set onmouseup: ()
onmousewheel: (...)
get onmousewheel: ()
set onmousewheel: ()
onpaste: (...)
onpause: (...)
get onpause: ()
set onpause: ()
onplay: (...)
get onplay: ()
set onplay: ()
onplaying: (...)
get onplaying: ()
set onplaying: ()
onprogress: (...)
get onprogress: ()
set onprogress: ()
onratechange: (...)
get onratechange: ()
set onratechange: ()
onreset: (...)
get onreset: ()
set onreset: ()
onresize: (...)
get onresize: ()
set onresize: ()
onscroll: (...)
get onscroll: ()
set onscroll: ()
onsearch: (...)
onseeked: (...)
get onseeked: ()
set onseeked: ()
onseeking: (...)
get onseeking: ()
set onseeking: ()
onselect: (...)
get onselect: ()
set onselect: ()
onselectstart: (...)
onshow: (...)
get onshow: ()
set onshow: ()
onstalled: (...)
get onstalled: ()
set onstalled: ()
onsubmit: (...)
get onsubmit: ()
set onsubmit: ()
onsuspend: (...)
get onsuspend: ()
set onsuspend: ()
ontimeupdate: (...)
get ontimeupdate: ()
set ontimeupdate: ()
ontoggle: (...)
get ontoggle: ()
set ontoggle: ()
onvolumechange: (...)
get onvolumechange: ()
set onvolumechange: ()
onwaiting: (...)
get onwaiting: ()
set onwaiting: ()
onwebkitfullscreenchange: (...)
onwebkitfullscreenerror: (...)
onwheel: (...)
outerHTML: (...)
outerText: (...)
get outerText: ()
set outerText: ()
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
prefix: (...)
previousElementSibling: (...)
previousSibling: (...)
scrollHeight: (...)
scrollLeft: (...)
scrollTop: (...)
scrollWidth: (...)
shadowRoot: (...)
spellcheck: (...)
get spellcheck: ()
set spellcheck: ()
style: (...)
get style: ()
set style: ()
tabIndex: (...)
get tabIndex: ()
set tabIndex: ()
tagName: (...)
textContent: (...)
title: (...)
get title: ()
set title: ()
translate: (...)
get translate: ()
set translate: ()
webkitdropzone: (...)
get webkitdropzone: ()
set webkitdropzone: ()
__proto__: Element

```
Element
=========
```
animate: animate()
attributes: (...)
get attributes: ()
baseURI: (...)
childElementCount: (...)
get childElementCount: ()
childNodes: (...)
children: (...)
get children: ()
classList: (...)
get classList: ()
className: (...)
get className: ()
set className: ()
clientHeight: (...)
get clientHeight: ()
clientLeft: (...)
get clientLeft: ()
clientTop: (...)
get clientTop: ()
clientWidth: (...)
get clientWidth: ()
closest: closest()
constructor: Element()
createShadowRoot: createShadowRoot()
firstChild: (...)
firstElementChild: (...)
get firstElementChild: ()
getAttribute: getAttribute()
getAttributeNS: getAttributeNS()
getAttributeNode: getAttributeNode()
getAttributeNodeNS: getAttributeNodeNS()
getBoundingClientRect: getBoundingClientRect()
getClientRects: getClientRects()
getDestinationInsertionPoints: getDestinationInsertionPoints()
getElementsByClassName: getElementsByClassName()
getElementsByTagName: getElementsByTagName()
getElementsByTagNameNS: getElementsByTagNameNS()
hasAttribute: hasAttribute()
hasAttributeNS: hasAttributeNS()
hasAttributes: hasAttributes()
id: (...)
get id: ()
set id: ()
innerHTML: (...)
get innerHTML: ()
set innerHTML: ()
insertAdjacentElement: insertAdjacentElement()
insertAdjacentHTML: insertAdjacentHTML()
insertAdjacentText: insertAdjacentText()
lastChild: (...)
lastElementChild: (...)
get lastElementChild: ()
localName: (...)
get localName: ()
matches: matches()
namespaceURI: (...)
get namespaceURI: ()
nextElementSibling: (...)
get nextElementSibling: ()
nextSibling: (...)
nodeName: (...)
nodeType: (...)
nodeValue: (...)
onbeforecopy: (...)
get onbeforecopy: ()
set onbeforecopy: ()
onbeforecut: (...)
get onbeforecut: ()
set onbeforecut: ()
onbeforepaste: (...)
get onbeforepaste: ()
set onbeforepaste: ()
oncopy: (...)
get oncopy: ()
set oncopy: ()
oncut: (...)
get oncut: ()
set oncut: ()
onpaste: (...)
get onpaste: ()
set onpaste: ()
onsearch: (...)
get onsearch: ()
set onsearch: ()
onselectstart: (...)
get onselectstart: ()
set onselectstart: ()
onwebkitfullscreenchange: (...)
get onwebkitfullscreenchange: ()
set onwebkitfullscreenchange: ()
onwebkitfullscreenerror: (...)
get onwebkitfullscreenerror: ()
set onwebkitfullscreenerror: ()
onwheel: (...)
get onwheel: ()
set onwheel: ()
outerHTML: (...)
get outerHTML: ()
set outerHTML: ()
ownerDocument: (...)
parentElement: (...)
parentNode: (...)
prefix: (...)
get prefix: ()
previousElementSibling: (...)
get previousElementSibling: ()
previousSibling: (...)
querySelector: querySelector()
querySelectorAll: querySelectorAll()
remove: remove()
removeAttribute: removeAttribute()
removeAttributeNS: removeAttributeNS()
removeAttributeNode: removeAttributeNode()
requestPointerLock: requestPointerLock()
scrollHeight: (...)
get scrollHeight: ()
scrollIntoView: scrollIntoView()
scrollIntoViewIfNeeded: scrollIntoViewIfNeeded()
scrollLeft: (...)
get scrollLeft: ()
set scrollLeft: ()
scrollTop: (...)
get scrollTop: ()
set scrollTop: ()
scrollWidth: (...)
get scrollWidth: ()
setAttribute: setAttribute()
setAttributeNS: setAttributeNS()
setAttributeNode: setAttributeNode()
setAttributeNodeNS: setAttributeNodeNS()
shadowRoot: (...)
get shadowRoot: ()
tagName: (...)
get tagName: ()
textContent: (...)
webkitMatchesSelector: webkitMatchesSelector()
webkitRequestFullScreen: webkitRequestFullScreen()
webkitRequestFullscreen: webkitRequestFullscreen()
__proto__: Node
```
Node
=====
```
ATTRIBUTE_NODE: 2
CDATA_SECTION_NODE: 4
COMMENT_NODE: 8
DOCUMENT_FRAGMENT_NODE: 11
DOCUMENT_NODE: 9
DOCUMENT_POSITION_CONTAINED_BY: 16
DOCUMENT_POSITION_CONTAINS: 8
DOCUMENT_POSITION_DISCONNECTED: 1
DOCUMENT_POSITION_FOLLOWING: 4
DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
DOCUMENT_POSITION_PRECEDING: 2
DOCUMENT_TYPE_NODE: 10
ELEMENT_NODE: 1
ENTITY_NODE: 6
ENTITY_REFERENCE_NODE: 5
NOTATION_NODE: 12
PROCESSING_INSTRUCTION_NODE: 7
TEXT_NODE: 3
appendChild: appendChild()
baseURI: (...)
get baseURI: ()
childNodes: (...)
get childNodes: ()
cloneNode: cloneNode()
compareDocumentPosition: compareDocumentPosition()
constructor: Node()
contains: contains()
firstChild: (...)
get firstChild: ()
hasChildNodes: hasChildNodes()
insertBefore: insertBefore()
isDefaultNamespace: isDefaultNamespace()
isEqualNode: isEqualNode()
isSameNode: isSameNode()
lastChild: (...)
get lastChild: ()
lookupNamespaceURI: lookupNamespaceURI()
lookupPrefix: lookupPrefix()
nextSibling: (...)
get nextSibling: ()
nodeName: (...)
get nodeName: ()
nodeType: (...)
get nodeType: ()
nodeValue: (...)
get nodeValue: ()
set nodeValue: ()
normalize: normalize()
ownerDocument: (...)
get ownerDocument: ()
parentElement: (...)
get parentElement: ()
parentNode: (...)
get parentNode: ()
previousSibling: (...)
get previousSibling: ()
removeChild: removeChild()
replaceChild: replaceChild()
textContent: (...)
get textContent: ()
set textContent: ()
__proto__: EventTarget
```
EventTarget
===========
```
addEventListener: addEventListener()
constructor: EventTarget()
dispatchEvent: dispatchEvent()
removeEventListener: removeEventListener()
__proto__: Object
```
Object
=======
```
__defineGetter__: __defineGetter__()
__defineSetter__: __defineSetter__()
__lookupGetter__: __lookupGetter__()
__lookupSetter__: __lookupSetter__()
constructor: Object()
hasOwnProperty: hasOwnProperty()
isPrototypeOf: isPrototypeOf()
propertyIsEnumerable: propertyIsEnumerable()
toLocaleString: toLocaleString()
toString: toString()
valueOf: valueOf()
get __proto__: get __proto__()
set __proto__: set __proto__()

```

Встраивание в веб-страницы
--------------------------
Для добавления JavaScript-кода на страницу, можно использовать теги 
```
<script></script>
```
которые рекомендуется, но не обязательно, помещать внутри контейнера 
```
<head>
```
Контейнеров 
```
<script>
```
в одном документе может быть сколько угодно. Атрибут «type='text/javascript'» указывать необязательно, данное значение используется по умолчанию.
Скрипт, выводящий модальное окно с классической надписью «Hello, World!» внутри браузера:
```
      <script type="application/javascript">
         alert('Hello, World!');
      </script>
```
Расположение внутри тега
-------------------------
Спецификация HTML описывает набор атрибутов, используемых для задания обработчиков событий. 
Пример использования:
```
      <a href="delete.php" onclick="return confirm('Вы уверены?');">
         Удалить
      </a>
```
В приведённом примере при нажатии на ссылку функция confirm('Вы уверены?'); вызывает модальное окно с надписью «Вы уверены?», а return false; блокирует переход по ссылке.
Использование кода JavaScript в контексте разметки страницы расценивается в рамках ненавязчивого JavaScript как плохая практика. Аналогом приведённого примера может являться следующий фрагмент JavaScript:
```
window.onload = function() {
    var linkWithAlert = document.getElementById("alertLink");
    linkWithAlert.onclick = function() {
        return confirm('Вы уверены?'); 
    };
};
```
Вынесение в отдельный файл
---------------------------
```
   <head>
      <script type="application/javascript" src="http://Путь_к_файлу_со_скриптом">
      </script>
   </head>
```
Атрибуты элемента script
------------------------
необязательный атрибут type для указания MIME-типа содержимого.

Медиатипы
----------
```
application/javascript,
application/ecmascript,
```
которые также определяются в этом документе, предназначены для практического использования, им следует отдавать предпочтение.

Оригинальный текст
------------------
- необязательный атрибут src, принимающий в качестве значения адрес к файлу со скриптом.
- необязательный атрибут charset, используемый вместе с src для указания используемой кодировки внешнего файла.
- необязательный атрибут defer указывает, что получение скрипта происходит асинхронно, но выполнение следует отложить до тех пор, пока страница не будет загружена целиком.
- необязательный атрибут async указывает, что получение скрипта происходит асинхронно, а выполнение будет произведено сразу по завершению скачивания. Очерёдность выполнения скриптов не гарантируется.
При этом атрибут language (language="JavaScript"), несмотря на его активное использование (в 2008 году этот атрибут был наиболее часто используемым у тега script), относится к не рекомендуемым (deprecated), отсутствует в DTD, поэтому считается некорректным.

Область применения
-------------------
Веб-приложения
--------------
JavaScript используется в клиентской части веб-приложений: клиент-серверных программ, в котором клиентом является браузер, а сервером — веб-сервер, имеющих распределённую между сервером и клиентом логику. Обмен информацией в веб-приложениях происходит по сети. Одним из преимуществ такого подхода является тот факт, что клиенты не зависят от конкретной операционной системы пользователя, поэтому веб-приложения являются кроссплатформенными сервисами.




Node или Node.js
=================
 программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API (написанный на C++), подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и Mac OS) и даже программировать микроконтроллеры (например, tessel и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом.

Node разработал Райан Дал (Ryan Dahl) в 2009 году после двух лет экспериментирования над созданием серверных веб-компонентов. В ходе своих исследований он пришёл к выводу, что вместо традиционной модели параллелизма на основе потоков следует обратиться к событийно-ориентированным системам. Эта модель была выбрана из-за простоты, низких накладных расходов (по сравнению с идеологией «один поток на каждое соединение») и быстродействия. Целью Node является предложить «простой способ построения масштабируемых сетевых серверов».

Создание и запуск HTTP-сервера на Node.js, выдающего Hello, world!:
```
    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337/');
```

Другой пример скрипта, создающего TCP-сервер, который прослушивает порт 1337 и выводит на экран всё, что вводит пользователь:
```
    var net = require('net');

    var server = net.createServer(function (stream) {
        stream.setEncoding('utf8');

        stream.write('hello\r\n');

        stream.addListener('data', function (data) {
            this.write(data);
        });

        stream.addListener('end', function () {
            this.write('goodbye\r\n');
            this.end();
        });
    });

    server.listen(1337, 'localhost');
```
