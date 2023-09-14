import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
  
  apiKey: "AIzaSyC-kjpD3yd7PbLQVEX5mBA1uCAOX0uTAGA",
  authDomain: "chat-app-5faf6.firebaseapp.com",
  projectId: "chat-app-5faf6",
  storageBucket: "chat-app-5faf6.appspot.com",
  messagingSenderId: "273372699571",
  appId: "1:273372699571:web:9fe14f69a675e49d6ac9c6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
