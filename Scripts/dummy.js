function myFunction() {
    var x = document.getElementById("locationB").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }

function refresh(){
  location.reload();
}
function searchPage(){
  var page2 = "page2.html";
  window.location = page2;
}