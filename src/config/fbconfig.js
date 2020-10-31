import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOwjVof8qJhRRd7gzNoh8Dv9xRoNZp-pw",
    authDomain: "watersupply-9c98b.firebaseapp.com",
    databaseURL: "https://watersupply-9c98b.firebaseio.com",
    projectId: "watersupply-9c98b",
    storageBucket: "watersupply-9c98b.appspot.com",
    messagingSenderId: "710903373510",
    appId: "1:710903373510:web:a8713b5749820a6e3b41c7",
    measurementId: "G-NEST73B2L8"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const db = myFirebase.firestore(); 