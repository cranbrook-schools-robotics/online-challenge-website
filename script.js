
$(document).ready(function(){

    $('div[data-type="parallax"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {

            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
            if ($(window).scrollTop() < $(window).height()-1000) {
                $('#navBar').removeClass('navBar-fixed');
                $('#navBar').addClass('navBar-absolute');
                $('#bar').removeClass('bar-fixed');
                $('#bar').addClass('bar-absolute');
            }
            if ($(window).scrollTop() > $(window).height()-1000) {
                $('#navBar').removeClass('navBar-absolute');
                $('#navBar').addClass('navBar-fixed');
                $('#bar').removeClass('bar-absolute');
                $('#bar').addClass('bar-fixed');
            }
        }); 
    });    
});