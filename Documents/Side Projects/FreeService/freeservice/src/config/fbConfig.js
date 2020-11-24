import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVpROl6YuNDQY8VJYEmyAP292SjL6HUHQ",
    authDomain: "freeservice-b1d42.firebaseapp.com",
    databaseURL: "https://freeservice-b1d42.firebaseio.com",
    projectId: "freeservice-b1d42",
    storageBucket: "",
    messagingSenderId: "297469137251",
    appId: "1:297469137251:web:f7fd3c802671584af30356"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
