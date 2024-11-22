// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg60zvOHjMiqFzFtuEEgDB4T9bx6USmqw",
  authDomain: "vite-contact-f57bc.firebaseapp.com",
  projectId: "vite-contact-f57bc",
  storageBucket: "vite-contact-f57bc.firebasestorage.app",
  messagingSenderId: "909045590757",
  appId: "1:909045590757:web:ddfe66e9f41df4ed55820c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);