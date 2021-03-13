import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from '../../styles/Index.module.css'
import Loader from '../../components/Loader'
import { UserContext } from '../../lib/context';
import router from 'next/router';
import { auth, firestore } from '../../lib/firebase';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';

const chat = () => {
  const { user } = useContext(UserContext)
  
  const messagesRef = firestore.collection('global_messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const scrollToElement = useRef(null);
  
  const [messages] = useCollectionData(query, { idField: 'id' })
  
  const [formValue, setFormValue] = useState('')
  
  const sendMessage = async(e) => {
    e.preventDefault();
    
    const { uid, photoURL } = auth.currentUser;
  
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    
    setFormValue('')
    
    scrollToElement && scrollToElement.current.scrollIntoView({ behaviour: 'smooth' })
  }
  
  useEffect(() => {
    setTimeout(() => {
      scrollToElement.current.scrollIntoView({ behaviour: 'smooth' })
    }, 250)
  }, []) 
  
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
        <div className={styles.chatMessages}> 
          { 
            messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)
          } 
          
            <div ref={scrollToElement}/>
        </div> 
      </div>  
        
      <div className={styles.chatInput}> 
        <form onSubmit={sendMessage}>
          <main className={styles.horizFlex}>  
              <textarea rows={2} value={formValue} onChange={ e => setFormValue(e.target.value) }/>
              <button type='submit'>send</button> 
          </main>
        </form> 
      </div> 
       
    </div>
  );
} 

export default chat;

const handleBacknav = () => {
  router.push('/home') 
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
      <div className="img">
        <img src={photoURL} alt="profile-pic"/> 
      </div> 
      <p>{text}</p> 
    </div> 
  )
}

