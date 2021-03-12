import React from 'react';
import styles from '../styles/ChatPreview.module.css'

const ChatPreview = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>

      </div>
      <div className={styles.preview}>
        <span className={styles.contactName}>Name</span>
        <span className={styles.textPreview}></span>
      </div>
    </div>
  ); 
}

export default ChatPreview; 
