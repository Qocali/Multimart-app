// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv71ZpbCjjsQlV31yKyME8-KKFVen8nsM",
  authDomain: "maltimart-d07bc.firebaseapp.com",
  projectId: "maltimart-d07bc",
  storageBucket: "maltimart-d07bc.appspot.com",
  messagingSenderId: "473229114105",
  appId: "1:473229114105:web:a199522bd7741a4bbb0028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const store=getFirestore(app)
export const storage=getStorage(app)
export default app