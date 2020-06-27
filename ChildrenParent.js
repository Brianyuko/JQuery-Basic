$(document).ready(function(){

  // Children -> Satu level (anak pertama) dibawah parent
  //$('ul').children().css('color', 'red');
  $('ul').children('span').css('color', 'red');
  
  // Find -> Semua Children dari parent
  $('div').find('p').css('color', 'red');

  // Parent dari id listPertama
  $('#listPertama').parent().css('background', 'cyan');

  // Parents -> semua parent akan kena
  // Parents('parameter') -> milih parent nya sampai mana
  $('#nodeJS').parents().css('border', '0.5px solid green');
  
  // parentsUntil('parameter')
  $('#nodeJS').parentsUntil('#divPertama').css('background', 'pink');
  //$('#nodeJS').parentsUntil('#divKedua').css('border', '2px solid red');
  //$('#nodeJS').parentsUntil('#divKetiga').css('border', '2px solid red');
  //$('#nodeJS').parentsUntil('#divKeempat').css('border', '2px solid red');



});