import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuBegue9nOAhFGwuVxFVM8IuTCbMnJOXA",
  authDomain: "todo-app-cp-f95f6.firebaseapp.com",
  projectId: "todo-app-cp-f95f6",
  storageBucket: "todo-app-cp-f95f6.appspot.com",
  messagingSenderId: "524792140488",
  appId: "1:524792140488:web:8539367e6febd8c8974bfd",
  measurementId: "G-3H15JQ5X0X",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;
