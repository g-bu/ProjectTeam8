// Your web app's Firebase configuration
// Initialize Firebase
// var firebaseConfig = {
//   apiKey: 'AIzaSyDg-FN6Xg9nEtOtSFVN4ED-TlxL85kcmzc',
//   authDomain: 'class-shortcut-tool.firebaseapp.com',
//   databaseURL: 'https://class-shortcut-tool.firebaseio.com',
//   projectId: 'class-shortcut-tool',
//   storageBucket: 'class-shortcut-tool.appspot.com',
//   messagingSenderId: '580475693421',
//   appId: '1:580475693421:web:633c3316a68bbfbc1dd264'
// };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Initialize the FirebaseUI Widget using Firebase. ( A new UI object)

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

// Configuration for object

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  // In here put where the user goes after log in
  signInSuccessUrl: 'main.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // Commented everything out but kept the email one
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'main.html',
  // Privacy policy url.
  privacyPolicyUrl: 'main.html'
};

// The start method will wait until the DOM is loaded.
// says to launch the ui at firebase container (line 20) , using uiConfig

// ui.start('#firebaseui-auth-container', uiConfig);
