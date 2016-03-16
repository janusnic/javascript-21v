# javascript-21v

hover( over, out )
==================
Имитирует эффект hovering (отслеживание попадания указателя мыши в пределы объекта).
Всякий раз, когда курсор мыши проходит над соответствующим элементом, запускается первая, указанная в аргументе over, функция. Когда курсор покидает область объекта, запускается вторая, указанная в аргументе out, функция.
Кроме того, осуществляется проверка с целью убедиться, что курсор по-прежнему в пределах указанного элемента (например, изображение внутри элемента div), и если это так, эффект ‘hover’ будет продолжаться (распространенная ошибка при использовании обработчика события mouseout).

over    Функция 
----------------
Функция, запускающаяся, когда курсор мыши проходит над соответствующим элементом.
    
    function callback(eventObject) {
      this; // dom element
    }

out Функция 
-----------
Функция, запускающаяся, когда курсор покидает область объекта.
    
    function callback(eventObject) {
      this; // dom element
    }

Для того, чтобы добавить специальный стиль для элемента списка над котором находится курсор мыши, можно поступить следующим образом:
```
    $("li").hover(
      function () {
        $(this).append($("<span> ***</span>"));
      },
      function () {
        $(this).find("span:last").remove();
      }
    );

  //li with fade class
   $("li.fade").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("li").hover(
      function () {
        $(this).append($("<span> ***</span>"));
      },
      function () {
        $(this).find("span:last").remove();
      }
    );

  //li with fade class
   $("li.fade").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});

  });
  </script>

  <style>
  ul { margin-left:20px; color:blue; }
  li { cursor:default; }
  span { color:red; }
  </style>
</head>
<body>
  <ul>
    <li>Milk</li>

    <li>Bread</li>
    <li class='fade'>Chips</li>
    <li class='fade'>Socks</li>
  </ul>

</body>
</html>
```
Для того, чтобы добавить специальный стиль для ячейки таблицы над которой находится курсор мыши, можно поступить следующим образом:
```
$("td").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
```
Для удаления привязанных выше событий попробуйте сделать так:
```
$("td").unbind('mouseenter mouseleave');
```

parent( [выражение] )
=====================
Получает прямого «родителя» элемента. Если вызывается для набора элементов, то функция возвращает набор их прямых родительских объектов. Также можно использовать выражение, чтобы дополнительно отфильтровать набор элементов. Если ни одного родительского объекта не было найдено, то возвращается объект jQuery нулевой длины.
Для получения всех родительских объектов воспользуйтесь closest или parents.
 
Аргументы: выражение (необязательно)   Строка  
Выражение для дополнительной фильтрации элементов.

Показывает «родителя» каждого элемента как (родитель > потомок).
```
    $("*", document.body).each(function () {
      var parentTag = $(this).parent().get(0).tagName;
      $(this).prepend(document.createTextNode(parentTag + " > "));
    });
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){

    $("*", document.body).each(function () {
      var parentTag = $(this).parent().get(0).tagName;
      $(this).prepend(document.createTextNode(parentTag + " > "));
    });

  });
  </script>

  <style>
  div,p { margin:10px; }
  </style>
</head>
<body>
  <div>div,
    <span>span, </span>

    <b>b </b>
  </div>
  <p>p,
    <span>span,
      <em>em </em>

    </span>
  </p>
  <div>div,
    <strong>strong,
      <span>span, </span>
      <em>em,
        <b>b, </b>

      </em>
    </strong>
    <b>b </b>
  </div>
</body>
</html>
```

Поиск «родителя» каждого параграфа имеющего класс «selected».
```
$("p").parent(".selected").css("background", "yellow");
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script>
  $(document).ready(function(){
    $("p").parent(".selected").css("background", "yellow");
  });
  </script>

</head>
<body>

  <div><p>Hello</p></div>
  <div class="selected"><p>Hello Again</p></div>

</body>

</html>
```
catalog.js
----------
```
$('.product').each(function (i, el) {
        $(el).find('.make3D').hover(function () {
            $(this).parent().css('z-index', '20');
            $(this).addClass('animate');
            $(this).find('div.carouselNext, div.carouselPrev').addClass('visible');
        }, function () {
            $(this).removeClass('animate');
            $(this).parent().css('z-index', '1');
            $(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
        });
    });
```    

index.jade
-----------
```
extends layout

block content
    input( type='hidden' id='current_page')
    input( type='hidden' id='show_per_page')
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
      <div class="carousel">
      <ul class="carousel-container">
      <li><img alt="" /></li>
      
      </ul>
      <div class="arrows-perspective">
      <div class="carouselPrev">
      <div class="y"></div>
      <div class="x"></div>
      </div>
      <div class="carouselNext">
      <div class="y"></div>
      <div class="x"></div>
      </div>
      </div>
      </div>
      <div class="flip-back">
      <div class="cy"></div>
      <div class="cx"></div>
      </div>
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

      div#page_navigation
    div#grid

```

offset
=======
Получает текущие значения отступов относительно документа для первого элемента в наборе.
Возвращаемый объект содержит два значение (сверху и слева) типа Float. Для фактического позиционирования браузеры обычно округляют эти значения до ближайшего целого. Этот метод работает только с видимыми элементами.

 

Получает доступ к отступам второго параграфа:

        var p = $("p:last");
        var offset = p.offset();
        p.html( "left: " + offset.left + ", top: " + offset.top );
        <!DOCTYPE HTML>
        <html>
        <head>
          <script src="http://code.jquery.com/jquery-latest.js"></script>

          <script>
          $(document).ready(function(){
            var p = $("p:last");
        var offset = p.offset();
        p.html( "left: " + offset.left + ", top: " + offset.top );
          });
          </script>

          <style>
          p { margin-left:10px; }
          </style>
        </head>
        <body>
          <p>Hello</p><p>2nd Paragraph</p>

        </body>
        </html>

Нажмите, чтобы увидеть отступы.

            $("*", document.body).click(function (e) {
              var offset = $(this).offset();
              e.stopPropagation();
              $("#result").text(this.tagName + " coords ( " + offset.left + ", " +
                                              offset.top + " )");
            });
        <!DOCTYPE HTML>
        <html>
        <head>
          <script src="http://code.jquery.com/jquery-latest.js"></script>

          <script>
          $(document).ready(function(){

            $("*", document.body).click(function (e) {
              var offset = $(this).offset();
              e.stopPropagation();
              $("#result").text(this.tagName + " coords ( " + offset.left + ", " +
                                              offset.top + " )");
            });

          });
          </script>

          <style>
          p { margin-left:10px; color:blue; width:200px;
              cursor:pointer; }
          span { color:red; cursor:pointer; }
          div.abs { width:50px; height:50px; position:absolute;
                    left:220px; top:35px; background-color:green;
                    cursor:pointer; }
          </style>
        </head>
        <body>
          <div id="result">Click an element.</div>

          <p>
            This is the best way to <span>find</span> an offset.
          </p>
          <div class="abs">
          </div>

        </body>
        </html>

last
====

Соответствует последнему выбранному элементу.

Поиск последней строки таблицы.
        $("tr:last").css({backgroundColor: 'yellow', fontWeight: 'bolder'});
        
        <!DOCTYPE HTML>

        <html>
        <head>
          <script src="http://code.jquery.com/jquery-latest.js"></script>

          <script>
          $(document).ready(function(){
            $("tr:last").css({backgroundColor: 'yellow', fontWeight: 'bolder'});
          });
          </script>

        </head>
        <body>
          <table>
            <tr><td>First Row</td></tr>
            <tr><td>Middle Row</td></tr>

            <tr><td>Last Row</td></tr>
          </table>
        </body>
        </html>


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

function next(){
    new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }
    
}
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
               itemSku = item['sku'],
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

                        //carousel-container
                        $template.find('.carousel-container li img').attr('src',itemImg);
                        
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }
                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner').addClass('banner sale').text('Sale');
                        }
                        $shop.append($template);
       })
       
   });
    
    console.log(number_of_items);
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
    
    $('.largeGrid').click(function () {
        $(this).find('a').addClass('active');
        $('.smallGrid a').removeClass('active');
        $('.product').addClass('large').each(function () {
        });
        setTimeout(function () {
            $('.info-large').show();
        }, 200);
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

    $('.product').each(function (i, el) {
        $(el).find('.make3D').hover(function () {
            $(this).parent().css('z-index', '20');
            $(this).addClass('animate');
            $(this).find('div.carouselNext, div.carouselPrev').addClass('visible');
        }, function () {
            $(this).removeClass('animate');
            $(this).parent().css('z-index', '1');
            $(this).find('div.carouselNext, div.carouselPrev').removeClass('visible');
        });
        $(el).find('.flip-back').click(function () {
            $(el).find('.make3D').removeClass('flip180').addClass('flip190');
            setTimeout(function () {
                $(el).find('.make3D').removeClass('flip190').addClass('flip90');
                $(el).find('.product-back div.shadow').css('opacity', 0).fadeTo(100, 1, function () {
                    $(el).find('.product-back, .product-back div.shadow').hide();
                    $(el).find('.product-front, .product-front div.shadow').show();
                });
            }, 50);
            setTimeout(function () {
                $(el).find('.make3D').removeClass('flip90').addClass('flip-10');
                $(el).find('.product-front div.shadow').show().fadeTo(100, 0);
                setTimeout(function () {
                    $(el).find('.product-front div.shadow').hide();
                    $(el).find('.make3D').removeClass('flip-10').css('transition', '100ms ease-out');
                    $(el).find('.cx, .cy').removeClass('s1 s2 s3');
                }, 100);
            }, 150);
        });

    });

    $('.add_to_cart').click(function () {
        var productCard = $(this).parent();
        var position = productCard.offset();
        var productImage = $(productCard).find('img').get(0).src;
        var productName = $(productCard).find('.product_name').get(0).innerHTML;
        $('body').append('<div class="floating-cart"></div>');
        var cart = $('div.floating-cart');
        productCard.clone().appendTo(cart);
        $(cart).css({
            'top': position.top + 'px',
            'left': position.left + 'px'
        }).fadeIn('slow').addClass('moveToCart');
        setTimeout(function () {
            $('body').addClass('MakeFloatingCart');
        }, 800);
        setTimeout(function () {
            $('div.floating-cart').remove();
            $('body').removeClass('MakeFloatingCart');
            var cartItem = '<div class=\'cart-item\'><div class=\'img-wrap\'><img src=\'' + productImage + '\' alt=\'\' /></div><span>' + productName + '</span><strong>$39</strong><div class=\'cart-item-border\'></div><div class=\'delete-item\'></div></div>';
            $('#cart .empty').hide();
            $('#cart').append(cartItem);
            $('#checkout').fadeIn(500);
            $('#cart .cart-item').last().addClass('flash').find('.delete-item').click(function () {
                $(this).parent().fadeOut(300, function () {
                    $(this).remove();
                    if ($('#cart .cart-item').size() == 0) {
                        $('#cart .empty').fadeIn(500);
                        $('#checkout').fadeOut(500);
                    }
                });
            });
            setTimeout(function () {
                $('#cart .cart-item').last().removeClass('flash');
            }, 10);
        }, 1000);
    });

    $('.add-cart-large').each(function (i, el) {
        $(el).click(function () {
            var carousel = $(this).parent().parent().find('.carousel-container');
            
            var img = carousel.find('img')[0];
            console.log(img.src);
            var position = $(img).offset();
            var productName = $(this).parent().find('h4').get(0).innerHTML;
            $('body').append('<div class="floating-cart"></div>');
            var cart = $('div.floating-cart');
            $('<img src=\'' + img.src + '\' class=\'floating-image-large\' />').appendTo(cart);
            $(cart).css({
                'top': position.top + 'px',
                'left': position.left + 'px'
            }).fadeIn('slow').addClass('moveToCart');
            setTimeout(function () {
                $('body').addClass('MakeFloatingCart');
            }, 800);
            setTimeout(function () {
                $('div.floating-cart').remove();
                $('body').removeClass('MakeFloatingCart');
                var cartItem = '<div class=\'cart-item\'><div class=\'img-wrap\'><img src=\'' + img.src + '\' alt=\'\' /></div><span>' + productName + '</span><strong>$39</strong><div class=\'cart-item-border\'></div><div class=\'delete-item\'></div></div>';
                $('#cart .empty').hide();
                $('#cart').append(cartItem);
                $('#checkout').fadeIn(500);
                $('#cart .cart-item').last().addClass('flash').find('.delete-item').click(function () {
                    $(this).parent().fadeOut(300, function () {
                        $(this).remove();
                        if ($('#cart .cart-item').size() == 0) {
                            $('#cart .empty').fadeIn(500);
                            $('#checkout').fadeOut(500);
                        }
                    });
                });
                setTimeout(function () {
                    $('#cart .cart-item').last().removeClass('flash');
                }, 10);
            }, 1000);
        });
    });

});

```
