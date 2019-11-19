
    <script>
    //============ need to change a couple things here=====================================================================
    db.collection('Users').doc('YI7AbuNz30GooRtldHJZ').collection('recents')
      .onSnapshot(function (snap) {
        console.log('this is working test...', snap.data());
        document.getElementById('.innerLocations').innerHTML = snap.data().message;
        // another way is to go snap.data()['message']
      });
  </script>
