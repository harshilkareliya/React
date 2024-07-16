import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBCvJH1tILtSsimeZ6cTDgKqPZARzK55rk",
    authDomain: "myproject-a4873.firebaseapp.com",
    databaseURL: "https://myproject-a4873-default-rtdb.firebaseio.com",
    projectId: "myproject-a4873",
    storageBucket: "myproject-a4873.appspot.com",
    messagingSenderId: "94885953128",
    appId: "1:94885953128:web:772cdccba076d7151945dd",
    measurementId: "G-PC7JVCEQ64"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }
  export default db;

  firebase 
  firebasetools