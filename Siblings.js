// Siblings
// Dengan method siblings() kita dapat menampilkan semua elemen sibling, 
// yakni elemen yang memiliki tingkatan level yang sama dengan elemen yang menjadi triggernya
 
$(document).ready(function(){

    // Next - nextAll - nextUntil ('parameter')
    $('#nodeJS').siblings().css('color', 'blue');
    $('#nodeJS').nextAll().css('color', 'red');
    $('#nodeJS').next().css('color', 'cyan');
    $('#Python').nextUntil('#PHP').css('color', 'green');
    
    // prev - prevAll - prevUntil ('parameter')
    $('#nodeJS').prevAll().css('color', 'red');
    $('#nodeJS').prev().css('color', 'cyan');
    $('#PHP').prevUntil('#nodeJS').css('color', 'green');
    

});