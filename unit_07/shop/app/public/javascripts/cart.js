$(document).ready(function () {
    var products = {
        'Suit': [
            'Suit',
            'The mug you\'ve been dreaming about. One sip from this ceramic 16oz fluid delivery system and you\'ll never go back to red cups.',
            14,
            '/images/1.jpg',
            1
        ],
        'Bow tie': [
            'Bow tie',
            'These coasters roll all of the greatest qualities into one: class, leather, and octocats. They also happen to protect surfaces from cold drinks.',
            18,
            '/images/2.jpg',
            2
        ],
        'Sweater': [
            'Sweater',
            'Set of two heavyweight 16 oz. Octopint glasses for your favorite malty beverage.',
            16,
            '/images/3.jpg',
            3
        ],
        'Hat': [
            'Hat',
            'Check it. Blacktocat is back with a whole new direction. He\'s exited stealth mode and is ready for primetime, now with a stylish logo.',
            25,
            '/images/4.jpg',
            4
        ],
        'Shoes': [
            'Shoes',
            'Need a huge Octocat sticker for your laptop, fridge, snowboard, or ceiling fan? Look no further!',
            2,
            '/images/5.jpg',
            5
        ],
        'Glasses': [
            'Glasses',
            'Pixels are your friends. Show your bits in this super-comfy blue American Apparel tri-blend shirt with a pixelated version of your favorite aquatic feline',
            25,
            '/images/6.jpg',
            6
        ],
        'Suit 1': [
            'Suit',
            'The mug you\'ve been dreaming about. One sip from this ceramic 16oz fluid delivery system and you\'ll never go back to red cups.',
            14,
            '/images/1.jpg',
            7
        ],
        'Bow tie 1': [
            'Bow tie',
            'These coasters roll all of the greatest qualities into one: class, leather, and octocats. They also happen to protect surfaces from cold drinks.',
            18,
            '/images/2.jpg',
            8
        ],
        'Sweater 1': [
            'Sweater',
            'Set of two heavyweight 16 oz. Octopint glasses for your favorite malty beverage.',
            16,
            '/images/3.jpg',
            9
        ],
        'Hat 1': [
            'Hat',
            'Check it. Blacktocat is back with a whole new direction. He\'s exited stealth mode and is ready for primetime, now with a stylish logo.',
            25,
            '/images/4.jpg',
            10
        ],
        'Shoes 1': [
            'Shoes',
            'Need a huge Octocat sticker for your laptop, fridge, snowboard, or ceiling fan? Look no further!',
            2,
            '/images/5.jpg',
            11
        ],
        'Glasses 1': [
            'Glasses',
            'Pixels are your friends. Show your bits in this super-comfy blue American Apparel tri-blend shirt with a pixelated version of your favorite aquatic feline',
            25,
            '/images/6.jpg',
            12
        ]
    };
    var $shop = $('.shop');
    var $cart = $('.cart-items');
    for (var item in products) {
        
        var itemName = products[item][0], itemDescription = products[item][1], itemPrice = products[item][2], itemImg = products[item][3], itemId = products[item][4], $template = $($('#productTemplate').html());
        $template.find('h1').text(itemName);
        $template.find('p').text(itemDescription);
        $template.find('.price').text('$' + itemPrice);
        $template.css('background-image', 'url(' + itemImg + ')');
        $template.data('id', itemId);
        $template.data('name', itemName);
        $template.data('price', itemPrice);
        $template.data('image', itemImg);
        $shop.append($template);
    }
    
    $('body').on('blur', '.cart-items input', function () {
        var $this = $(this), $item = $this.parents('li');
        if (+$this.val() === 0) {
            $item.remove();
        } else {
            calculateSubtotal($item);
        }
        updateCartQuantity();
        calculateAndUpdate();
    });
    $('body').on('click', '.product .add', function () {
        var items = $cart.children(), $item = $(this).parents('.product'), $template = $($('#cartItem').html()), $matched = null, quantity = 0;
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
            $template.find('h3').text($item.data('name'));
            $template.find('.subtotal').text('$' + $item.data('price'));
            $template.data('id', $item.data('id'));
            $template.data('price', $item.data('price'));
            $template.data('subtotal', $item.data('price'));
            $cart.append($template);
        }
        updateCartQuantity();
        calculateAndUpdate();
    });
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
    $('body').on('keypress', '.cart-items input', function (ev) {
        var keyCode = window.event ? ev.keyCode : ev.which;
        if (keyCode < 48 || keyCode > 57) {
            if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
                ev.preventDefault();
            }
        }
    });
    $('.addtocart').on('click', function () {
        $(this).addClass('active');
        setTimeout(function () {
            $('.addtocart').removeClass('active');
        }, 1000);
    });
    $('.checkout').on('click', function () {
        $(this).addClass('active');
        $('.error').css('display', 'block');
        $('#payment_wrapper').css('display', 'block');
        
        setTimeout(function () {
            $('.checkout').removeClass('active');
            $('.error').css('display', 'none');
        }, 1000);
    });
});

