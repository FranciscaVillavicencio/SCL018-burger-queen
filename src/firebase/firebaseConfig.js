// funcion para inicializar firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
//npm install firebase@9.4.1 --save

// objeto de configuración
const firebaseConfig = {
  apiKey: "AIzaSyCiQffCkUNyUHvW-IoDlQw8RF5nHTDQ8Wg",
  authDomain: "ganbaru-02.firebaseapp.com",
  projectId: "ganbaru-02",
  storageBucket: "ganbaru-02.appspot.com",
  messagingSenderId: "919454317296",
  appId: "1:919454317296:web:714d47ba5ed5a09ec7e035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export default db;