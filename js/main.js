$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('.lock');
	});
	$('.slider').slick({
		arrows:true,
		dots:true,
		autoplay:false,
		spedd:500,
	});


	$('.tab-pane').lightGallery({
		selector:'a'
	});

	// $("[id^=lightgallery]").lightGallery({ /* no need to loop, just select elements which starting with "lightgallery" */
 //    	pager: true,
 //    	selector: 'a' /* we need to show which elements are our items (to not assume h4 as a slider item [reason of "data-src is not pvovided on slide item 1" error]) */
 //  	});
	/*$('#profile-tab').click(function(event) {
		$('#profile').toggleClass('show')
	});*/
});