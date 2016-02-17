
var parent_menu = document.getElementById('menu_body');
var ul = document.createElement('ul');
ul.setAttribute('id', 'ul1');
var li1,  a1, ul1, li2;
var li2 = [], a2 = [];
var jsm;
var menu =[
  ['id0','Главня','index.html'],
  [ 'id1','О компании','about.html'],
  [ 'id2','Каталог','#',
    [
      ['Бытовая техника','cat.html'],
      ['Телефоны','cat.html'],
      ['Мобильные устройства','cat.html'],
      ['Гаджеты','cat.html'],
      ['Компъютеры','cat.html'],
      ['Комплектующие','cat.html'],
    ]
  ],
  [ 'id3','Услуги','#',
    [
      ['Ремонт','1.html'],
      ['Настойка','1.html'],
      ['Доставка','1.html'],
      ['Косультации','1.html'],
      ['Модификация','1.html']
    ]
  ],
  ['id4', 'Блог','blog.html'],
  ['id5', 'Контакты','contact.html']
];

function openMenu(id){
    for (i=0; i < menu.length; i++){
        if (id != menu[i][0]){

            document.getElementById(menu[i][0]).style.display = "none";
        }
    }
    if (document.getElementById(id).style.display == "block"){
        document.getElementById(id).style.display = "none";
    }else{
        document.getElementById(id).style.display = "block";
    }
}

 var createMenu = function() {
    for (var i = 0; i < menu.length; i++) {
        li1 = document.createElement('li');
        a1 = document.createElement('a');
        a1.appendChild(document.createTextNode(''+menu[i][1]+''));

        ul1 = document.createElement('ul');

        if (menu[i][3]) {

          for (var j = 0; j <menu[i][3].length; j++) {

              li2[j] = document.createElement('li');
              a2[j] = document.createElement('a');
              a2[j].appendChild(document.createTextNode(menu[i][3][j][0]));
              a2[j].setAttribute('href', menu[i][3][j][1]);
              li2[j].appendChild(a2[j]);
              ul1.appendChild(li2[j]);
          }
        }
        a1.setAttribute('href', menu[i][2]);
        if (menu[i][2]==='#'){
            jsm = "openMenu('"+menu[i][0]+"');return(false)";
            a1.setAttribute('onclick', jsm);
       }
        li1.appendChild(a1);

        ul1.setAttribute('id', menu[i][0]);
        li1.appendChild(ul1);

        ul.appendChild(li1);
      }
    parent_menu.appendChild(ul);

};

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

 var slide_ul;
 var li_items;
 var imageNumber;
 var imageWidth;
 var prev, next;
 var currentPostion = 0;
 var currentImage = 0;


 function init(){
     slide_ul = document.getElementById('image_slider');

     li_items = slide_ul.children;
     imageNumber = li_items.length;
     imageWidth = li_items[0].children[0].clientWidth;
     slide_ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
     prev = document.getElementById("prev");
     next = document.getElementById("next");

     generatePager(imageNumber);

     prev.onclick = function(){ onClickPrev();};
     next.onclick = function(){ onClickNext();};

 }

 function animate(opts){
     var start = new Date;
     var id = setInterval(function(){
         var timePassed = new Date - start;
         var progress = timePassed / opts.duration;
         if (progress > 1){
             progress = 1;
         }
         var delta = opts.delta(progress);
         opts.step(delta);
         if (progress == 1){
             clearInterval(id);
             opts.callback();
         }
     }, opts.delay || 17);

 }

 function slideTo(imageToGo){
     var direction;
     var numOfImageToGo = Math.abs(imageToGo - currentImage);

     direction = currentImage > imageToGo ? 1 : -1;
     currentPostion = -1 * currentImage * imageWidth;
     var opts = {
         duration:1000,
         delta:function(p){return p;},
         step:function(delta){
             slide_ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';
         },
         callback:function(){currentImage = imageToGo;}
     };
     animate(opts);
 }

 function onClickPrev(){
     if (currentImage == 0){
         slideTo(imageNumber - 1);
     }
     else{
         slideTo(currentImage - 1);
     }
 }

 function onClickNext(){
     if (currentImage == imageNumber - 1){
         slideTo(0);
     }
     else{
         slideTo(currentImage + 1);
     }
 }
 function generatePager(imageNumber){
     var pageNumber;
     var pagerDiv = document.getElementById('pager');
     for (i = 0; i < imageNumber; i++){
         var li = document.createElement('li');
         pageNumber = document.createTextNode(parseInt(i + 1));
         li.appendChild(pageNumber);
         pagerDiv.appendChild(li);
         // add event inside a loop, closure issue.
         li.onclick = function(i){
             return function(){
                 slideTo(i);
             }
         }(i);
     }
     var computedStyle = document.defaultView.getComputedStyle(li, null);

     var liWidth = parseInt(li.offsetWidth);
     var liMargin = parseInt(computedStyle.margin.replace('px',""));
     pagerDiv.style.width = parseInt((liWidth + liMargin * 2) * imageNumber) + 'px';
 }

 window.onload = function(){
   init();
   createMenu();
   tableCreate();
 }
