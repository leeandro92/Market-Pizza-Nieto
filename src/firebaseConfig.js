
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDUQg4c-EVSRqutRhJ9gRo3CTdPQAVCgn4",
  authDomain: "market-pizza.firebaseapp.com",
  projectId: "market-pizza",
  storageBucket: "market-pizza.appspot.com",
  messagingSenderId: "431415968258",
  appId: "1:431415968258:web:d7a446ffed99cc29189d1b"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)