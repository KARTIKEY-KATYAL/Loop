// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loops-31c7c.firebaseapp.com",
  projectId: "loops-31c7c",
  storageBucket: "loops-31c7c.firebasestorage.app",
  messagingSenderId: "415131234410",
  appId: "1:415131234410:web:e7e0d2c91131ba7c4eda13",
  measurementId: "G-ZXDW0HVBQ6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
