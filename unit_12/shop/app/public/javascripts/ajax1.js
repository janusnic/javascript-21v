function startAjax(url,method){
  var request; 
  if(window.XMLHttpRequest){ 
      request = new XMLHttpRequest(); 
  } else if(window.ActiveXObject){ 
      request = new ActiveXObject("Microsoft.XMLHTTP");  
  } else { 
      return; 
  } 
  document.getElementById("console").innerHTML = ''; 
  request.onreadystatechange = function(){
    
    switch (request.readyState) {
      case 1: print_console("<br/><em>1: вызван open...</em>"); break
      case 2: print_console("<br/><em>2: получены заголовки...</em>"); break
      case 3: print_console("<br/><em>3: загружается тело..</em>"); break
      case 4:{
       if(request.status==200){   
            print_console("<br/><em>4: запрос завершён</em>"); 
            document.getElementById("printResult").innerHTML = "<b>"+request.responseText+"</b>"; 
           }else if(request.status==404){
            alert("HTTP Status: 404 : NOT FOUND!");
           }
            else alert("текущее состояние запроса: "+ request.status);
       
      break
      }
    }   
    } 
  
  //
  if (method=="GET")
  {
    request.open("GET",url+"?id=1&token=sadsf4&geo=us",true);
  }
  else
  {
  request.open("POST",url+"?id=2&token=sadsf4&geo=us",true);
  }
  
  request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  
  request.send();
  } 
  function print_console(text){
    document.getElementById("console").innerHTML += text; 
  }