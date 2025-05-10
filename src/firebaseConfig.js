import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDPbkDF08Y7iU1Vr42DGprMS7jpCID8Z2M",
  authDomain: "tasknest-c1014.firebaseapp.com",
  projectId: "tasknest-c1014",
  storageBucket: "tasknest-c1014.firebasestorage.app",
  messagingSenderId: "462129182914",
  appId: "1:462129182914:web:68160f7856b6db7a1e635b",
  measurementId: "G-9YM1KX2LQB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
