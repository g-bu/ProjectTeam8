// =====================================================================
//  Gets value inputted into #locationB and write to stated user's recent locations
//  in divs with id: recent1, recent2, and recent3.
// =====================================================================

document.getElementById('locationB').addEventListener('keyup', addRecent);

function addRecent(e) {
  if (e.keyCode === 13) {
    console.log("Added locB to recents");
    e.preventDefault();

    var locB = document.getElementById('locationB').value;
    console.log(locB);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();


    var recentCollection = db.collection("Users")
      .doc("YI7AbuNz30GooRtldHJZ")
      .collection("recents");
    recentCollection.add({
        locB,
        time: timestamp
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
  // ==================================================
  // Reads User's Recent Locations from database and
  //      inputs values into the containers for each
  // ==================================================
  var recentRef = db.collection("Users").doc("YI7AbuNz30GooRtldHJZ").collection("recents").orderBy("time", "desc").limit(3);
  recentRef.get().then(function (querySnapshot) {
    var recentArray = [];
    querySnapshot.forEach(function (doc) {
      recentArray.push(doc.data().locB);
      // console.log(doc.id, "=>", doc.data().locB);
      console.log(recentArray);
      document.getElementById('recent1').innerHTML = recentArray[0];
      document.getElementById('recent2').innerHTML = recentArray[1];
      document.getElementById('recent3').innerHTML = recentArray[2];
    })
  });




  // ============================================================
  //  Function for home button to return to main page
  //  Returns user to main page, called during onClick of the home button
  // ============================================================
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
}