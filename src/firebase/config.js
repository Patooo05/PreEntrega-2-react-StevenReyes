// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLddWi4kmbUjUsgZUsSKvfM17ln_OmxIk",
    authDomain: "ecommerce-react-e2843.firebaseapp.com",
    projectId: "ecommerce-react-e2843",
    storageBucket: "ecommerce-react-e2843.appspot.com",
    messagingSenderId: "821233601608",
    appId: "1:821233601608:web:f5ac7a62efd7d0f3605c7d"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta `db` correctamente
export const db = getFirestore(app);
