var request = new XMLHttpRequest();  

request.open("GET",'/shopdata',true);
request.send();

request.onreadystatechange = function() {
      if (request.readyState != 4) return;
            // 4. Если код ответа сервера не 200, то это ошибка
            if (request.status != 200) {
                  // обработать ошибку
                  alert(request.status + ': ' + request.statusText);
            } else {
                  // вывести результат
                  //alert(request.responseText);
                  //document.getElementById("printResult").innerHTML = "<b>"+request.responseText+"</b>"; 
                  var jsonObject = JSON.parse(request.responseText);

                  
                  //var jsonObject = request.responseText;
                  //document.getElementById("printResult").innerHTML = "<b>"+jsonObject.length+"</b>"; 
                   /*                
                  for(var i = 0; i < jsonObject.length; i++) {
                        var obj = jsonObject[i];

                        console.log(obj.name);
                    }*/

                  var content = document.getElementById("printResult");
                  var h1, p, img, span;

                  for(var i=0; i<jsonObject.length;i++){

                   var item = jsonObject[i];
                   //console.log(item);

                   for (var k in item) {

                        var itemName = item['name'], 
                            itemDescription = item['snippet'], 
                            itemPrice = item['price'], 
                            itemImg = item['impriceUrl'], 
                            itemId = item['id'], 
                            
                        h1 = document.createElement('h1');
                        p = document.createElement('p');
                        span = document.createElement('span');
                        img = document.createElement('img');
                        h1.appendChild(document.createTextNode(itemName));
                        span.appendChild(document.createTextNode(itemPrice));
                        img.setAttribute('src', itemImg);

                        content.appendChild(h1);
                        content.appendChild(span);
                        content.appendChild(img);

                    }
                  }

            }
      }

