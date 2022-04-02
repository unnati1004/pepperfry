import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuENoAEGkId6zeR6uj8w08QGM8I4g3xHA",
  authDomain: "pepperfry-firebase-auth.firebaseapp.com",
  projectId: "pepperfry-firebase-auth",
  storageBucket: "pepperfry-firebase-auth.appspot.com",
  messagingSenderId: "677813062493",
  appId: "1:677813062493:web:bc54c7e80c78dfb241b6b4"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

  export{auth, googleAuthProvider, facebookAuthProvider};