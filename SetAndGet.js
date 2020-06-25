// Get Dan Set Nilai
$(document).ready(function(){

    $('form').submit(function(){
        var text = $('#inputText').val();
        $('h1').text(text);
        // Mencegah Sifat

    // .html() set dan get lengkap dengan tag nya
        event.preventDefault();
    })

})