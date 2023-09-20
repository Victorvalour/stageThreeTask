// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyuStytvckZtZtN5ghv1uxhomMVyrNhS4",
  authDomain: "stage-three.firebaseapp.com",
  projectId: "stage-three",
  storageBucket: "stage-three.appspot.com",
  messagingSenderId: "549465500928",
  appId: "1:549465500928:web:708a4a8d8580cd0f4917e5",
  measurementId: "G-MP8B10D9ZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
