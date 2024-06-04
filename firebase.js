import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import environment from "./environments/environment";

const firebaseConfig = environment.firebaseConfig;

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };


// import firebase from "firebase"

// const firebaseConfig = {
//     apiKey: "AIzaSyDHXT6MVJQGPNmDGDPJkon92iJIbOCJtZ0",
//     authDomain: "chit-chat-de826.firebaseapp.com",
//     projectId: "chit-chat-de826",
//     storageBucket: "chit-chat-de826.appspot.com",
//     messagingSenderId: "1001235024086",
//     appId: "1:1001235024086:web:3288458f1117c41a45e177",
//     measurementId: "G-DY6300PMCT"
//   };

// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// const db = app.firestore();
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export {db, auth, provider};
