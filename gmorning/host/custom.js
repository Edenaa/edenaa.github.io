$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    //  isotope
    var $container = $('.portfolio_container');
    $container.isotope({
        filter: '*',
    });

    $('.portfolio_filter a').click(function () {
        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 500,
                animationEngine: "jquery"
            }
        });
        return false;
    });

    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
    $(".full").submit(function(event) {

        event.preventDefault();
        var elem = $(this);
        
        $.ajax({
            url: "mail/mail.php",
            type: "POST",
            dataType: 'json',
            data: {
                "name": $(this).find('input[name=name]').val(),
                "tel": $(this).find('input[name=phone]').val(),
                "email": $(this).find('input[name=mail]').val(),
                "type": $(this).find('input[name=type]').val()
            },
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
});