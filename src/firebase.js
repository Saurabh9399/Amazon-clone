// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVnl0DKviVdQ_I_i8w_15M-noDNjde5Mg",
  authDomain: "clone-1d786.firebaseapp.com",
  databaseURL: "https://clone-1d786.firebaseio.com",
  projectId: "clone-1d786",
  storageBucket: "clone-1d786.appspot.com",
  messagingSenderId: "806002796778",
  appId: "1:806002796778:web:00f922bc7939c09333cf93",
  measurementId: "G-71332NC383",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};