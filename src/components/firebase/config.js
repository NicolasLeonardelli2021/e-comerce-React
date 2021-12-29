// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgxyWo04nKeT0RNRNCB3FXfijff0fDho4",
  authDomain: "ecomerce-c995a.firebaseapp.com",
  projectId: "ecomerce-c995a",
  storageBucket: "ecomerce-c995a.appspot.com",
  messagingSenderId: "110048312995",
  appId: "1:110048312995:web:51a856b8fc2fab0adf8916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


