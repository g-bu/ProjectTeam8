// ------------------------------------------------------------------------

// Gets value inputted into #locationB and write to stated user's recent1.
document.getElementById('locationB').addEventListener('keyup', addRecent);

function addRecent(e) {
  if (e.keyCode === 13) {
    console.log('enter key pressed');
    e.preventDefault();
    var locB = document.getElementById('locationB').value;

    // //only referring to the user:'YI7AbuNz30GooRtldHJZ' to change value in recents
    // var dbref = db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents').doc('recent1');
    // var locB = document.getElementById('locationB').value;
    // console.log(locB);

    // dbref.set({
    //   "recent1": locB,

    firebase.auth().onAuthStateChanged(function(user) {
      db.collection('Users')
        .doc(user.uid)
        .get()
        .then(function(snapshot) {
          console.log(snapshot.data().name);
          snapshot.forEach(function(doc) {
            // var dbref = db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents');
            var dbRecent = doc.data().name;
            console.log('names of each recent: ', dbRecent);

            var grabName = snapshot.child('recent1/name').val();
            if (grabName === null) {
              dbref.set({
                name: locB
              });
            }
          });
        });
    });
  }
}
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
db.collection('Users')
  .doc('YI7AbuNz30GooRtldHJZ')
  .collection('recents')
  .doc('recent1')
  .onSnapshot(function(snap) {
    console.log('this is working test...', snap.data());
    document.getElementById('recent1').innerHTML = snap.data().name; // another way is to go snap.data()['recent1']
    document.getElementById('recent2').innerHTML = snap.data().name;
    document.getElementById('recent3').innerHTML = snap.data().name;
  });

function refresh() {
  var main = 'main.html';
  if ((location = 'main.html')) {
    location.refresh;
  }
  window.location = main;
}
