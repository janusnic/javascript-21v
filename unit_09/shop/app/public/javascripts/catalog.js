$(document).ready(function () {
    var $shop = $('#grid');
    var xmlhttp = new XMLHttpRequest();
    var url = "/shopdata";

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
  
    function init(jsonObject){
    
       for(var i=0; i<jsonObject.length;i++){
                   var item = jsonObject[i];
                       var  itemName = item['name'],
                            itemSku = item['scu'],
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

                        //Best price bestprice
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }

                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner').addClass('banner sale').text('Sale');
                        }

                        $shop.append($template);
       }
    }

   
/*
    $.getJSON( url, {
            format: "json"
        }).done(function( data ) {
        $.each( data, function( i, item ) {
            var  itemName = item['name'],
               itemSku = item['scu'],
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
                        if (itemDiscontPrice > 0 && itemDiscontPrice < 30 ) {
                        $template.find('#banner').addClass('banner').addClass('bestprice').text('Best price');
                        }
                        if (itemDiscontPrice >= 30 ) {
                        $template.find('#banner').addClass('banner sale').text('Sale');
                        }
                        $shop.append($template);
       })
   });
*/
});
