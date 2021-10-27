import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB8ALkAKLZfMiCmXH78LjJIYzvsZLdFODY",
  authDomain: "porfolio-management.firebaseapp.com",
  projectId: "porfolio-management",
  storageBucket: "porfolio-management.appspot.com",
  messagingSenderId: "91886779809",
  appId: "1:91886779809:web:566c9e00352a6cf02e1fe0",
});

export const auth = app.auth();
export const db = firebase.firestore();
export default firebase;
