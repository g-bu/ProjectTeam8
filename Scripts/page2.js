// function addRecent() {
//     firebase.auth().onAuthStateChanged(function(Users) {
//         db.collection('Users').doc(Users.uid)
//         .collection("recents").doc("recents")
//           .set(
//             {
//               "recent1": Users.displayRecent,
//               "recent2": Users.displayRecent,
//               "recent3": Users.displayRecent,
//             },
//             { merge: true });
//       });
// }

document.getElementById('locationB').addEventListener('keyup', addRecent);

// -----------------------------------------------------------------------
// Gets value inputted into #locationB and write to stated user's recents.
// ------------------------------------------------------------------------
function addRecent(e) {
  if (e.keyCode === 13) {
    console.log("test");
    e.preventDefault();

    //only referring to the user:'YI7AbuNz30GooRtldHJZ' to change value in recents
    var dbref = db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents').doc('recents');
    var locB = document.getElementById('locationB').value;
    console.log(locB);
  
    dbref.set({
      "recent1": locB,
    });
  }
}

// -----------------------------------------------------------
// Gets value inputted into #locationB and place it in to #demo
// ------------------------------------------------------------
function myFunction() {
  var x = document.getElementById("locationB").value;
  console.log("Values entered in #locationB: " + x);
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}