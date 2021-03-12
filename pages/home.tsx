import router from 'next/router';
import styles from '../styles/Index.module.css'
import React, { useContext, useEffect } from 'react';

import ChatPreview from '../components/ChatPreview'
import Loader from '../components/Loader';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

const home = () => {
  const { user } = useContext(UserContext)
  
  useEffect(() => {
    userUpdateRedirect(user);
  }, [user]) 

  return (
    !user ? 
      <main className={styles.centered}>
        <Loader color={''} size={''} />  
      </main> 
    :
    <main>
      <h1><i><b>nextchat</b></i></h1>
      
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />

      <SignOutButton/> 

    </main> 
  );
} 

export default home;

// Sign out Button 
function SignOutButton() { 
  return (
    <button onClick={() => handleSignOut()}>
      SignOut
    </button> 
  )
} 

const handleSignOut = () => {
  auth.signOut()
  router.push('/');
}

const userUpdateRedirect = (user) => {
  setTimeout(() => {
    !user ? router.push('/') : ''
  }, 1000) 
} 
