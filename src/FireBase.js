// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-P1YR4P3W6zZxixiyl1wSYJWqwqdErm0",
  authDomain: "e-commerce-webapp-80757.firebaseapp.com",
  projectId: "e-commerce-webapp-80757",
  storageBucket: "e-commerce-webapp-80757.firebasestorage.app",
  messagingSenderId: "835366135934",
  appId: "1:835366135934:web:6b5408eb4e33d5da48502f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  auth = getAuth(app);
const db = getFirestore(app);

export { auth , db , signInWithEmailAndPassword } ; 