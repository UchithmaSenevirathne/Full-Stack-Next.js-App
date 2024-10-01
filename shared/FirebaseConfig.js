// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "next-app-fc625.firebaseapp.com",
  projectId: "next-app-fc625",
  storageBucket: "next-app-fc625.appspot.com",
  messagingSenderId: "300172357718",
  appId: "1:300172357718:web:68a62b4463724ab9140bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;