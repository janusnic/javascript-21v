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

    var $cart = $('.cart-items');

        var quantity = 0;
    var $matched = null;

    function calculateSubtotal($item) {
        var quantity = $item.find('.quantity').val(), price = $item.data('price'), subtotal = quantity * price;
        $item.find('.subtotal').text('$' + subtotal);
        $item.data('subtotal', subtotal);
    }
    var $cartlink = $('.cart-link'), $wrap = $('#wrap');
    $cartlink.on('click', function () {
        $cartlink.toggleClass('active');
        $wrap.toggleClass('active');
        return false;
    });
    $wrap.on('click', function (e) {
        if (!$(e.target).is('.add')) {
            $wrap.removeClass('active');
            $cartlink.removeClass('active');
        }
    });
    
    function calculateAndUpdate() {
        var subtotal = 0, items = $cart.children(), shipping = items.length > 0 ? 5 : 0, tax = 0;
        items.each(function (index, item) {
            var $item = $(item), price = $item.data('subtotal');
            subtotal += price;
        });
        $('.subtotalTotal span').text(formatDollar(subtotal));
        tax = subtotal * 0.05;
        $('.taxes span').text(formatDollar(tax));
        $('.shipping span').text(formatDollar(shipping));
        $('.finalTotal span').text(formatDollar(subtotal + tax + shipping));
    }
    
    function updateCartQuantity() {
        var quantities = 0, $cartQuantity = $('span.cart-quantity'), items = $cart.children();
        items.each(function (index, item) {
            var $item = $(item), quantity = +$item.find('.quantity').val();
            quantities += quantity;
        });
        if (quantities > 0) {
            $cartQuantity.removeClass('empty');
        } else {
            $cartQuantity.addClass('empty');
        }
        $cartQuantity.text(quantities);
    }
    
    function formatDollar(amount) {
        return '$' + parseFloat(Math.round(amount * 100) / 100).toFixed(2);
    }

    function changed() {
        var subtotal = 0;
        $('.cart-items li').each(function () {
           
            subtotal = subtotal + parseFloat($('.subtotal').text().replace('$', ''));

        });
       
        $('.subtotalTotal span').text('$' + (Math.round(subtotal * 100) / 100).toFixed(2));

        var a = subtotal / 100 * 105 + parseFloat($('.shipping span').text().replace('$', ''));
        var total = (Math.round(a * 100) / 100).toFixed(2);
         console.log("total= ", total);
        $('.finalTotal span').text(total);
        $('.taxes span').text('($' + (Math.round(subtotal * 5) / 100).toFixed(2) + ') ');
    }



    function eachProduct(){
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
        $(el).find('.view_gallery').click(function () {
            $(el).find('div.carouselNext, div.carouselPrev').removeClass('visible');
            $(el).find('.make3D').addClass('flip-10');
            setTimeout(function () {
                $(el).find('.make3D').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo(80, 1, function () {
                    $(el).find('.product-front, .product-front div.shadow').hide();
                });
            }, 50);
            setTimeout(function () {
                $(el).find('.make3D').removeClass('flip90').addClass('flip190');
                $(el).find('.product-back').show().find('div.shadow').show().fadeTo(90, 0);
                setTimeout(function () {
                    $(el).find('.make3D').removeClass('flip190').addClass('flip180').find('div.shadow').hide();
                    setTimeout(function () {
                        $(el).find('.make3D').css('transition', '100ms ease-out');
                        $(el).find('.cx, .cy').addClass('s1');
                        setTimeout(function () {
                            $(el).find('.cx, .cy').addClass('s2');
                        }, 100);
                        setTimeout(function () {
                            $(el).find('.cx, .cy').addClass('s3');
                        }, 200);
                        $(el).find('div.carouselNext, div.carouselPrev').addClass('visible');
                    }, 100);
                }, 100);
            }, 150);
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
        makeCarousel(el);
    });
    }

    function addToCart(){
        $('.add_to_cart').click(function () {
        
        var items = $cart.children(),
        $template = $($('#cartItem').html()),
        $item = $(this).parents('.product');
        
        var position = $item.offset();
        var productImage = $($item).find('img').get(0).src;
        var productName = $($item).find('.product_name').get(0).innerHTML;
        var productPrice = $($item).find('.product_price').get(0).innerHTML;
        $('body').append('<div class="floating-cart"></div>');
        var cart = $('div.floating-cart');
        $item.clone().appendTo(cart);

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

            $('#cart .empty').hide();

            $matched = items.filter(function (index) {
            var $this = $(this);
            return $this.data('id') === $item.data('id');
        });
        if ($matched.length) {
            quantity = +$matched.find('.quantity').val() + 1;
            $matched.find('.quantity').val(quantity);
            calculateSubtotal($matched);
        } else {

            $template.find('.cart-product').css('background-image', 'url(' + $item.data('image') + ')');
            $template.find('b').text($item.data('name'));
            $template.find('.subtotal').text('$' + $item.data('price'));
            $template.data('id', $item.data('id'));
            $template.data('price', $item.data('price'));
            $template.data('subtotal', $item.data('price'));
            $cart.append($template);
            }
            updateCartQuantity();
            calculateAndUpdate();

            $('#checkout').fadeIn(500);
            $('#cart .cart-product').last().addClass('flash').find('.delete-item').click(function () {
                $(this).parent().fadeOut(300, function () {
                    $(this).parent().remove();
                    changed();
                    
                    if ($('#cart .cart-product').size() == 0) {
                        $('#cart .empty').fadeIn(500);
                        $('#checkout').fadeOut(500);
                    }
                });
            });
            setTimeout(function () {
                $('#cart .cart-product').last().removeClass('flash');
            }, 10);
        }, 1000);
    });
    }

    function addToCartLarge(){
        $('.add-cart-large').each(function (i, el) {

        $(el).click(function () {

            var items = $cart.children(),
                $template = $($('#cartItem').html()),
                $item = $(this).parents('.product');

            var carousel = $(this).parent().parent().find('.carousel-container');
            
            var img = carousel.find('img')[0];

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
                $('#cart .empty').hide();

                $matched = items.filter(function (index) {
                    var $this = $(this);
                        return $this.data('id') === $item.data('id');
                        });
                    if ($matched.length) {
                        quantity = +$matched.find('.quantity').val() + 1;
                        $matched.find('.quantity').val(quantity);
                        calculateSubtotal($matched);
                    } else {
                        console.log($item.data('price'));

                            $template.find('.cart-product').css('background-image', 'url(' + $item.data('image') + ')');
                            $template.find('b').text($item.data('name'));
                            $template.find('.subtotal').text('$' + $item.data('price'));
                            $template.data('id', $item.data('id'));
                            $template.data('price', $item.data('price'));
                            $template.data('subtotal', $item.data('price'));
                            $cart.append($template);
                        }
                    updateCartQuantity();
                    calculateAndUpdate();

                $('#checkout').fadeIn(500);
                $('#cart .cart-product').last().addClass('flash').find('.delete-item').click(function () {
                    $(this).parent().fadeOut(300, function () {
                    $(this).parent().remove();
                    changed();

                        if ($('#cart .cart-product').size() == 0) {
                            $('#cart .empty').fadeIn(500);
                            $('#checkout').fadeOut(500);
                        }
                    });
                });
                setTimeout(function () {
                    $('#cart .cart-product').last().removeClass('flash');
                }, 10);
            }, 1000);
        });
    });

    }


    function makeCarousel(el) {
        var carousel = $(el).find('.carousel ul');
        var carouselSlideWidth = 315;
        var carouselWidth = 0;
        var isAnimating = false;
        var currSlide = 0;
        $(carousel).attr('rel', currSlide);
        $(carousel).find('li').each(function () {
            carouselWidth += carouselSlideWidth;
        });
        $(carousel).css('width', carouselWidth);
        $(el).find('div.carouselNext').on('click', function () {
            var currentLeft = Math.abs(parseInt($(carousel).css('left')));
            var newLeft = currentLeft + carouselSlideWidth;
            if (newLeft == carouselWidth || isAnimating === true) {
                return;
            }
            $(carousel).css({
                'left': '-' + newLeft + 'px',
                'transition': '300ms ease-out'
            });
            isAnimating = true;
            currSlide++;
            $(carousel).attr('rel', currSlide);
            setTimeout(function () {
                isAnimating = false;
            }, 300);
        });
        $(el).find('div.carouselPrev').on('click', function () {
            var currentLeft = Math.abs(parseInt($(carousel).css('left')));
            var newLeft = currentLeft - carouselSlideWidth;
            if (newLeft < 0 || isAnimating === true) {
                return;
            }
            $(carousel).css({
                'left': '-' + newLeft + 'px',
                'transition': '300ms ease-out'
            });
            isAnimating = true;
            currSlide--;
            $(carousel).attr('rel', currSlide);
            setTimeout(function () {
                isAnimating = false;
            }, 300);
        });
    }
    $('.sizes a span, .categories a span').each(function (i, el) {
        $(el).append('<span class="x"></span><span class="y"></span>');
        $(el).parent().on('click', function () {
            if ($(this).hasClass('checked')) {
                $(el).find('.y').removeClass('animate');
                setTimeout(function () {
                    $(el).find('.x').removeClass('animate');
                }, 50);
                $(this).removeClass('checked');
                return false;
            }
            $(el).find('.x').addClass('animate');
            setTimeout(function () {
                $(el).find('.y').addClass('animate');
            }, 100);
            $(this).addClass('checked');
            return false;
        });
    });

    $('.popup-btn').click(function (e) {
        $template = $($('#cartPay').html());

        $('body').append($template);
        
        $('.popup-wrap').fadeIn(250);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');
        e.preventDefault();

       $('.popup-close').click(function (e) {
            
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');
            e.preventDefault();
        });
    
       $('#pay-button').click(function(){
        console.log($('#payform').serialize());
        $.ajax(
                { 
                    url: '/payment',
                    method: 'POST',
                    
                    data: $('#payform').serialize(),
                    dataType: 'json',
                    success: function (data, textStatus, jqXHR) {
                        if (typeof data.redirect == 'string'){
                    
                                 location = data.redirect;
                             }
                      }
              
                });
        });

    });

    function eachData(data){

         $.each( data, function( i, item ) {
            var  itemName = item['name'],
               itemSku = item['sku'],
               itemDescription = item['snippet'], 
               itemPrice = item['price'], 
               itemDiscontPrice = item['discont'], 
               itemImg = item['impriceUrl'], 
               itemId = item['id'];
                        
                        var $template = $($('#productTemplate').html());
                        $template.find('h4').text(itemName);
                        $template.find('.sku strong').text(itemSku);
                        $template.find('p').text(itemDescription);
                        $template.find('.price-big').text('$' + itemPrice);
                        $template.find('.product_price').text('$' + itemPrice*(100-itemDiscontPrice)/100);
                        $template.find('.product_name').text(itemName);
                        $template.find('img').attr('src',itemImg[0]);

                        $template.data('id', itemId);
                        $template.data('name', itemName);
                        $template.data('price', itemPrice);
                        $template.data('image', itemImg[0]);

                        for (var j=0; j<itemImg.length;j++) {
                            var caruselImg = $("<img></img>").attr('src',itemImg[j]);  
                            var caruselLi = $("<li></li>").append(caruselImg);  
                            $template.find('.carousel-container').append(caruselLi);
                        }
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('ribbon top-left ribbon-primary').addClass('bestprice').html('<small>Best price</small>');
                        }
                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner ').addClass('ribbon top-left ribbon-primary sale').html('<small>Sale!</small>');
                        }
                        $shop.append($template);
       })
    }


        $.ajax({
          url: url,
          async: false,
          dataType: 'json',
          success: function (data) {

            number_of_items = data.length;
          }
        })
          .done(function( data ) {  
              eachData(data);
           });


        $('#search').on('keyup', function(e){
            if(e.keyCode === 13) {
               //var parameters = {search: $(this).val() };
           
               $shop.empty();
            
            $.ajax({
              url: '/searching',
              async: false,
              data: {search: $(this).val() },
              dataType: 'json',
              success: function (data) {
                
                number_of_items = data.length;
                }
              }).done( function( data ) {  
                    eachData(data);
                         }
                );

        eachProduct();
        addToCart();
        addToCartLarge();

        console.log('number_of_items = ',number_of_items);

            };
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
    
    eachProduct();
    addToCart();
    addToCartLarge();



});
