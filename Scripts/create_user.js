<script>
// Fucntion that creates a new document in the users collection
function createUser() {
  // if the current user logged in user
  // is authenticated, then grab "uid" "displayName" and "email"
  // use "set()" with merge (if document did not exist it will be created)
  firebase.auth().onAuthStateChanged(function(Users) {
    db.collection('Users')
      .doc(Users.uid)
      .set(
        {
<<<<<<< HEAD
          "name": Users.displayName,
          "email": Users.email
=======
          name: Users.displayName,
          email: Users.email
>>>>>>> 938909b99dd9cd63e5f0ee9aeeada1fba7bc74e1
        },
        { merge: true }
      );
  });
  }
</script>
