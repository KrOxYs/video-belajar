// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getA } from "firebase/analytics";
import { getStorage } from "firebase/storage";
//: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD951Kse7_xCrXkuElDsChGPvCWrm3ukgk",
  authDomain: "image-upload-8f688.firebaseapp.com",
  projectId: "image-upload-8f688",
  storageBucket: "image-upload-8f688.appspot.com",
  messagingSenderId: "139572728909",
  appId: "1:139572728909:web:1e8ab7631b5cd87dbdf804",
  measurementId: "G-FKQE0J5RCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
