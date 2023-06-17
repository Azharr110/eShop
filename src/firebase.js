import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDFkz74itS1nmCKn3mTJrpNi0H0T35kCMk",
    authDomain: "eshop-391fd.firebaseapp.com",
    projectId: "eshop-391fd",
    storageBucket: "eshop-391fd.appspot.com",
    messagingSenderId: "504329317461",
    appId: "1:504329317461:web:094eaff477f8a35496f8dc",
    measurementId: "G-FDLGNJM3SQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export  { db, auth };