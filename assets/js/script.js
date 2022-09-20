$(document).ready(function(){

  $('.work-img-box').hide();


     

  $(function() {
    $('#selector').mouseenter(function() {
      $('.work-img-box').show();
      console.log("Inside");
    });
  });

  $(function() {
    $('.about-section').mouseenter(function() {
      $('.work-img-box').hide();
    });
  });




  $(function() {
    $('.white-bottom').mouseenter(function() {
      $('.work-img-box').hide();
    });
  });

  $(function() {
    $('.footer-section').mouseenter(function() {
      $('.work-img-box').hide();
    });
  });




  $('.move-img').hide();

    
      $('.work-card').mouseenter(function(){
        var $imgsrc =  $(this).children('.work-img').attr("src");
        $('.move-img').fadeIn("slow"); 
       $('.move-img').attr("src",$imgsrc);

    });




    var $circle = $('#move-box');

function moveCircle(e) {
	TweenLite.to($circle, 0, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);




    


});