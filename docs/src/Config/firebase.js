import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDWh5HZJBCpqC4esUHhvtt63HC1s_BFfe4",
    authDomain: "app-react-utn.firebaseapp.com",
    databaseURL: "https://app-react-utn-default-rtdb.firebaseio.com",
    projectId: "app-react-utn",
    storageBucket: "app-react-utn.appspot.com",
    messagingSenderId: "1028594798661",
    appId: "1:1028594798661:web:081631dea068b8d9cb132c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth = firebase.auth();
  firebase.db=db;
  
  export default firebase;
    
