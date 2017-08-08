//Handles the Inputsubmit
function handleInput() {
  $('form').submit(function(event){
    event.preventDefault();
    var question = '\''+$(this).find('#questionin').val()+'\'';
    var answers =  ['\''+$(this).find('#answer1').val()+'\'','\''+$(this).find('#answer2').val()+'\'',
    '\''+$(this).find('#answer3').val()+'\'','\''+$(this).find('#answer4').val()+'\''];

    renderOut(question, answers, $('code').text() === '');
  });
}

function renderOut(question, answers,isfirst){
  var first = '{question: ';
  if(!isfirst){
    first ='\n{question: ';
  }
  $('.output').append(first+question+',\n'+
  'answers: ['+answers+'],\n'+
  'correctanswer: '+answers[0]+',\n'+
  'wasasked: false,},');
  $('form input').val('');
}

$(function() {
  handleInput();
});
