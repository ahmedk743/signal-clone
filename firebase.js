import firebase from "firebase/app";
// const firebase = require("firebase");
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA60IvWluQ72JAtWK7b2l3pBk6mrLc6caY",
  authDomain: "signal-clone-3c5c3.firebaseapp.com",
  projectId: "signal-clone-3c5c3",
  storageBucket: "signal-clone-3c5c3.appspot.com",
  messagingSenderId: "36875219109",
  appId: "1:36875219109:web:9a89d6457cde9ea5651d4c",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
