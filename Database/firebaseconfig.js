import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5quSg8IhQCGK0o6c5HTzdiRXXBDT_dd4",
  authDomain: "getshikhsa.firebaseapp.com",
  projectId: "getshikhsa",
  storageBucket: "getshikhsa.appspot.com",
  messagingSenderId: "371138528669",
  appId: "1:371138528669:web:5a29e676f9f5249662db74",
  measurementId: "G-RPF32WBMHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };