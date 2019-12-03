// // ------------------------------------------------------------------------
// // Gets value inputted into #locationB and write to stated user's recent1.
// document.getElementById('locationB').addEventListener('keyup', addRecent);

// function addRecent(e) {
//   if (e.keyCode === 13) {
//     console.log("enter key pressed");
//     e.preventDefault();

//     searchPage();
//     var locA = document.getElementById('LocationA').value;
//   }

//   // Trying to place in search function

//   // //only referring to the user:'YI7AbuNz30GooRtldHJZ' to change value in recents
//   // var dbref = db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents').doc('recent1');
//   // var locB = document.getElementById('locationB').value;
//   // console.log(locB);

//   // dbref.set({
//   //   "recent1": locB,

//   firebase.auth().onAuthStateChanged(function (user) {
//     db.collection('Users').doc(user.uid).get()
//       .then(function (snapshot) {

//         console.log(snapshot.data().name);
//         snapshot.forEach(function (doc) {
//           // var dbref = db.collection('Users').doc(user.uid).collection('recents');
//           var dbRecent = doc.data().name;
//           console.log("names of each recent: ", dbRecent);

//           var grabName = snapshot.child("recent1/name").val();
//           if (grabName === null) {
//             dbref.set({
//               "name": locB,
//             })
//           }

//         })
//       });
//   });
// }
// ------------------------------------------------------------------------
// Gets value inputted into #locationB and write to stated user's recent2
//    after comparing to recent1. (incomplete)
// ------------------------------------------------------------------------
// document.getElementById('locationB').addEventListener('keyup', addRecent);

// function addRecent(e) {
//   if (e.keyCode === 13) {
//     console.log("test recent2");
//     e.preventDefault();

//     //only referring to the user:'YI7AbuNz30GooRtldHJZ' to change value in recents
//     var dbRecent2 = db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents').doc('recent2');
//     var locB = document.getElementById('locationB').value;
//     console.log(locB);

//     var dbRecent1 = db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents').doc('recent1');
//     var recentOne = dbRecent1.onSnapshot(function (snap) {
//       console.log('this is working test...', snap.data().recent1);
//       snap.data().name});
//       console.log("from recent1 for recent2: " + recentOne);
//           if (locB !== recentOne)
//             dbRecent2.set({
//               "recent2": locB,
//             });
//         }
//       }

//---------------------------------------------------
// Reads User's Recent Locations from database and
//      inputs values into the containers for each
//---------------------------------------------------

//only referring to the user:'YI7AbuNz30GooRtldHJZ' to change value in recents
// db.collection('Users')
//   .doc('YI7AbuNz30GooRtldHJZ')
//   .collection('recents')
//   .doc('recent1')
//   .onSnapshot(function (snap) {
//     console.log('this is working test...', snap.data());
//     document.getElementById('recent1').innerHTML = snap.data().name; // another way is to go snap.data()['recent1']
//     document.getElementById('recent2').innerHTML = snap.data().name;
//     document.getElementById('recent3').innerHTML = snap.data().name;
//   });

// Function for home button to return to main page

// Returns user to main page, called during onClick of the home button
function refresh() {
  var main = 'main.html';
  if ((location = 'main.html')) {
    location.refresh;
  }
  window.location = main;
}

// Event listener that will take value of location when enter is pressed, and show correlating map
document.getElementById('locationB').addEventListener('keyup', goLocation);

// Function to take in event listener
// @param e event for onPressUp when keyCode 13 (enter) is pressed
function goLocation(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    console.log('enter key pressed');
    // Gets value of location A and B from search boxes
    var locA = document.getElementById('locationA').value;
    var locB = document.getElementById('locationB').value;
    // Joins locations together, to form a the searchable path, setting to lowercase to properly check any possible user casing
    var location = '' + locA + locB;
    location = location.toLowerCase();
    console.log(location);
    // Switch case, which according to user's inputted path, will display path direction container with corresponding path image
    switch (location) {
      case 'sw5se12':
        $('#content').css('display', 'none');
        $('#directionContainer').css('display', 'grid');
        // Was testing jquery style selector
        $('#sw5se12').css('display', 'grid');
        // Setting name of path
        $('#pathName').html('SW5 - - -> SE12');
        console.log('path set');
        break;
      case 'sw5se14':
        $('#content').css('display', 'none');
        $('#directionContainer').css('display', 'grid');
        // Dom style selector
        $('#sw5se14').css('display', 'grid');
        // Setting name of path
        $('#pathName').html('SW5 - - -> SE14');
        break;
      case 'se12se14':
        $('#content').css('display', 'none');
        $('#directionContainer').css('display', 'grid');
        $('#se12se14').css('display', 'grid');
        // Setting name of path
        $('#pathName').html('SE12 - - -> SE14');
        break;
        // Default that will deal with cases if user tries to input path that is not supported
      default:
        alert("Location not supported. Please try SW5 to SE12, SW5 to SE14, or SE12 to SE14");
        console.log('Incorrect value');
        break;
    }
  }
}
