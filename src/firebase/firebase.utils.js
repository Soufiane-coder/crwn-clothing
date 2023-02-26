import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBM6hTcTe_Ghtgkt1pZPxPfPlakPmD1zS4",
  authDomain: "crwn-db-877ed.firebaseapp.com",
  projectId: "crwn-db-877ed",
  storageBucket: "crwn-db-877ed.appspot.com",
  messagingSenderId: "291627219690",
  appId: "1:291627219690:web:c96ebcdf3720e1eb423593",
  measurementId: "G-ZHK7DMTW4K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
