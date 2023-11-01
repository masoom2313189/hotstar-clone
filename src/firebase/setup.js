import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw8x2Avd83DcSJdY9AhTaZO_LYcTleRIg",
  authDomain: "hotstar-clone-c56cd.firebaseapp.com",
  projectId: "hotstar-clone-c56cd",
  storageBucket: "hotstar-clone-c56cd.appspot.com",
  messagingSenderId: "731183753371",
  appId: "1:731183753371:web:fa31faa6f3d4e43f6c3e3e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
