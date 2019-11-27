import firebase from "firebase/app";
// these two imports will be attached to the firebase object above automatically
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnKNf10uNJYTV5FRRgesvfsmL_If_ugnU",
  authDomain: "crwn-db-e42ff.firebaseapp.com",
  databaseURL: "https://crwn-db-e42ff.firebaseio.com",
  projectId: "crwn-db-e42ff",
  storageBucket: "crwn-db-e42ff.appspot.com",
  messagingSenderId: "348519602577",
  appId: "1:348519602577:web:1ce1c7f0caa1e33ee0a230",
  measurementId: "G-SYM33H74R4"
};

firebase.initializeApp(config);
// anywhere we need to use the authentication we can use this
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// get the google auth feature

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
