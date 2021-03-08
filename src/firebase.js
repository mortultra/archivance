// import firebase module 
import firebase from 'firebase/app';
// import the database infor from the firebase module
import 'firebase/database';
// initialized firebase

const firebaseConfig = {
  apiKey: "AIzaSyAlFjVkF3btndQP_FDWlTHrQ7mbu_2OwhI",
  authDomain: "veilance-closet-app.firebaseapp.com",
  databaseURL: "https://veilance-closet-app-default-rtdb.firebaseio.com",
  projectId: "veilance-closet-app",
  storageBucket: "veilance-closet-app.appspot.com",
  messagingSenderId: "925965083477",
  appId: "1:925965083477:web:8d8663045b4e7dd41ec5dc",
  measurementId: "G-7VHSJMET1J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;