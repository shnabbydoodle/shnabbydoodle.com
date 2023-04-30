/** old parallaxing stuff, irrelevant now (4/23/23 6pm)
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $('.video-container').css('top', -(scrollTop * 0.2) + 'px');
    });
});
 */
function theBeastREVEALED() {
    var x = document.getElementById("theBeast");
        x.style.opacity = 1;
        setInterval(function() {
           var opacity = x.style.opacity;
           if (opacity > 0) {
              opacity -= 0.1;
              x.style.opacity = opacity;
           }
        }, 200);
 
  }