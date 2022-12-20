import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "challenge-cdee6.firebaseapp.com",
  projectId: "challenge-cdee6",
  storageBucket: "challenge-cdee6.appspot.com",
  messagingSenderId: "61179256741",
  appId: "1:61179256741:web:7e1892b281d0a04929124c",
  measurementId: "G-RZLLWJXRFE",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
