import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
// acceso a la base de datos 
const firebaseConfig = {
    apiKey: "AIzaSyA0_nUQ2qjy_7GDhYcV51IqvcoyaNdteSI",
    authDomain: "roseslive.firebaseapp.com",
    projectId: "roseslive",
    storageBucket: "roseslive.appspot.com",
    messagingSenderId: "606207337156",
    appId: "1:606207337156:web:53c4a1fb2208ddaf601f91"
  };
//inicialisacion de conecxion    
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export default {
    firebase,
    db
};