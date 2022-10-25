// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_SndOoSWNkdAH48EZArKsDJfvMG8vUIo",
  authDomain: "chat-app-a8358.firebaseapp.com",
  projectId: "chat-app-a8358",
  storageBucket: "chat-app-a8358.appspot.com",
  messagingSenderId: "133508798158",
  appId: "1:133508798158:web:efd30a34d34b8589a5a29f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)