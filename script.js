// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTfNOCNXmgk2iFZM16wFnBfujE8-_t1Ew",
  authDomain: "project-toadstool.firebaseapp.com",
  databaseURL: "https://project-toadstool-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-toadstool",
  storageBucket: "project-toadstool.firebasestorage.app",
  messagingSenderId: "590292971138",
  appId: "1:590292971138:web:08b04b3493b4fbbc6c4e9b",
  measurementId: "G-JZSRFRTLNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
