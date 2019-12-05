function refresh() {
  var main = 'main.html';
  if ((location = 'main.html')) {
    location.refresh;
  }
  window.location = main;
}
function searchPage() {
  var page2 = 'page2.html';
  window.location = page2;
}
$('#sw5').click(function(event) {
  $('#htmlForSW5').css('display', 'grid');
  $('#htmlForSE12').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
});
$('#se12').click(function(event) {
  $('#htmlForSE12').css('display', 'grid');
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
});
$('#se14').click(function(event) {
  $('#htmlForSE14').css('display', 'grid');
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE12').css('display', 'none');
});

function clearPage() {
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE12').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
}
