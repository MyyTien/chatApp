import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1Z0Z9K19FV4mBsSWe-1bo-y0Yfyl7enE",
  authDomain: "chat-627ff.firebaseapp.com",
  projectId: "chat-627ff",
  storageBucket: "chat-627ff.appspot.com",
  messagingSenderId: "740155194607",
  appId: "1:740155194607:web:2ed487739778ecdf96ef1a",
  measurementId: "G-RK379XW20L"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
