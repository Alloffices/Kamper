$(document).ready(function() {
	$('.fa-code').click(function() {
		if ($(window).width() <= 833){	
			$('#sub_navs').slideToggle();
		}
	});

	$('#sub_navs').click(function() {
		$('#sub_navs').slideToggle();
	});

	$(window).resize(function() {
  	if($(window).width() >= 832.5){
  		$('#sub_navs').hide();	
  	}
	});
});