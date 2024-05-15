// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "creative-design-school-88a15.firebaseapp.com",
  projectId: "creative-design-school-88a15",
  storageBucket: "creative-design-school-88a15.appspot.com",
  messagingSenderId: "1052960376702",
  appId: "1:1052960376702:web:e1f25b270a55b1d072152f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
