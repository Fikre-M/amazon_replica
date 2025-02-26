import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const firebaseConfig = {
    apiKey: "AIzaSyAGMEu7nrGgV1cQ3hAt9PxeyKuYfj-Immw",
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















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //auth
// import {getAuth} from 'firebase/auth'
// import { getFirestore } from "firebase/firestore";
// // import "firebase/compat/firestore";
// // import "firebase/compat/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAGMEu7nrGgV1cQ3hAt9PxeyKuYfj-Immw",
//     authDomain: "clone-5fd47.firebaseapp.com",
//     projectId: "clone-5fd47",
//     storageBucket: "clone-5fd47.firebasestorage.app",
//     messagingSenderId: "393785918145",
//     appId: "1:393785918145:web:b7028a9d00631b9f3a4a40",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);