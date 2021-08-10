import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC3-ZgzPiTbn5B7-bLKZzBexpGOtja972U",
    authDomain: "linkedin-bae78.firebaseapp.com",
    projectId: "linkedin-bae78",
    storageBucket: "linkedin-bae78.appspot.com",
    messagingSenderId: "227857773139",
    appId: "1:227857773139:web:5c28152b8bb302c1194ca6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()


export  { db, auth,storage }