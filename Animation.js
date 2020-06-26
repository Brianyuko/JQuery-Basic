// Animation
$(document).ready(function(){

    // hide - show - toggle
    $('#showBtn').click(function(){
        $('#box1').show();
    });

    $('#hideBtn').click(function(){
        $('#box1').hide();
    });

    $('#toggleBtn').click(function(){
        $('#box1').toggle();
    });

   // fadeIn - fadeOut - fadeTo(time, opacity(1-0)) - fadeToggle
   $('#fadeInBtn').click(function(){
        $('#box1').fadeIn(3000);
    });

    $('#fadeOutBtn').click(function(){
        $('#box1').fadeOut(3000);
    });

    $('#fadeToOutBtn').click(function(){
        $('#box1').fadeTo(5000, 0.5);
    });

    $('#fadeToInBtn').click(function(){
        $('#box1').fadeTo(5000, 1);
    });

    $('#fadeToggleBtn').click(function(){
        $('#box1').fadeToggle();
    });

   // slideUp - slideDown - slideToggle
   $('#slideUpBtn').click(function(){
        $('#box1').slideUp(3000);
    });

    $('#slideDownBtn').click(function(){
        $('#box1').slideDown(function(){
            // Callback
            alert('Ini Callback');
        });
    });

    $('#slideToggleBtn').click(function(){
        $('#box1').slideToggle();
    });

    // Stop Animation
    $('#stopBtn').click(function(){
        $('#box1').stop();
    });

    $('#chainingBtn').click(function(){
        $('#box1').fadeTo(3000, 0).fadeTo(3000, 1).fadeTo(3000, 0).fadeTo(3000, 1);
    });
});