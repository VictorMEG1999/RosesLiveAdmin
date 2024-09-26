// conexcion a base de datos de pruebas 


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVZRC3sh3n9UUKg0Ufk5ko9yvhcTf-ilM",
  authDomain: "roseslivepruebas-674d4.firebaseapp.com",
  projectId: "roseslivepruebas-674d4",
  storageBucket: "roseslivepruebas-674d4.appspot.com",
  messagingSenderId: "182820965029",
  appId: "1:182820965029:web:1ea35faca401e3f54d9b4c"
};

//inicialisacion de conecxion    
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default {
  firebase,
  db
};

// https://console.firebase.google.com/u/2/project/roseslivepruebas-674d4/firestore/databases/-default-/data?hl=es