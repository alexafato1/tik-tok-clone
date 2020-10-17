import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyACOEkZg_zZ858ScYy85x5XiStE7ryoiGA",
  authDomain: "tik-tok-clone-4beb7.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-4beb7.firebaseio.com",
  projectId: "tik-tok-clone-4beb7",
  storageBucket: "tik-tok-clone-4beb7.appspot.com",
  messagingSenderId: "293766279613",
  appId: "1:293766279613:web:601ed32d5a4e3cde8b62d4"
})

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

