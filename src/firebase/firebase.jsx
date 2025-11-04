// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyAAx_knJ_qqxPkJQ_xoIZnxt_c6gb6Wdys",
//   authDomain: "todoapp-eeeb7.firebaseapp.com",
//   projectId: "todoapp-eeeb7",
//   storageBucket: "todoapp-eeeb7.appspot.com",
//   messagingSenderId: "1072574112522",
//   appId: "1:1072574112522:web:65fc4e184aed9894dc90f3"
// };
 
const firebaseConfig = {
  apiKey: "AIzaSyCYTKUAyJaT_hWOPoIYFzvbpKTx98-H7Oc",
  authDomain: "bricks-a4bd0.firebaseapp.com",
  projectId: "bricks-a4bd0",
  storageBucket: "bricks-a4bd0.appspot.com",
  messagingSenderId: "474943044356",
  appId: "1:474943044356:web:12383582f15561f97bae51",
  measurementId: "G-N8F6PFX7MB",
  databaseURL: "https://bricks-a4bd0-default-rtdb.asia-southeast1.firebasedatabase.app",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);