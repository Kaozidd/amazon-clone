import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaDM8it4p5qZ8ynaCp8S6IqAKNgX57dJk",
    authDomain: "amazing-clone.firebaseapp.com",
    databaseURL: "https://amazing-clone.firebaseio.com",
    projectId: "amazing-clone",
    storageBucket: "amazing-clone.appspot.com",
    messagingSenderId: "695147882616",
    appId: "1:695147882616:web:14212cbdb962bb6490258d",
    measurementId: "G-JW5Q5EYXJJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };