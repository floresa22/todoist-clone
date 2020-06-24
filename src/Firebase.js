import firebase from "firebase/app";
import "firebase/firestore";
require("dotenv").config();

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todoist-clone-a99e7.firebaseapp.com",
  databaseURL: "https://todoist-clone-a99e7.firebaseio.com",
  projectId: "todoist-clone-a99e7",
  storageBucket: "todoist-clone-a99e7.appspot.com",
  messagingSenderId: "573392043254",
  appId: "1:573392043254:web:18be2fa9812591cfb240d7",
});

export { firebaseConfig as firebase };
