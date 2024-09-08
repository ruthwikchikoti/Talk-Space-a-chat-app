// utils/firebaseHelpers.js
import { doc, setDoc } from 'firebase/firestore';
import db from '../firebase';

export const saveUserToFirestore = async (user) => {
    console.log("Hello fbhelper");
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || `https://api.dicebear.com/6.x/initials/svg?seed=${user.displayName}`,
    };

    try {
        await setDoc(userRef, userData, { merge: true });
        console.log("User data saved to Firestore");
    } catch (error) {
        console.error("Error saving user data: ", error);
    }
};      