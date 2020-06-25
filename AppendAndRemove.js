// Get Dan Set Nilai
$(document).ready(function(){

    // Menambah di dalam element
    // append prepend
    $('#wrap_boxes').append('<div>Append</div>');
    $('#wrap_boxes').prepend('<div>Prepend</div>');
    
    // Menambah di luar element
    $('#wrap_boxes').after('<div><b>after</b></div>');
    $('#wrap_boxes').before('<div><b>before</b></div>');
    
    // Menghapus Element Beserta Isinya
    $('#wrap_boxes').remove();

    // Menghapus isi element tanpa menghapus element tersebut
    $('#box1').empty();
    $('#box1').append('Selamat Datang');
});