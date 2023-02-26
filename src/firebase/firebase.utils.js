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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
