// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClm8p43YL3KBr-reI9wTO6pMSZ80LcZaQ",
  authDomain: "react-journalapp-6ccb0.firebaseapp.com",
  projectId: "react-journalapp-6ccb0",
  storageBucket: "react-journalapp-6ccb0.appspot.com",
  messagingSenderId: "1029567590555",
  appId: "1:1029567590555:web:02c626158c88217fd5163e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);