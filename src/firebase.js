import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDfht7-isCGCw_WMT8iKXwYHKb2m-fs8lo",
    authDomain: "goalcoach-8bd8e.firebaseapp.com",
    databaseURL: "https://goalcoach-8bd8e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "goalcoach-8bd8e",
    storageBucket: "goalcoach-8bd8e.appspot.com",
    messagingSenderId: "378136337825",
    appId: "1:378136337825:web:261dcb4db6f676453dffe0"
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseDB = firebaseApp.database().ref();
export const firebaseDBA = firebaseApp.database();