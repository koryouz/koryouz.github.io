$(function(){
  $('#experiences').hide();
  $('#education').hide();
  $('#hobbies').hide();

  $('#aboutButton').click(function(){
    $('#experiences, #education, #hobbies').hide();
    $('#about').show();
  });

  $('#experiencesButton').click(function(){
    $('#about, #education, #hobbies').hide();
    $('#experiences').show();
  });

  $('#educationButton').click(function(){
    $('#about, #experiences,#hobbies').hide();
    $('#education').show();
  });

  $('#hobbiesButton').click(function(){
    $('#about, #experiences, #education').hide();
    $('#hobbies').show();
  });
});
