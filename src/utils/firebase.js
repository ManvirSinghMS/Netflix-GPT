// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmAjRBLWZMUVWZD6iAXLV3WGkeNGek-jA",
  authDomain: "netflixgpt-ms.firebaseapp.com",
  projectId: "netflixgpt-ms",
  storageBucket: "netflixgpt-ms.firebasestorage.app",
  messagingSenderId: "953257042417",
  appId: "1:953257042417:web:8ad37faa51010ec7ab2450",
  measurementId: "G-ZXE6YHN685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();