import firebase, { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmSzOSgA-rI3N_TJqKbX8Bhw1o54lkZjA",
  authDomain: "clone-4fdc4.firebaseapp.com",
  databaseURL: "https://clone-4fdc4.firebaseio.com",
  projectId: "clone-4fdc4",
  storageBucket: "clone-4fdc4.appspot.com",
  messagingSenderId: "345319410877",
  appId: "1:345319410877:web:022f296d99574416abfbd4",
  measurementId: "G-GRMEKBTH4D"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
