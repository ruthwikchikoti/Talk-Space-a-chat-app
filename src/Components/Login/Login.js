import React from 'react';
import './Login.css';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => console.log(result))
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