$(document).ready(function () {
    $('#login').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  
  $('#signin').on('click', function () {
        $('#loginbox').toggleClass('on');
  });  
  
  $('#signup').on('click', function () {
        $('#loginbox').toggleClass('on');
  });

   $('.toggle').click(function () {
    $(this).children('i').toggleClass('fa-pencil');
    $('.form').animate({
        height: 'toggle',
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, 'slow');
  });  
  
  var user,pass;
        $("#signin").click(function(){
          user=$("#user").val();
          pass=$("#password").val();
          $.post("http://localhost:3000/login",{user: user,password: pass}, function(data){
            if(data==='done')
              {
                console.log("login success");
              }
          });
        });
});

