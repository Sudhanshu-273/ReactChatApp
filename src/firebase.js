import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASiLuxHHq0LdNzS3G2xXPDCLJbkAQFPi0",
  authDomain: "chat-eec58.firebaseapp.com",
  projectId: "chat-eec58",
  storageBucket: "chat-eec58.appspot.com",
  messagingSenderId: "664387500583",
  appId: "1:664387500583:web:fa7397c59b33b08f466c02"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();