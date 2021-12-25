// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjQGCMUSNW14ykpWS0tg3m6vBGAC1Bh5g",
  authDomain: "crud-react-native-c3912.firebaseapp.com",
  projectId: "crud-react-native-c3912",
  storageBucket: "crud-react-native-c3912.appspot.com",
  messagingSenderId: "26398917425",
  appId: "1:26398917425:web:5191ddc21653f199472610"
};

// Initialize Firebase
export const FIREBASE = initializeApp(firebaseConfig);