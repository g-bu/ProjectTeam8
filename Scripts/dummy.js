
function refresh(){
  var main = "main.html"
  if (location = "main.html"){
    location.refresh;
  }
  window.location = main;
}
function searchPage(){
  var page2 = "page2.html";
  window.location = page2;
}
$('#sw5').click(function(event) {
  console.log('s45 was clicked, yeah it worked');
  $('#htmlForSW5').css('display', 'grid');
});

$('#htmlForSW5').hover(function(event) {
  console.log('dbl click happened was clicked, yeah it worked');
  $('#htmlForSW5').css('display', 'none');
});

function clearPage(){
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE12').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
}