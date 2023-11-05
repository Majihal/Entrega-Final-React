import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCApwSXKQHxI1vZA_OCLMM1vHPwaJjlYFE",
//   authDomain: "fb-43230-7c3fe.firebaseapp.com",
//   projectId: "fb-43230-7c3fe",
//   storageBucket: "fb-43230-7c3fe.appspot.com",
//   messagingSenderId: "285809636419",
//   appId: "1:285809636419:web:ec42917b15780ddc44d0f6",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHuRiCqeKDIW5c36aAq74sbC-wFGW_VCA",
  authDomain: "entrega-final-react-8699e.firebaseapp.com",
  projectId: "entrega-final-react-8699e",
  storageBucket: "entrega-final-react-8699e.appspot.com",
  messagingSenderId: "112403198677",
  appId: "1:112403198677:web:00234db320844201ab285c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
