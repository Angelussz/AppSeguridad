// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc84rtEpKxRQ7OwxHlvgle_b8Tx-i-1Ns",
  authDomain: "sensoresapp-cb34b.firebaseapp.com",
  projectId: "sensoresapp-cb34b",
  storageBucket: "sensoresapp-cb34b.appspot.com",
  messagingSenderId: "333375923463",
  appId: "1:333375923463:web:6163dfc3faacdd266711a2",
  measurementId: "G-HCRM48T1WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

export default{
  app,
  db
}
// const analytics = getAnalytics(app);