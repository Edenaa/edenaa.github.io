$(document).ready(function() {
    $('#open_menu_btn').click(function() {
        $('#mobile_main_menu').show();
    });
    $('#close_menu_btn').click(function() {
        $('#mobile_main_menu').hide();
    });

    // toogle active class for head menu
    $('.open_list_link').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('.head_menu_sublist').slideToggle();
        $(this).siblings('.nav_list').slideToggle();
        $(this).toggleClass('active');
    });

    $('.activate_link').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.head_menu_sublist_item').siblings('.head_menu_sublist_item').removeClass('active');
        $(this).closest('.head_menu_sublist_item').siblings('.head_menu_sublist_item').find('.wrap_sublists').removeClass('active');
        $(this).siblings('.wrap_sublists').toggleClass('active');
        $(this).closest('.head_menu_sublist_item').toggleClass('active');
    })

    $('.nav_list_link.activate_links').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.nav_list_item').siblings('li').removeClass('active');
        $(this).closest('.nav_sublist_catalog').siblings('li').removeClass('active');
        $(this).closest('.nav_list_item').toggleClass('active');
        $(this).siblings('.nav_sublist_catalog').toggleClass('active');
    });
    
    $('#seach_input').focus(function() {
        $('#searchform label').hide();
    });
    $( "#seach_input" ).blur(function(){ 
        $("#searchform label").show(); 
    }); 
});