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

// ////////////////////////getting/creating profile and saving in DB////////////////////////////////

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // return if no data from auth

  const userRef = firestore.doc(`users/${userAuth.uid}`); // userauth is an object we get from cDM of app.js
  const snapShot = await userRef.get();
  console.log(snapShot);

  // if the data doesnt exists, then add it to the database

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // put it in the databse
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

///////////////////////////////////////////////////////////////////////////////////////////////
firebase.initializeApp(config);
// anywhere we need to use the authentication we can use this
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// get the google auth feature

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
