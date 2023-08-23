// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-1j65vBE8N6I79wUN3BffywVPx3wC1Yw",
  authDomain: "manegeo-b4370.firebaseapp.com",
  projectId: "manegeo-b4370",
  storageBucket: "manegeo-b4370.appspot.com",
  messagingSenderId: "363820827913",
  appId: "1:363820827913:web:ef749aad940788be027fd8",
  measurementId: "G-P8WWH72ZL5",
  databaseURL: "https://manegeo-b4370-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);