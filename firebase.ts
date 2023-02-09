import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBhHiqjj-C6HXPLzBEcp9rDzmSrQoAuh2o",
  authDomain: "chatgpt-messenger-c0f19.firebaseapp.com",
  projectId: "chatgpt-messenger-c0f19",
  storageBucket: "chatgpt-messenger-c0f19.appspot.com",
  messagingSenderId: "1005101020115",
  appId: "1:1005101020115:web:9186ec195234273f223526"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }