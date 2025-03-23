// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlAO7jrJ-ec6uYL1A6BXHtnka77CU__qI",
  authDomain: "luleacity-973b6.firebaseapp.com",
  projectId: "luleacity-973b6",
  storageBucket: "luleacity-973b6.firebasestorage.app",
  messagingSenderId: "530625481610",
  appId: "1:530625481610:web:1ee2eac7c999edfd145673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);