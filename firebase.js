// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_f9BgxLIXdEzL0c_lBqnEY8jeGGgj7As",  // ✅ your API key
  authDomain: "pulmocare-app.firebaseapp.com",
  projectId: "pulmocare-app",
  storageBucket: "pulmocare-app.appspot.com", // ✅ fixed: should end with .appspot.com
  messagingSenderId: "13706819483",            // ✅ your messaging sender ID
  appId: "1:13706819483:web:8b39f6106f232de899133e",                // ✅ your app ID
  measurementId: "G-P9VFKEHNBF",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Analytics
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Auth, Firestore, and Storage
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

enableIndexedDbPersistence(db).catch((err) => {
  console.warn("Offline persistence error:", err);
});
// ✅ Export for use in other files
export { app, auth, db, storage, analytics };
