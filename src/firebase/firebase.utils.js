import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJ7zH1U7fzLNwu4d48erBy-A3kMAoNwUQ",
    authDomain: "ecommercedb-261f9.firebaseapp.com",
    projectId: "ecommercedb-261f9",
    storageBucket: "ecommercedb-261f9.appspot.com",
    messagingSenderId: "408127918003",
    appId: "1:408127918003:web:7ef966f8f7ebbdba1605c6",
    measurementId: "G-QTM94TYFTW"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;