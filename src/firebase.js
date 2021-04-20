// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCaE0Y7fBHJe4tmt4HT0-FA7RMMYGpzVqE",
  authDomain: "raha-2b26f.firebaseapp.com",
  projectId: "raha-2b26f",
  storageBucket: "raha-2b26f.appspot.com",
  messagingSenderId: "546824680284",
  appId: "1:546824680284:web:9abee7862389ac14ce8799",
  measurementId: "G-68KC8L9N1R"
};

// Initialize Firebase
export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseAnalytics = firebase.analytics();