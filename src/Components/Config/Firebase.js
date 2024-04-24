import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzU0Ekf4uaZVpu-FBOCdB4om5eFDEMxI0",
    authDomain: "advanceweb-c17db.firebaseapp.com",
    projectId: "advanceweb-c17db",
    storageBucket: "advanceweb-c17db.appspot.com",
    messagingSenderId: "389624411360",
    appId: "1:389624411360:web:58ffca7a7e5e4a18988c85",
    measurementId: "G-H56PPXWHX1"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const fs = getFirestore(app);
  
  export {auth, fs};