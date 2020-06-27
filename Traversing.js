// Get Dan Set Nilai
$(document).ready(function(){

  // Traversing
  $('li').first().css('color', 'blue')
  // EQ -> Berdasarkan Index
  $('li').eq(2).css('color', 'blue')
  $('li').last().css('color', 'blue')
  
  // Filter -> Hanya yang dipilih
  $('li').filter('#nodeJS').css('color', 'green')
  
  // Not -> Selain yang dipilih
  $('li').not('#nodeJS').css('fontSize', '20px')
})