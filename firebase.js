import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGfjmhSvYaUtMMjrpwRJr5JAkJsNvzYcY",
    authDomain: "fb-clone-abd45.firebaseapp.com",
    databaseURL: "https://fb-clone-abd45.firebaseio.com",
    projectId: "fb-clone-abd45",
    storageBucket: "fb-clone-abd45.appspot.com",
    messagingSenderId: "740665894489",
    appId: "1:740665894489:web:5f962ed1aeca07a394f348",
    measurementId: "G-BS14L65W5N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth , provider };
  export default db;