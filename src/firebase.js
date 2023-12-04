// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmoO44_NcB7O6dKSLzPy-rPAgcH-c4e8I",
  authDomain: "learning-system-b9896.firebaseapp.com",
  projectId: "learning-system-b9896",
  storageBucket: "learning-system-b9896.appspot.com",
  messagingSenderId: "826685820264",
  appId: "1:826685820264:web:c27f091ac607be00c11add",
};

// weiyuchen dashuaibi
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
