function showName() {
  firebase.auth().onAuthStateChanged(function(Users) {
    console.log(Users);
    document.getElementById('username').innerHTML = Users.displayName;
  });
}
