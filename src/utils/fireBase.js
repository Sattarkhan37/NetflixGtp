// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4IldAQ7bQSx0Igb3NO26UIc3FhmufXco",
  authDomain: "netflixgpt-94e82.firebaseapp.com",
  projectId: "netflixgpt-94e82",
  storageBucket: "netflixgpt-94e82.firebasestorage.app",
  messagingSenderId: "676817766723",
  appId: "1:676817766723:web:9898a4db2504e35c4987f6",
  measurementId: "G-98PGZ99L4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);