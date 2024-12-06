$(document).ready(function(){
    $('.menu__link').on('click',function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: $($(this).attr('href')).offset().top},900);
    });

    $('.header__btn').on('click',function(){
        $('body').addClass('off-scroll');
        $('.model-window').fadeIn();
    })

    $('.model-window__content-btn').on('click',function(){
        $('body').removeClass('off-scroll');
        $('.model-window').hide();
    });

    $(window).resize(function(){
       var modalWindow =  $('.model-window');
       if($(this).width() > 578 && modalWindow.css('display') !== 'none'){
           $('body').removeClass('off-scroll');
           modalWindow.hide();
       }
    });

    $('.model-window__content-link').on('click',function(e){
        e.preventDefault();
        $('.model-window').hide();
        $('body').removeClass('off-scroll');
        $('body,html').animate({scrollTop: $($(this).attr('href')).offset().top},900);
    })
});