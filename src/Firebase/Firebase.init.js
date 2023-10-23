import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPrIwup3D2NfGHbcM6jFV6894DeMCilpc",
  authDomain: "learn-react-09.firebaseapp.com",
  projectId: "learn-react-09",
  storageBucket: "learn-react-09.appspot.com",
  messagingSenderId: "627193049113",
  appId: "1:627193049113:web:6ceb225c0001e74cf57a88"
};

const app = initializeApp(firebaseConfig);

export default app;