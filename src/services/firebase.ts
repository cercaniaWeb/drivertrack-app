// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhkIWpNyxUE-3AoS7kXioD8hfavDHv4tE",
  authDomain: "drivertrack-28882.firebaseapp.com",
  projectId: "drivertrack-28882",
  storageBucket: "drivertrack-28882.firebasestorage.app",
  messagingSenderId: "1044373535517",
  appId: "1:1044373535517:web:5ef46fcadab554f9bd3ff4",
  measurementId: "G-45703SBS3D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
