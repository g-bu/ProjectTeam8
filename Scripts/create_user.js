// Creates new users into the database
// var user = firebase.auth().currentUser;
function createUser() {
  firebase.auth().onAuthStateChanged(function(user) {
    db.collection('users')
      .doc(user.uid)
      .set(
        {
          name: user.displayName,
          email: user.email
        },
        { merge: true }
      );
  });
}