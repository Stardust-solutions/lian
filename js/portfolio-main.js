$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:false,
		autoplay:false,
		spedd:500,
	});
	$('.slider-small').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		arrows:false,
		dots:false,
		asNavFor: '.slider-little'
	});
	$('.slider-little').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
		arrows:false,
		dots:false,
		asNavFor: '.slider-small',
		centerMode: true,
  		focusOnSelect: true
	});
	$('#slider__share1').click(function() {
		$('#social__hover1').fadeToggle();
	});
	$('#slider__share2').click(function() {
		$('#social__hover2').fadeToggle();
	});
});