// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHP7hPg1tc50Yp8rmlqrIDklC5PhsteVM",
  authDomain: "furniture-warehouse-d4ac5.firebaseapp.com",
  projectId: "furniture-warehouse-d4ac5",
  storageBucket: "furniture-warehouse-d4ac5.appspot.com",
  messagingSenderId: "68831526885",
  appId: "1:68831526885:web:8ebf8c07e23f6498f0f90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
