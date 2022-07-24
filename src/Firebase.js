// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOkbVP4VSd8TE7Orku_74aYyYujK0sIQw",
    authDomain: "twitterclone-4c93c.firebaseapp.com",
    projectId: "twitterclone-4c93c",
    storageBucket: "twitterclone-4c93c.appspot.com",
    messagingSenderId: "744577544543",
    appId: "1:744577544543:web:c6fce0defae785e50c06ea",
    measurementId: "G-J4YNCPH7TW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db =getFirestore(app);
export default db;