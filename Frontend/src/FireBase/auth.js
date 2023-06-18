// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVhBE1d4rIx-DpNOvVZtXYvFzFUEgkbj0",
  authDomain: "intproject-652bb.firebaseapp.com",
  projectId: "intproject-652bb",
  storageBucket: "intproject-652bb.appspot.com",
  messagingSenderId: "4884691304",
  appId: "1:4884691304:web:50b360e69ac3b15444fedd",
  measurementId: "G-L4HESCGGGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;