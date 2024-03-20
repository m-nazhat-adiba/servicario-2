// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLYqH2XKv4-cDk0JNKzx3NcuD8Aez8ztk",
  authDomain: "servicario-2.firebaseapp.com",
  projectId: "servicario-2",
  storageBucket: "servicario-2.appspot.com",
  messagingSenderId: "689605931097",
  appId: "1:689605931097:web:77a9dc14ae7b8ff5c24148",
  measurementId: "G-L141CTVG3P"
};

// Initialize Firebase

//namedspace SDK
export const nDb = firebase.initializeApp(firebaseConfig).firestore()

//modular SDK
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)

// export {Timestamp}