import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "clone-5fd47.firebaseapp.com",
    projectId: "clone-5fd47",
    storageBucket: "clone-5fd47.firebasestorage.app",
    messagingSenderId: "393785918145",
    appId: "1:393785918145:web:b7028a9d00631b9f3a4a40",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);   
const auth = getAuth(app);      

export { db, auth };













