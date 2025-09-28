import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvqDHs-rka6z_YCcjp8sKUtj6oEhKSg5w",
  authDomain: "speed-typing-55fba.firebaseapp.com",
  databaseURL:
    "https://speed-typing-55fba-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "speed-typing-55fba",
  storageBucket: "speed-typing-55fba.firebasestorage.app",
  messagingSenderId: "1055827720698",
  appId: "1:1055827720698:web:cd43972c97042df86e4c43",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
