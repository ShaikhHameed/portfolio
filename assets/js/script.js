$(document).ready(function(){

  $(function() {
    $('#selector').mouseenter(function() {
      $('.work-img-box').fadeIn("fast");
    });
  });

  $(function() {
    $('.no-img-box').mouseenter(function() {
      $('.work-img-box').fadeOut("fast");
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
	TweenLite.to($circle, 0.5, {
    css: {
      left: (e.pageX + 50),
      top: (e.pageY + 20)
    }
  });
}

$(window).on('mousemove', moveCircle);




    


});
