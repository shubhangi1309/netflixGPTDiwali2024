// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhqFbqiAiqlPRkfc4azNAKFdTDVULddWY",
  authDomain: "netflixgpt-6abde.firebaseapp.com",
  projectId: "netflixgpt-6abde",
  storageBucket: "netflixgpt-6abde.appspot.com",
  messagingSenderId: "741139832749",
  appId: "1:741139832749:web:759e82e779afe905634b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
export const auth = getAuth()