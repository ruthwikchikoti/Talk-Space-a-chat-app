import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDil3ErQ6YzOgYfsnhnnb8BN1Msvn9icCg",
    authDomain: "talkspace-0510.firebaseapp.com",
    projectId: "talkspace-0510",
    storageBucket: "talkspace-0510.appspot.com",
    messagingSenderId: "444048478091",
    appId: "1:444048478091:web:dcacc61d66b56a2c3aa98e",
    measurementId: "G-05EV17YX3D"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, collection, doc, onSnapshot };
export default db;