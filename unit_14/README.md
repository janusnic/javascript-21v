# javascript-21v unit 14

layout.jade
------------

  script(id='cartPay' type='text/template').
      <div class="popup-wrap">
      <div class="popup-box">
      <h2>Title of Popup</h2>
      <h3>A sub-heading for the popup with a little description.</h3>
      <form method="post" action="/payment">
      <input type="text" name="user">
      <input type="text" name="email">
      <input type="submit" value="Submit">
      </form>
      <a class="close-btn popup-close" href="#">x</a>
      </div>
      </div>


app.js
------
      app.post('/payment',function(req,res){
        var user_name=req.body.user;
        var email=req.body.email;
        console.log("From Client pOST request: User name = "+user_name+" and email is "+email);
        res.end("yes");
      });

index.js
--------
      router.post('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
      });


JavaScript Serialize Form Data .serialize()
===========================================
Преобразует значения набора элементов в строку данных.

Метод .serialize() возвращает строку пригодную для передачи через URL строку. Данные могут собираться с многих объектов jQuery, включая input, textarea и select:

     $( "input, textarea, select" ).serialize();

С помощью метода .serialize() можно очень быстро и просто собрать данные с формы:


      $( "form" ).on( "submit", function( event ) {

        event.preventDefault();

        console.log( $(this).serialize() );

      });


выборка вложенных элементов формы может привести к появлению дубликатов в возвращаемой строке.

все элементы "подходящие" для отправки, могут быть сериализованы. Если форма была отправлена не с помощью кнопки submit, то в строке её значения не будет. Для успешной сериализации элемент формы должен содержать атрибут name. Значения чекбоксов, радио кнопок будет включено в строку, если они были выделены.

        <!DOCTYPE html>
        <html>
        <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script>
        $(document).ready(function(){
            $("button").click(function(){
                $("div").text($("form").serialize());
            });
        });
        </script>
        </head>
        <body>

        <form action="">
          First name: <input type="text" name="FirstName" value="Mickey"><br>
          Last name: <input type="text" name="LastName" value="Mouse"><br>
        </form>

        <button>Serialize form values</button>

        <div></div>

        </body>
        </html>

Преобразование элементов формы для отправки через Ajax запрос.
--------------------------------------------------------------

        <form>
          <select name="single">
            <option>Single</option>
            <option>Single2</option>
          </select>
          <br />

          <select name="multiple" multiple="multiple">
            <option selected="selected">Multiple</option>
            <option>Multiple2</option>
            <option selected="selected">Multiple3</option>
          </select>
          <br/>
          <input type="checkbox" name="check" value="check1" id="ch1"/>
          <label for="ch1">check1</label>
          <input type="checkbox" name="check" value="check2" checked="checked" id="ch2"/>
          <label for="ch2">check2</label>
          <br />
          <input type="radio" name="radio" value="radio1" checked="checked" id="r1"/>
          <label for="r1">radio1</label>
          <input type="radio" name="radio" value="radio2" id="r2"/>
          <label for="r2">radio2</label>
        </form>
        <p><tt id="results"></tt></p>

        JS:

        function showValues() {
          var str = $("form").serialize();
          $("#results").text( str );
        }

        $("input[type='checkbox'], input[type='radio']").on( "click", showValues );
        $("select").on( "change", showValues );
        showValues();


layout.jade
-----------

   script(id='cartPay' type='text/template').
      <div class="popup-wrap">
      <div class="popup-box">
      <h2>Title of Popup</h2>
      <h3>A sub-heading for the popup with a little description.</h3>
      <form id='payform'>
      <input type="text" name="user">
      <input type="text" name="email">
      </form>

      <button id='pay-button'>Pay Now</button>
      
      <a class="close-btn popup-close" href="#">x</a>
      </div>
      </div>


app.js
------

      app.post('/payment',function(req,res){
        var user_name=req.body.user;
        var email=req.body.email;
        
        var jstr = JSON.stringify(data);
        var jo = JSON.parse(jstr);

        console.log(jo.name, jo.email.toISOString());

        console.log("From Client pOST request: User name = "+user_name+" and email is "+email);
        res.send({redirect: '/'});
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



search
=======
    
    #sidebar
          a(class='cart-link' href='#')
            span(class='cart-text fontawesome-shopping-cart')
            span Cart
          input#search(type="search", placeholder="Search Catalog")
    

    #search {
      text-align: center;
      width:100%;
      height: 50px;
      font-size:1.5em;
      border-radius:8px;
    }

catalog.js (client-side)

    $(function(){
     $('#search').on('keyup', function(e){
       if(e.keyCode === 13) {
         var parameters = { search: $(this).val() };
           $.get( '/searching',parameters, function(data) {
           $('#results').html(data);
         });
        };
     });
    });


testing the route
------------------
app.js (server-side) redux

    app.get('/searching', function(req, res){
     // testing the route
     res.send("WHEEE");
    });


        div#grid-selector
          #results Result



    app.get('/searching', function(req, res){

     // input value from search
     var val = req.query.search;
     console.log(val);

    // testing the route
    // res.send("WHEEE");

    });

app.js:
-------
    // searching
    app.get('/searching', function(req, res){
         var val = req.query.search;
         console.log(val);

         fs.readFile(path.join(__dirname,'public/ajax/products.json'), 'utf8', function(err, data){
            if (err) throw err;
            var result = JSON.parse(data);
            console.log(result);
        
      })



      // searching
      app.get('/searching', function(req, res){
           var val = req.query.search;

           console.log(val);

           fs.readFile(path.join(__dirname,'public/ajax/products.json'), 'utf8', function(err, data){
              if (err) throw err;
              
              var result = JSON.parse(data);
              console.log(result[0]['name']);
              
              res.send(result[0]['name']);

        })


      // searching
      app.get('/searching', function(req, res){
           var val = req.query.search;
           var search_result;
           console.log(val);

           fs.readFile(path.join(__dirname,'public/ajax/products.json'), 'utf8', function(err, data){
              if (err) throw err;
              
              var result = JSON.parse(data);
              console.log(result[0]['name']);
              if (val!='Motorola') {
                search_result = "No results found. Try again.";
              } else {
                search_result = result[0]['name'];
              }
              res.send(search_result);
        })        


      // searching
      app.get('/searching', function(req, res){
           var val = req.query.search;
           console.log(val);

           var state = [];
           var result = JSON.parse(fs.readFileSync(path.join(__dirname,'public/ajax/products.json'), 'utf8'));

           for (var i in result) {
                
              state.push({name:result[i].name, price:result[i].price});
           
          }
          console.log(state);
        })        

JavaScript String search() Method
=================================

search
======

      idx = str.search(regexp)

regexp
-------
объект типа RegExp или строка

Этот метод удобен, когда нужно проверить, есть ли совпадения с регулярным выражением (аналогично RegExp#test).

Чтобы получить больше информации, используйте более медленный метод match (или родственный ему метод RegExp#exec).

JavaScript Code:

      <script type="text/javascript">
          var myRegExp = /Alex/;
          var string1 = "Today John went to the store and talked with Alex.";
          var matchPos1 = string1.search(myRegExp);

          if(matchPos1 != -1)
            document.write("There was a match at position " + matchPos1); 
          else
            document.write("There was no match in the first string");

      </script>


Проверка на совпадение
-----------------------
      function testinput(re, str){

         if (str.search(re) != -1)
            return true
         else
            return false
      }

      alert(testinput(/something/, "somestr")) // false


более лаконичный вид:
---------------------
      function testinput(re, str){return str.search(re) != -1 ? true : false}


JavaScript String search() Method
---------------------------------

        <html>
           <head>
              <title>JavaScript String search() Method</title>
           </head>
           
           <body>
           
              <script type="text/javascript">
                 var re = /apples/gi;
                 var str = "Apples are round, and apples are juicy.";
                 
                 if ( str.search(re) == -1 ){
                       document.write("Does not contain Apples" );
                    }
                    
                    else
                    {
                       document.write("Contains Apples" );
                    }
              </script>
              
           </body>
        </html>


JavaScript Code:
----------------

        <script type="text/javascript">
            var myRegExp = /Alex|John/;
            var string1 = "Today John went to the store and talked with Alex.";
            var matchPos1 = string1.search(myRegExp);

            if(matchPos1 != -1)
              document.write("There was a match at position " + matchPos1); 
            else
              document.write("There was no match in the first string");
        </script>


JavaScript Code:
-----------------

            <script type="text/javascript">
              var myRegExp1 = /Tom|Jan|Alex/;
              var string1 = "John went to the store and talked with Alexandra today.";
              var matchPos1 = string1.search(myRegExp1);

              if(matchPos1 != -1)
                document.write("The first string found a match at " + matchPos1);
              else
                document.write("No match was found in the first string"); 

              var myRegExp2 = /Tom|Jan|Alex /;
              var string2 = "John went to the store and talked with Alexandra today.";
              var matchPos2 = string2.search(myRegExp2);
              if(matchPos2 != -1)
                document.write("<br />The second string found a match at " + matchPos2); 
              else
                document.write("<br />No match was found in the second string");
                
              var myRegExp3 = /Tom|Jan|Alexandra/;
              var string3 = "John went to the store and talked with Alexandra today.";
              var matchPos3 = string3.search(myRegExp3);
              if(matchPos3 != -1)
                document.write("<br />The third string found a match at " + matchPos3); 
              else
                document.write("<br />No match was found in the third string");

              var myRegExp4 = /Tom|Jan|Alexandra/;
              var string4 = "John went to the store and talked with Alex today.";
              var matchPos4 = string4.search(myRegExp4);
              if(matchPos4 != -1)
                document.write("<br />The fourth string found a match at " + matchPos4); 
              else
                document.write("<br />No match was found in the fourth string");
            </script>


app.js
-------
      vapp.get('/searching', function(req, res){
           var val = req.query.search;
           var search_result;
           console.log(val);

           var state = [];
           var result = JSON.parse(fs.readFileSync(path.join(__dirname,'public/ajax/products.json'), 'utf8'));


           for (var i in result) {
            if (result[i].name.search(val)>=0) {
              state.push({name:result[i].name, price:result[i].price});
              }
           
          }
          console.log(state);


          app.get('/searching', function(req, res){
               var val = req.query.search;
               var search_result;
               console.log(val);

               var state = [];
               var result = JSON.parse(fs.readFileSync(path.join(__dirname,'public/ajax/products.json'), 'utf8'));

               for (var i in result) {
                if (result[i].name.search(val)>=0) {

                  state.push(result[i]);
                  }
               
              }
              console.log(state);

            // searching
            app.get('/searching', function(req, res){
                 var val = req.query.search;
                 var search_result;
                 console.log(val);

                 var state = [];
                 var result = JSON.parse(fs.readFileSync(path.join(__dirname,'public/ajax/products.json'), 'utf8'));
                 for (var i in result) {
                  if (result[i].name.search(val)>=0 || result[i].snippet.search(val)>=0) {
                    state.push(result[i]);
                    }
                 
                }
                console.log(state);
        


        for (var i in result) {
              if (result[i].name.toLowerCase().indexOf(val) != -1 || result[i].snippet.search(val)>=0) {
              //if (result[i].name.search(val)>=0 || result[i].snippet.search(val)>=0) {
             
                state.push(result[i]);
                }
            }
            
            res.send(state);
     

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

    eachProduct();
    addToCart();
    addToCartLarge();



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
  
