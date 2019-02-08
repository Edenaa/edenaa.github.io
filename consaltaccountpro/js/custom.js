$(document).ready(function(){


    $('.menu__nav-trigger').on('click', function(){
		$('.menu__icon').toggleClass('is-clicked'); 
		$('.header-center_wrap').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			if( $('.menu-nav').hasClass('is-visible') ) {
				$('.menu-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
					$('body').removeClass('overflow-hidden');
				});
			} else {
				$('.menu-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
					$('body').addClass('overflow-hidden');
				});	
			}
		});
		
		$('.open_sub-nav').click(function() {
			$(this).parent().addClass('open');
		});
		$('.sub-nav').mouseleave(function() {
			$(this).parent().removeClass('open');
		})
});

$(".formFree, .formUnlock").submit(function(event) {

	event.preventDefault();
	var elem = $(this);

	$.ajax({
			url: "mail/mail.php",
			type: "POST",
			dataType: 'json',
			data: ({
					"company": $(this).find('input[name=company]').val(),
					"inn": $(this).find('input[name=inn]').val(),
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

$(".formFooter, .modalAccount").submit(function(event) {

	event.preventDefault();
	var elem = $(this);
	
	$.ajax({
			url: "mail/mail.php",
			type: "POST",
			dataType: 'json',
			data: ({
					"name": $(this).find('input[name=name]').val(),
					"tel": $(this).find('input[name=tel]').val(),
					"email": $(this).find('input[name=email]').val(),
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

$(".modalVerify").submit(function(event) {

	event.preventDefault();
	var elem = $(this);

	$.ajax({
			url: "mail/mail.php",
			type: "POST",
			dataType: 'json',
			data: ({
					"inn": $(this).find('input[name=inn]').val(),
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

$(".formWhat, .formLegal, .formRegistration").submit(function(event) {

	event.preventDefault();
	var elem = $(this);

	$.ajax({
			url: "mail/mail.php",
			type: "POST",
			dataType: 'json',
			data: ({
					"name": $(this).find('input[name=name]').val(),
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