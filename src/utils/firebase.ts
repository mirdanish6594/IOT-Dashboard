import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDuUk48bude5QD4-WuYC_5IBOzflI1LF_k",
  authDomain: "leakage-fault-detection.firebaseapp.com",
  databaseURL: "https://leakage-fault-detection-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "leakage-fault-detection",
  storageBucket: "leakage-fault-detection.firebasestorage.app",
  messagingSenderId: "426696268332",
  appId: "1:426696268332:web:cd340302593832746b8f89"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);