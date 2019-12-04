// var firebaseConfig = {
//   apiKey: 'AIzaSyDg-FN6Xg9nEtOtSFVN4ED-TlxL85kcmzc',
//   authDomain: 'class-shortcut-tool.firebaseapp.com',
//   databaseURL: 'https://class-shortcut-tool.firebaseio.com',
//   projectId: 'class-shortcut-tool',
//   storageBucket: 'class-shortcut-tool.appspot.com',
//   messagingSenderId: '580475693421',
//   appId: '1:580475693421:web:633c3316a68bbfbc1dd264'
// };
// // Initialize Firebase

// firebase.initializeApp(firebaseConfig);

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
function showName() {
  firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    document.getElementById('name').innerHTML = user.displayName;
  });
}
