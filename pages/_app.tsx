import React from 'react' 
import Head from 'next/head' 
import '../styles/globals.css'

import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks'

import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  
  const userData = useUserData() 

  return ( 
  <UserContext.Provider value={userData}> 
    <Head> 
        <title>Next Chat</title> 
        <link rel="icon" href="/favicon.ico" /> 
    </Head>
      
    <Component {...pageProps} /> 
      

    <Toaster/>   
  </UserContext.Provider> 
  ) 
} 

export default MyApp 
