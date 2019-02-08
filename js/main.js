
$(document).ready(function(){
    $('.menu__nav-trigger').on('click', function(){
		$('.menu__icon').toggleClass('is-clicked'); 
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if( $('.menu-nav').hasClass('is-visible') ) {
            $('.menu-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').removeClass('overflow-hidden');
            });
            $('body').removeClass('overflow-hidden');
        } else {
            $('.menu-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                $('body').addClass('overflow-hidden');
            });	
            $('body').addClass('overflow-hidden');
        }
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()>120){
        $('#top').fadeIn(900)
    }else{
        $('#top').fadeOut(700)
    }
});