$(document).ready(function(){
    // (Selection).metodenya
    $('h1').css('color', 'green');
    $('#box1').css('color', 'blue');
    $('.boxes').css('color', 'red');
    $('.boxes:first').css('color', 'blue');
    $('.boxes:last').css('color', 'green');
    $('.boxes:eq(2)').css('color', 'red');

    //Event
    $('h1').click(function(){
        $('h1').css('color', 'black');
        $('img').css('width', '500');
    });
    $('.boxes').mouseenter(function(){
        $(this).css('color', 'black')
    })

    // 
});

