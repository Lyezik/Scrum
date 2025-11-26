import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    databaseURL: 'https://auth-scrum-default-rtdb.europe-west1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const db = getFirestore(app);
export const auth = getAuth(app);