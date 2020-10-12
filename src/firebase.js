// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBz2IkLFDKbbBlI3RXttc3cyFIF0qQ5BUw",
  authDomain: "facebook-clone-f74c6.firebaseapp.com",
  databaseURL: "https://facebook-clone-f74c6.firebaseio.com",
  projectId: "facebook-clone-f74c6",
  storageBucket: "facebook-clone-f74c6.appspot.com",
  messagingSenderId: "1084449586600",
  appId: "1:1084449586600:web:9ac3874e12bde2d842319d",
  measurementId: "G-6FJ4FT2E9J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
