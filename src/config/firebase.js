// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzHAe3Pyy6T0bJcJUT-h00scn2Q3sZ7aA",
  authDomain: "portfolio-8abe3.firebaseapp.com",
  projectId: "portfolio-8abe3",
  storageBucket: "portfolio-8abe3.firebasestorage.app",
  messagingSenderId: "588006100009",
  appId: "1:588006100009:web:7e98c1bb22bd3a94f66038",
  measurementId: "G-5BJVXBHNC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };