// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChXS32S0nmB81rjmmbQlsDJpIOJ4_6yOw",
  authDomain: "react-website-portfolio-morris.web.app",
  projectId: "react-website-portfolio-morris",
  storageBucket: "react-website-portfolio-morris.appspot.com",
  messagingSenderId: "811285976458",
  appId: "1:811285976458:web:893027f4bc3dad71eb2473",
  measurementId: "G-2Y64YE4L4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);