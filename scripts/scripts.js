$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $('.video-container').css('top', -(scrollTop * 0.2) + 'px');
    });
});