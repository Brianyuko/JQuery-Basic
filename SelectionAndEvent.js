$(document).ready(function(){
    // (Selection).metodenya
    $('h1').css('color', 'green');
    $('#box1').css('color', 'white');
    $('.boxes').css('color', 'red');
    $('.boxes:first').css('color', 'blue');
    $('.boxes:last').css('color', 'green');
    $('.boxes:eq(2)').css('color', 'red');

    //Event
    $('h1').click(function(){
        // Property lebih dari satu
        $('h1').css({
            'color': 'white',
            'fontSize': '30px',
            backgroundColor: 'blue'
        });
        $('img').css('width', '500')
        // Add Class
        //$('#wrap_boxes').addClass('change');
        
        // Toogle Class , Toogle Add, Remove Class
        $('#wrap_boxes').toggleClass('change');
    });

    $('.boxes').mouseenter(function(){
        $(this).css('color', 'black')
    });

    $('img').click(function(){
        //Remove Class
        //$('#wrap_boxes').removeClass('change');
        $(this).css('width', '300')
    });

    // Dimensi
    // Width/Height -> Content
    // innerWidth/Height -> Content + Padding
    // outerWidth/Height -> Content + Padding + Border
    // outerWidth/Height(true) -> Content + Padding + Border + Margin
    var nilaiBox1 = $('#box1').width();
    var ubahTinggi = $("#box1").height(120).width(120)
    $('#box1').text(nilaiBox1);
});

