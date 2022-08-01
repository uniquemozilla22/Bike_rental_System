// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtGSPlytHWz5E-86TvMeHaPItmv-FFK8",
  authDomain: "toptal-bike-rental-31704.firebaseapp.com",
  projectId: "toptal-bike-rental-31704",
  storageBucket: "toptal-bike-rental-31704.appspot.com",
  messagingSenderId: "138770729463",
  appId: "1:138770729463:web:9727af7d3b245f99ea46f2",
  measurementId: "G-NZQ661BJKJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
