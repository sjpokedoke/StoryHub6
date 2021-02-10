import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBTzuezRIgzIUzScdir9zUQF4UcPZnV56Y",
    authDomain: "story-hub-39e2f.firebaseapp.com",
    projectId: "story-hub-39e2f",
    storageBucket: "story-hub-39e2f.appspot.com",
    messagingSenderId: "68634033919",
    appId: "1:68634033919:web:a512b57f08843c0b5e56ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();