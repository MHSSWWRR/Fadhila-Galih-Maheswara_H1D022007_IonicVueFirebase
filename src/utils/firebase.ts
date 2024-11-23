// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAX1FPl6XYX5P44_uAi6UimwpIOTa9mMTE",
    authDomain: "prakmob-vue-firebase.firebaseapp.com",
    projectId: "prakmob-vue-firebase",
    storageBucket: "prakmob-vue-firebase.firebasestorage.app",
    messagingSenderId: "925420315846",
    appId: "1:925420315846:web:4ee00aa9a41439b5f623c7"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export {auth, googleProvider, db};