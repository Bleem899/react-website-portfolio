// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2aMWLx6PpBJs9dSJrZ4q2u5rVSQRcY4s",
  authDomain: "react-online-portfolio.firebaseapp.com",
  projectId: "react-online-portfolio",
  storageBucket: "react-online-portfolio.appspot.com",
  messagingSenderId: "159647579480",
  appId: "1:159647579480:web:38f7432f91687b372fb92d",
  measurementId: "G-GQF1XH5WPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);