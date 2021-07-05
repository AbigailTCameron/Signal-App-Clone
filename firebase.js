import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "signal-clone-eb534.firebaseapp.com",
  projectId: "signal-clone-eb534",
  storageBucket: "signal-clone-eb534.appspot.com",
  messagingSenderId: "227218374682",
  appId: "1:227218374682:web:fdeef86300a9cc5d1a11a3",
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
