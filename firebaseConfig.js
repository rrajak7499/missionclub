import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbHdHKn2_SQs220rUYYR_jJZJ9Z1XqL2c",
  authDomain: "mission-english-ee1b0.firebaseapp.com",
  databaseURL: "https://mission-english-ee1b0-default-rtdb.firebaseio.com",
  projectId: "mission-english-ee1b0",
  storageBucket: "mission-english-ee1b0.appspot.com",
  messagingSenderId: "265804801022",
  appId: "1:265804801022:web:eddc16fb17fcca2a9196af",
  measurementId: "G-059E0PXCFY",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
