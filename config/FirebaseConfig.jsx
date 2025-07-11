// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVZ3i5Rko1eXag1YzMrzBzlOVtbze5QI",
  authDomain: "medical-d1e80.firebaseapp.com",
  projectId: "medical-d1e80",
  storageBucket: "medical-d1e80.firebasestorage.app",
  messagingSenderId: "723956132597",
  appId: "1:723956132597:web:a9af6c40b62c8ac9f4f3bc",
  measurementId: "G-F0PKDWT3BB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)