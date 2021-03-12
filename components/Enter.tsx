import React, { useContext, useEffect } from 'react';
import styles from '../styles/Enter.module.css'
import { auth, googleAuthProvider, firestore } from '../lib/firebase'

const Enter = () => {

    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider); 
    } 

    return (
        <main className={styles.enter}>
            <div className={styles.head}>
                <h4>welcome to</h4>
                <h1><i>nextchat</i></h1>
            </div> 
            
            <div className={styles.btn}>
                <button className="btn-google" onClick={signInWithGoogle}>
                    <img src={'/google.png'} alt="Sign in with Google" />
                    Sign in with Google
                </button>
            </div> 
        </main> 
    );
}

export default Enter;
