$(document).ready(function () {
    
    var $shop = $('#grid');
    var url = "/json";
    var jsonData = [];

    $.ajax({
          url: '/json',
          async: false,
          method: 'GET',
          dataType: 'json',
          success: function (data) {

            jsonData = data;
          }
        });

    var data = jQuery.parseJSON(jsonData);


    $('#saveproduct').click(function(){
        $.ajax({
          url: url,
          method: 'POST',

          contentType: 'application/json',
          data: JSON.stringify(data),

          dataType: 'json',
          success: function (data) {
            console.log('test success');
          }
        })
    })

var newproductHolder = document.getElementById('newproductHolder');
var productForm = document.getElementById('newProductForm');
var productDate = document.getElementById('productDate');
var addproduct = document.getElementById('addproduct');
var cancel = document.getElementById('cancelAddproduct');
var upcomingproducts = document.getElementById('upcomingproducts');
var productHolder = document.getElementById('productHolder');

  $(newproductHolder).click(function () {
    $('#editproduct').css('visibility','hidden');
    $('#addproduct').css('visibility','visible');  
    $(productForm).slideDown(400);
    });
  
  $(productDate).datepicker();

  $(cancel).click(function () {
        $(productForm).slideUp(400);
    });
  
  

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
               itemDate = item['date'], 
               itemId = item['id'];
                        
                        $template = $($('#productListTemplate').html());
                        $template.find('input#idItem').val(itemId);
                        $template.find('h1').text(itemName.substring(0,20));
  
                        $template.find('#dateNumber').text(itemDate.slice(0,2));
                        $template.find('#dateDay').text(itemDate.slice(3,5));
                        $template.find('#productPrice').text(itemPrice);
                        $template.find('#productQuantity').text(itemQuantity);

                        $list.append($template);
                  
       });
       
   }
   init(data);

   $('#upcomingproducts .productHolder').each(function (i, el) {
      $(el).find('li i.removeproduct').on('click', function(event) {
      event.preventDefault();
      $(this).parent().parent().fadeOut(300, function () {
      $(this).parent().parent().remove();
      // changed();
       });
      
      })
    });

   $('#upcomingproducts .productHolder').each(function (i, el) {
      $(el).find('li i.editproduct').on('click', function(event) {
      event.preventDefault();
      var index = $(this).parent().parent().parent().parent().find('input').val();

      console.log($(this).parent().parent().parent().parent().find('input').val());

    
    
    $('#productDate').val(data[index]['date']);
    $('#productCategoryInput').val(data[index]['category']);;
    $('#productDiscontInput').val(data[index]['discont']); 
    $('#productPriceInput').val(data[index]['price']);
    $('#productQuantityInput').val(data[index]['quantity']);
    
    $('#productTitleInput').val(data[index]['name']);
    $('#productDescriptionInput').val(data[index]['snippet']);
    $('#editproduct').css('visibility','visible');  
    $('#addproduct').css('visibility','hidden');  

      $(productForm).slideDown(400);
      
      })
    });



  $("#addproduct").click(function(){
    $template = $($('#productListTemplate').html());
    $template.find('h1').text($('#productTitleInput').val().substring(0,20));
  
    $template.find('#dateNumber').text($('#productDate').val().slice(0,2));
    $template.find('#dateDay').text($('#productDate').val().slice(3,5));
    $template.find('#productPrice').text($('#productPriceInput').val());
    $template.find('#productQuantity').text($('#productQuantityInput').val());

    $list.append($template);

    var index = data.length;
    
    var item = {};

    item['id'] = index;
    item['sku'] = 'SCU00'+index;
    item['date'] = $('#productDate').val();
    item['category'] = $('#productCategoryInput').val();
    item['discont'] = $('#productDiscontInput').val(); 
    item['price'] = $('#productPriceInput').val();
    item['quantity'] = $('#productQuantityInput').val();
    item['impriceUrl'] = ["/images/1.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"];
    item['name'] = $('#productTitleInput').val();
    item['snippet'] = $('#productDescriptionInput').val();
       
    data.push(item);
   
    console.log(data.length);
    console.log(data[20].name);
    $(productForm).slideUp(400);
  })

});

