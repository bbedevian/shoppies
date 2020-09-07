import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBvdh5YwPQrKyg6IobKONwFZFUxasKvwwI",
    authDomain: "shoppies-backend.firebaseapp.com",
    databaseURL: "https://shoppies-backend.firebaseio.com",
    projectId: "shoppies-backend",
    storageBucket: "shoppies-backend.appspot.com",
    messagingSenderId: "704952833232",
    appId: "1:704952833232:web:35cd5404c73e873bf8bad5",
    measurementId: "G-D48MRJ1PLP"
  };

  firebase.initializeApp(config)

  export const firestore = firebase.firestore();

  export default firebase;