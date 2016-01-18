(function($) {

	$(document).ready(function() {

		$('.second .button').live('click', function(){
			$('#pop-up-shop').fadeIn('slow');
		});

		$('.close').live('click', function(){
			$('#pop-up-shop, #pop-up-images, #pop-up-upload-photo').fadeOut('slow');
			location.hash = '';
		});

		$('.js-scroll-to').live('click', function(){
			 if($(this).parent().attr('id') == 'main-menu'){
				if(!$(this).hasClass('image')){
			  		item_id = $(this).attr('data-id');
			  		$('.item').removeClass('active'); 
			  		$(this).addClass('active');
				  	$('html,body').animate({
				        scrollTop: $("." + item_id).offset().top},
				    'slow');
				}
				else {
				  	$('html,body').animate({
				        scrollTop: 0},
				    'slow');
				}
			}
			else {
				if(!$(this).hasClass('image')){
			  		item_id = $(this).attr('data-id');
			  		//console.log(item_id);
					$('html,body').animate({
				    	scrollTop: $("." + item_id).offset().top},
					'slow');
				}
				else {
				  	$('html,body').animate({
				        scrollTop: 0},
				    'slow');
				}
			}


		});

		$('#main-menu-image').live('click', function(){

			if($('#main-menu').is(':hidden')) {
				$('#main-menu').fadeIn('slow');
			}
			else {
				$('#main-menu').fadeOut('slow');
			}
			
		});

		$('.second-menu .item').live('click', function(){
			$('.second-menu').removeClass('active');
			$(this).parent().addClass('active');
		});

		$('#pop-up-images .next').live('click', function() {
			active = $('#pop-up-images').find('.image-and-like.active');

			if(active.next().hasClass('last')) {
				$('.next').addClass('not-active');
			}

			if($('.image-and-like:first').hasClass('active')) {
				$('.prev').removeClass('not-active');
			}

			if(!$('#pop-up-images .image-and-like:last').hasClass('active')) {
				$('.image-and-like').removeClass('active');
				active.next().addClass('active');
			}

		});

		$('#pop-up-images .prev').live('click', function() {
			active = $('#pop-up-images').find('.image-and-like.active');

			if(active.prev().hasClass('first')) {
				$('.prev').addClass('not-active');
			}

			if($('.image-and-like:last').hasClass('active')) {
				$('.next').removeClass('not-active');
			}

			if(!$('#pop-up-images .image-and-like:first').hasClass('active')) {
				$('.image-and-like').removeClass('active');
				active.prev().addClass('active');
			}

		});

		$('.photo-load .button').live('click', function(e){
			e.preventDefault();

			$('#file-upload').click();
		});

		// $('.fifth .button').live('click', function(){

		 	//$('#pop-up-upload-photo').fadeIn('slow');

		// });


	});


	jQuery(window).scroll(function() {
		var current_scroll_position = jQuery(document).scrollTop();

		if(current_scroll_position >= 200) {
			$('#main-menu').fadeOut('slow');
			$('#main-menu-image').fadeIn('slow');
		}

		if (current_scroll_position < 200) {
			$('#main-menu').fadeIn('slow');
			$('#main-menu-image').fadeOut('slow');
		}

		if(current_scroll_position >= jQuery('.second').offset().top){
			$('#main-menu .item').removeClass('active');
			$('#main-menu .item-1').addClass('active');

			$('.second-menu').removeClass('active');
			$('.second-menu-1').addClass('active');
		}
		if(current_scroll_position >= jQuery('.third').offset().top){
			$('#main-menu .item').removeClass('active');
			$('#main-menu .item-2').addClass('active');

			$('.second-menu').removeClass('active');
			$('.second-menu-2').addClass('active');
		}
		if(current_scroll_position >= jQuery('.fourth').offset().top){
			$('#main-menu .item').removeClass('active');
			$('#main-menu .item-3').addClass('active');

			$('.second-menu').removeClass('active');
			$('.second-menu-3').addClass('active');
		}
		if(current_scroll_position >= jQuery('.fifth').offset().top){
			$('#main-menu .item').removeClass('active');
			$('#main-menu .item-5').addClass('active');

			$('.second-menu').removeClass('active');
			$('.second-menu-5').addClass('active');
		}
		if(current_scroll_position >= jQuery('.sixth').offset().top){
			$('#main-menu .item').removeClass('active');
			$('#main-menu .item-4').addClass('active');

			$('.second-menu').removeClass('active');
			$('.second-menu-4').addClass('active');
		}

	});
  
})(jQuery);