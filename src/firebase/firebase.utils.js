import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcHFnIdPjn3XnIsq1WBiz3c5GxUGeX9Wg",
    authDomain: "crwn-db-4b5f1.firebaseapp.com",
    databaseURL: "https://crwn-db-4b5f1.firebaseio.com",
    projectId: "crwn-db-4b5f1",
    storageBucket: "crwn-db-4b5f1.appspot.com",
    messagingSenderId: "719326695050",
    appId: "1:719326695050:web:25e02d8b389b692431a773",
    measurementId: "G-EW1XN50NBT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;