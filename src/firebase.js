import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKe-GLTPh3BU_uVfFcLAWnYEEJdEfkT4w',
  authDomain: 'slack-clone-1360f.firebaseapp.com',
  projectId: 'slack-clone-1360f',
  storageBucket: 'slack-clone-1360f.appspot.com',
  messagingSenderId: '908123936070',
  appId: '1:908123936070:web:f795cf662a3b1c5e18c147',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
