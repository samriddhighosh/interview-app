// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGYjrr2VzfpQB5lXfrPA2OGIRtsd-mv6w",
  authDomain: "prepwise-86378.firebaseapp.com",
  projectId: "prepwise-86378",
  storageBucket: "prepwise-86378.firebasestorage.app",
  messagingSenderId: "764184896601",
  appId: "1:764184896601:web:fb24b9722b8c976b013d48",
  measurementId: "G-J9T6V7L79E"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)