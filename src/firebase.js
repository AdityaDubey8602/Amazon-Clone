// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBP4yL2ko2cVNbSL-uKb2T9pG5r6B6fAMM",
    authDomain: "clone-d85b6.firebaseapp.com",
    projectId: "clone-d85b6",
    storageBucket: "clone-d85b6.appspot.com",
    messagingSenderId: "235044060534",
    appId: "1:235044060534:web:74e8f174af49c8c5844e57",
    measurementId: "G-SLYM5QGLRX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
