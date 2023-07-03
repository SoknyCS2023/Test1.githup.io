$(document).ready(function(){
    // Dropdown menu
    $('.top-menu').on('mouseover','ul li',function(){
        let eThis = $(this);
        eThis.find('.sub-menu').slideDown(200);
    });
    
    $('.top-menu').on('mouseleave','ul li',function(){
        let eThis = $(this);
        eThis.find('.sub-menu').slideUp(500);
    });

    // menu
    $('#toggle').click(function(){
        $('.top-menu').toggle(300);
    });

    // Formg login
    $('#btn').click(function(){
        $('#form').toggle(100);
    })

    // search
    $('#icon').click(function(){
        $('.input').toggle(100);
    });
});