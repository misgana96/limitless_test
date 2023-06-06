// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXFhqASSBXLSAiwG3HglCVdT1L5TJwi4E",
  authDomain: "limitless-660e5.firebaseapp.com",
  projectId: "limitless-660e5",
  storageBucket: "limitless-660e5.appspot.com",
  messagingSenderId: "155453362845",
  appId: "1:155453362845:web:b5d7ebc58b7fad25bfba74",
  measurementId: "G-LFP1WEFC8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  auth = getAuth()
export const socialAuth = new GoogleAuthProvider()
const analytics = getAnalytics(app);

