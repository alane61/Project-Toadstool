import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Firebase configuration
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
const db = getDatabase(app);

console.log("Toadstool Terminal Initialised.");

// Database Sync Test
set(ref(db, 'test'), { status: 'Connected' });

onValue(ref(db, 'test'), (snapshot) => {
  const data = snapshot.val();
  console.log("Database Sync Test:", data);
});
