import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
  databaseURL: "https://updates-app-4004f.firebaseio.com",
  projectId: "updates-app-4004f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
