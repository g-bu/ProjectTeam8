function addRecent() {
    firebase.auth().onAuthStateChanged(function(Users) {
        db.collection('Users').doc(Users.uid)
        .collection("recents").doc("recents")
          .set(
            {
              "recent1": Users.displayRecent,
              "recent2": Users.displayRecent,
              "recent3": Users.displayRecent,
            },
            { merge: true });
      });
}