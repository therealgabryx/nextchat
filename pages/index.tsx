import styles from '../styles/Index.module.css'
import { auth, googleAuthProvider, firestore } from '../lib/firebase'
import { useContext, useState, useEffect, useCallback } from 'react'
import { UserContext } from '../lib/context'

import router, { useRouter } from 'next/router'

import Loader from '../components/Loader'
import Enter from '../components/Enter'

export default function index() {
  const router = useRouter() 
  const { user } = useContext(UserContext) 
  
  useEffect(() => {
    userUpdateRedirect(user);
  }, [user]) 

  return (
    user ? <main className={styles.centered}>
              <Loader color={''} size={''} /> 
            </main> : <Enter/> 
  ) 
} 

const userUpdateRedirect = (user) => {
  setTimeout(() => {
    user ? router.push('/home') : ''
  }, 1000) 
} 



