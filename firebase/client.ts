// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByVA1HQiy37oJ6q-K0p8TbDTuOmJilH9E",
  authDomain: "prepwise-28cab.firebaseapp.com",
  projectId: "prepwise-28cab",
  storageBucket: "prepwise-28cab.firebasestorage.app",
  messagingSenderId: "678565537003",
  appId: "1:678565537003:web:1976ea7184f5b0db2f4aae",
  measurementId: "G-JTWBENXZR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
