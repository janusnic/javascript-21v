$(document).ready(function () {
    var $shop = $('.shop');
    var $cart = $('.cart-items');

    var xmlhttp = new XMLHttpRequest();

    var url = "/ajax/data.json";
    getDate(url);

  
  function getDate(url){
    $shop.empty();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var product = xmlhttp.responseText;
 
            init(JSON.parse(product));  
          }
      };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
  function init(products){
    for (var item in products) {
    
        var itemName = products[item][0], 
            itemDescription = products[item][1], 
            itemPrice = products[item][2], 
            itemImg = products[item][3], 
            itemId = products[item][4], 
            
        $template = $($('#productTemplate').html());
        
        
        
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
  }
});
