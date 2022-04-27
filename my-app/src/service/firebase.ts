import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPKMB4wxiNQ9W6KQ-3wWVEqSc0RBncjdQ",
  authDomain: "mychat-b9090.firebaseapp.com",
  projectId: "mychat-b9090",
  storageBucket: "mychat-b9090.appspot.com",
  messagingSenderId: "195640284755",
  appId: "1:195640284755:web:cc2a1447698d60212918a6",
};

const app = initializeApp(firebaseConfig);

export const autentification = getAuth(app);
