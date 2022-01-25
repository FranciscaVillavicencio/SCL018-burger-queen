// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN4CvY0JxPvEEM_m36TvHRHN7C23JX_jI",
  authDomain: "ganbaru-51eb7.firebaseapp.com",
  projectId: "ganbaru-51eb7",
  storageBucket: "ganbaru-51eb7.appspot.com",
  messagingSenderId: "249721144764",
  appId: "1:249721144764:web:48aa7f066d1ddde3c657b9",
  measurementId: "G-H9JPG4QBMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
const analytics = getAnalytics(app);


export default db;