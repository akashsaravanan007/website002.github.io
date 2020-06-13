// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtfmHCcCSfEE3WIOFQ1cR3YPNNrkRyD98",
    authDomain: "form-f21be.firebaseapp.com",
    databaseURL: "https://form-f21be.firebaseio.com",
    projectId: "form-f21be",
    storageBucket: "form-f21be.appspot.com",
    messagingSenderId: "991745712442",
    appId: "1:991745712442:web:7627e299cbcc7be2bb3003"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.Value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
    }

    function signIn(){
        var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.signInWithEmailAndPassword(email.Value, password.value);
      promise.catch(e => alert(e.message));
      alert("Signed In" + email.value);
     
    }

    function signOut(){

        auth.signOut();
        alert("Signed Out");
    }

    <img src="images/logos/logo0.png">