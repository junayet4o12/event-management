// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_I-wHe1NyA-c5-r3mf9FKGurnTsPGbR4",
  authDomain: "simle-firebase-472ef.firebaseapp.com",
  projectId: "simle-firebase-472ef",
  storageBucket: "simle-firebase-472ef.appspot.com",
  messagingSenderId: "88176703293",
  appId: "1:88176703293:web:db27dda44f1938489a7754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;