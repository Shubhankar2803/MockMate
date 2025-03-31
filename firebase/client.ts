import { initializeApp,getApp,getApps  } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD8L8QO5kC1cZOX3rcVI2A_RL_P5HRozw",
  authDomain: "mockmate-5f7b8.firebaseapp.com",
  projectId: "mockmate-5f7b8",
  storageBucket: "mockmate-5f7b8.firebasestorage.app",
  messagingSenderId: "358980576607",
  appId: "1:358980576607:web:3c3b2aea1fcfe4297882ea",
  measurementId: "G-T7YP2DG3VV"
};

// Initialize Firebase


const app = !getApps.length? initializeApp(firebaseConfig) : getApp() ;

export const auth= getAuth(app)

export const db=getFirestore(app)