import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    // apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    // authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    apiKey: "AIzaSyDFbFuC5bfuzWnjrghi7ts_nH_q5VtYE14",
    authDomain: "auth-scrum.firebaseapp.com",
    databaseURL: "https://auth-scrum-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "auth-scrum",
    storageBucket: "auth-scrum.firebasestorage.app",
    messagingSenderId: "791898260251",
    appId: "1:791898260251:web:b2f68a7ecbfa995c5bc9be"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db, database, app }