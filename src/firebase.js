
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBp7lg7K9JAtUKEx_ml-XkfYgSax86SYm8",
  authDomain: "app1-56c82.firebaseapp.com",
  projectId: "app1-56c82",
  storageBucket: "app1-56c82.appspot.com",
  messagingSenderId: "157533708627",
  appId: "1:157533708627:web:3432714cef44d5f63481a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)