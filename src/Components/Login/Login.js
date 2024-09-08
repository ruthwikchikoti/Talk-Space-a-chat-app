import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from '../../StateProvider';
import { saveUserToFirestore } from '../../utils/firebaseHelpers';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        console.log(auth);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUserToFirestore(user).then(() => {
                    dispatch({
                        type: "SET_USER",
                        user: user,
                    });
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__container'>
                <img className='login__image' src="https://kids.kiddle.co/images/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="whatsapp"/>
                <div className='login__text'>
                    <h1>Sign in to TalkSpace</h1>
                </div>
                <button className='login__button' onClick={signIn}>Sign in with Google</button>
            </div>      
        </div>
    );
}

export default Login;