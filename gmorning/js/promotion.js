
$(document).ready(function(){


    $('.menu__nav-trigger').on('click', function(){
		$('.menu__icon').toggleClass('is-clicked'); 
		$('.header_top').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.menu_primary-nav').hasClass('is-visible') ) {
			$('.menu_primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.menu_primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
    });
    $('.slider_top').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.slider_center').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                }
            }] 
    });
});

$(".audit, .contract").submit(function(event) {

    event.preventDefault();
    var elem = $(this);
    
    $.ajax({
        url: "mail/mail.php",
        type: "POST",
        dataType: 'json',
        data: ({
            "tel": $(this).find('input[name=tel]').val(),
            "type": $(this).find('input[name=type]').val()
        }),
        success: function(data) {
            if(data.success) {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<h2 class='modal-order-complete__title'>Ваша заявка принята</h2><i class='fas fa-check'></i><p class='modal-order-complete__title'>Проверьте почту</p>");
                    setTimeout("$.fancybox.close()", 5000);
                });
            }
            else {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<p><strong>Неуспешно! Ваше сообщение не отправлено  :)</strong></p>");
                    setTimeout("$.fancybox.close()", 5000);

                });
            }
        }
    });
});


$(".full").submit(function(event) {

    event.preventDefault();
    var elem = $(this);

    $.ajax({
        url: "mail/mail.php",
        type: "POST",
        dataType: 'json',
        data: ({
            "name": $(this).find('input[name=name]').val(),
            "tel": $(this).find('input[name=phone]').val(),
            "email": $(this).find('input[name=mail]').val(),
            "type": $(this).find('input[name=type]').val()
        }),
        success: function(data) {
            if(data.success) {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<h2 class='modal-order-complete__title'>Ваша заявка принята</h2><i class='fas fa-check'></i><p class='modal-order-complete__title'>Проверьте почту</p>");
                    setTimeout("$.fancybox.close()", 5000);
                });
            }
            else {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<p><strong>Неуспешно! Ваше сообщение не отправлено  :)</strong></p>");
                    setTimeout("$.fancybox.close()", 5000);

                });
            }
        }
    });
});

$("#modalfull").submit(function(event) {

    event.preventDefault();
    var elem = $(this);

    $.ajax({
        url: "mail/mail.php",
        type: "POST",
        dataType: 'json',
        data: ({
            "name": elem.find('input[name=name]').val(),
            "tel": elem.find('input[name=phone]').val(),
            "scope": elem.find('input[name=scope]').val(),
            "site": elem.find('input[name=site]').val(),
            "type": elem.find('input[name=type]').val()
        }),
        success: function(data) {
            if(data.success) {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<h2 class='modal-order-complete__title'>Ваша заявка принята</h2><i class='fas fa-check'></i><p class='modal-order-complete__title'>Проверьте почту</p>");
                    setTimeout("$.fancybox.close()", 5000);
                });
            }
            else {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<p><strong>Неуспешно! Ваше сообщение не отправлено  :)</strong></p>");
                    setTimeout("$.fancybox.close()", 5000);

                });
            }
        }
    });
});

$(".modalAd").submit(function(event) {

    event.preventDefault();
    var elem = $(this);
    
    $.ajax({
        url: "mail/mail.php",
        type: "POST",
        dataType: 'json',
        data: ({
            "name": $(this).find('input[name=name]').val(),
            "tel": $(this).find('input[name=phone]').val(),
            "type": $(this).find('input[name=type]').val()
        }),
        success: function(data) {
            if(data.success) {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<h2 class='modal-order-complete__title'>Ваша заявка принята</h2><i class='fas fa-check'></i><p class='modal-order-complete__title'>Проверьте почту</p>");
                    setTimeout("$.fancybox.close()", 5000);
                });
            }
            else {
                $(elem).fadeOut("slow", function(){
                    $(this).before("<p><strong>Неуспешно! Ваше сообщение не отправлено  :)</strong></p>");
                    setTimeout("$.fancybox.close()", 5000);

                });
            }
        }
    });
});