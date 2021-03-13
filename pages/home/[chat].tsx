import React, { useContext } from 'react';
import styles from '../../styles/Index.module.css'
import Loader from '../../components/Loader'
import { UserContext } from '../../lib/context';
import router from 'next/router';

const _chat = () => {
  
  const { user } = useContext(UserContext)
  
  return (
    !user ? 
      <main className={styles.centered}>
        <Loader color={''} size={''} />  
      </main> 
      :
    <div>
    
      <div className={styles.head}>
        <main> 
          <h1><i><span onClick={handleBacknav}>nextchat</span> <span>&#8226; global</span></i></h1>
        </main>   
      </div>  
      
      <div className={styles.chatBody}> 
        <main>
            bodyy
        </main> 
      </div>
        
      <div className={styles.chatInput}> 
        <main>input</main> 
      </div>
       
    </div>
  );
} 

export default _chat;

const handleBacknav = () => {
  router.push('/home') 
}
