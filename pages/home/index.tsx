import router from 'next/router';
import styles from '../../styles/Index.module.css'
import React, { useContext, useEffect } from 'react';

import ChatPreview from '../../components/ChatPreview'
import Loader from '../../components/Loader'
import { UserContext } from '../../lib/context';
import { auth } from '../../lib/firebase';

const index = () => {
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
    <div>
      <div className={styles.head}>
        <main className={styles.listHead}>
          <div>
            <h1><i>nextchat</i></h1>
          </div>
          <div>
            <SignOutButton/> 
          </div>
        </main>
      </div> 
      
      <div className={styles.chatList}>
        <main>
          <ChatPreview name={'Global'} text={'shared global chat'} uuid={'global'}/>
          
          <ChatPreview name={''} text={''} uuid={'test1'}/>
          <ChatPreview name={''} text={''} uuid={'test2'}/> 
          <ChatPreview name={''} text={''} uuid={'test3'}/> 
          <ChatPreview name={''} text={''} uuid={'test4'}/> 
        </main>
      </div>
        
    </div> 
  );
} 

export default index;

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
