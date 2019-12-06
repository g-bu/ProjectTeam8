// ===========================================================================
// Refresh function linked to home button that takes user back to main.html
// ===========================================================================
function refresh() {
  var main = 'main.html';
  if ((location = 'main.html')) {
    location.refresh;
  }
  window.location = main;
}

// ==========================================================================================================
// SearchPage function linked to location A and location B text fields that takes user back to page2.html
// ==========================================================================================================
function searchPage() {
  var page2 = 'page2.html';
  window.location = page2;
}
$('#sw5').click(function (event) {
  $('#htmlForSW5').css('display', 'grid');
  $('#htmlForSE12').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
});
$('#se12').click(function (event) {
  $('#htmlForSE12').css('display', 'grid');
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
});
$('#se14').click(function (event) {
  $('#htmlForSE14').css('display', 'grid');
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE12').css('display', 'none');
});

// =========================================================================================================
// ClearPage function linked to main page's map image that takes clears all location information pop-ups
// =========================================================================================================
function clearPage() {
  $('#htmlForSW5').css('display', 'none');
  $('#htmlForSE12').css('display', 'none');
  $('#htmlForSE14').css('display', 'none');
}