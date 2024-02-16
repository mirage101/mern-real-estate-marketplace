// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-marketplace-d3517.firebaseapp.com",
  projectId: "mern-estate-marketplace-d3517",
  storageBucket: "mern-estate-marketplace-d3517.appspot.com",
  messagingSenderId: "646318693400",
  appId: "1:646318693400:web:4489440742785ed0af776d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
