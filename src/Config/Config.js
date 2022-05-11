import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBiqL5l2yJjIjsjgFwrBxQg0eEjF9yNFHE",
    authDomain: "store-86afb.firebaseapp.com",
    projectId: "store-86afb",
    storageBucket: "store-86afb.appspot.com",
    messagingSenderId: "998408337267",
    appId: "1:998408337267:web:f66ec8480419dda08b3706"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth, fs, storage}