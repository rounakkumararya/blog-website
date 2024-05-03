// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-94c8c.firebaseapp.com",
  projectId: "mern-blog-94c8c",
  storageBucket: "mern-blog-94c8c.appspot.com",
  messagingSenderId: "870959313778",
  appId: "1:870959313778:web:7b6dc48116c878d4dee3eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
