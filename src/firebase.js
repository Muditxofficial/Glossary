import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDJkBxc6NAqEsuUIZOpasEeIGKCRpkhA18",
    authDomain: "password-6343e.firebaseapp.com",
    projectId: "password-6343e",
    storageBucket: "password-6343e.appspot.com",
    messagingSenderId: "112147566458",
    appId: "1:112147566458:web:88031bc55735d61d0190c3"
  }
);

export const db = app.firestore()
export default app;