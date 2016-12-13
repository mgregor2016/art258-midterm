$(document).ready(function(){
  $('.responsive').slick({
    infinite: true

  });
});

$('.menu').click(function(){
    $(this).text('Close');
    $('#container').animate({height:'150px'}, 500);});

    $('.menu').click(function() {


 if ($(this).hasClass('menu—open')) {
    $(this).removeClass('menu—open');

    $(this).text('Close');

  } else {
    $(this).addClass('menu—open');

    $(this).text('Menu');
  }
});

$('.multiple-items').slick({
  autoplay: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.dropdown').click(function(e){
	e.preventDefault();
	$(this).find('.sub_navigation').slideToggle();
});

$('.name').click(function(){
  $('.info1').show();
});

$('.X1').click(function(){
    $('.info1').hide();
});
$('.exit1').click(function(){
    $('.info1').hide();

});

$('.image1').click(function(){
  $('.left').show();
  $('.right').show();
});

$('.X5').click(function(){
  $('.left').hide();
  $('.right').hide();
});
$('.exit5').click(function(){
  $('.left').hide();
  $('.right').hide();

});

$('.image2').click(function(){
  $('.left').show();
  $('.right').show();
});

$('.X5').click(function(){
  $('.left').hide();
  $('.right').hide();
});
$('.exit5').click(function(){
  $('.left').hide();
  $('.right').hide();

});

$('.image3').click(function(){
  $('.left').show();
  $('.right').show();
});

$('.X5').click(function(){
  $('.left').hide();
  $('.right').hide();
});
$('.exit5').click(function(){
  $('.left').hide();
  $('.right').hide();
  });


/*$('.menu').click(function() {
  $(this).text("Close");
});*/
