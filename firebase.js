import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB6fdPXMSAq8cxlTXxPTAseKbF-ztfkmos",
    authDomain: "bookproject-d07ae.firebaseapp.com",
    databaseURL: "https://bookproject-d07ae.firebaseio.com",
    projectId: "bookproject-d07ae",
    storageBucket: "bookproject-d07ae.appspot.com",
    messagingSenderId: "202374992020",
    appId: "1:202374992020:web:9afe2ecdb4f14c8a9b6481",
    measurementId: "G-CZH68GQ52J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth;
  export const firestore = firebase.firestore();