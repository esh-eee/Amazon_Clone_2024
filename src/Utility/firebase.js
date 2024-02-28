// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import {getAuth} from "firebase/auth"
import "firebase/compat/firestore" 
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmZFKmz2nIn0ZqIdfeXmvypYAmjGfn_hY",
  authDomain: "clone-2024-14bae.firebaseapp.com",
  projectId: "clone-2024-14bae",
  storageBucket: "clone-2024-14bae.appspot.com",
  messagingSenderId: "626084945578",
  appId: "1:626084945578:web:27d6d5622a58f67aa57ad3"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAmZFKmz2nIn0ZqIdfeXmvypYAmjGfn_hY",
//   authDomain: "clone-2024-14bae.firebaseapp.com",
//   projectId: "clone-2024-14bae",
//   storageBucket: "clone-2024-14bae.appspot.com",
//   messagingSenderId: "626084945578",
//   appId: "1:626084945578:web:27d6d5622a58f67aa57ad3"
// };


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth =getAuth(app);
export const db = app.firestore();