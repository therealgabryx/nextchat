import router from 'next/router';
import React from 'react';
import styles from '../styles/ChatPreview.module.css'

const ChatPreview = ({ name, text, uuid }) => {
  return (
    <div className={styles.card} id={uuid} onClick={ () => { handleChatOpen(uuid) } }>
      <div className={styles.image}></div> 
      <div className={styles.preview}>
        <span className={name === 'Global' ? styles.global : styles.contactName }>{ name ? name : 'Chat' }</span>
        <span className={text ? styles.holdertext : styles.textPreview}>{ text ? text : 'placeholder' }</span>
      </div> 
    </div> 
  ); 
} 

export default ChatPreview;  

const handleChatOpen = (uuid) => {
  uuid === 'global' ? router.push(`/home/${uuid}`) : ''
} 