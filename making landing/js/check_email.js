function check_email(element) {
    
    var emailval  = $("#email").val();
    var mailvalid = validateEmail(emailval);
    
    if(mailvalid == false) {
        $("#email").addClass("error");
    }
    else if(mailvalid == true){
        $("#email").removeClass("error");
    }
    
    if(mailvalid == true) {
        // если обе проверки пройдены
        // сначала мы скрываем кнопку отправки
        $("#f_send").replaceWith("<em>отправка...</em>");
    }
        
        $.ajax({
            url: $(element).attr("data-url"),
            data: {
                "csrfmiddlewaretoken": $(element).siblings("input[name='csrfmiddlewaretoken']").val(),
                "email": email
            },
            method: "POST",
            dataType: "json",
            success: function (returned_data) {
                if(returned_data.is_success) {
                    $("#f_contact").fadeOut("fast", function(){
                        $(this).before("<p><strong>Успешно! Ваше сообщение отправлено  :)</strong></p>");
                        setTimeout("$.fancybox.close()", 2000);
                    });
                }

                else {
                    $("#f_contact").fadeOut("fast", function(){
                        $(this).before("<p><strong>Что-то пошло не так! Попробуйте ещё раз. </strong></p>");
                        setTimeout("$.fancybox.close()", 2000);
                }
            }
        })
    }