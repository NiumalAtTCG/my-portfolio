// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5fRiBieKUyCI7v7Js70sx5dCjPwpTqt4",
  authDomain: "my-portfolio-22a6d.firebaseapp.com",
  projectId: "my-portfolio-22a6d",
  storageBucket: "my-portfolio-22a6d.appspot.com", // Corrected storage bucket format
  messagingSenderId: "68182323045",
  appId: "1:68182323045:web:62013e5e37b1583365bb8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app
export default app;
