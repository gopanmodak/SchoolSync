
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUQzsOAtgyD-QNVo3DY5nvuMWd0qwd1w4",
  authDomain: "schoolsync-2b076.firebaseapp.com",
  projectId: "schoolsync-2b076",
  storageBucket: "schoolsync-2b076.firebasestorage.app",
  messagingSenderId: "539230884810",
  appId: "1:539230884810:web:5968d217565cd5f05af533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

