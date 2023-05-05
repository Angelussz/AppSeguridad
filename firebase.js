// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCt0Fi0cZ9yHu521fxNRPuSioKaxBiaqU",
  authDomain: "sensores-95567.firebaseapp.com",
  projectId: "sensores-95567",
  storageBucket: "sensores-95567.appspot.com",
  messagingSenderId: "505760186568",
  appId: "1:505760186568:web:eacca4129f46bcff3de5fd",
  measurementId: "G-8VC1GD2L9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default{
  app,
  db
}
// const analytics = getAnalytics(app);