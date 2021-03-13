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
        <title>Nextchat</title> 
        <link rel="icon" href="/favicon.ico" /> 
        
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' /> 
        <meta name='application-name' content='Nextchat' /> 
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name='apple-mobile-web-app-title' content='Nextchat' />
        <meta name='description' content='a chat app built with React & Next.js. Powered by Firebase Auth, Firestore & Cloud Functions.' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        {/* <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />  */}
        <meta name='msapplication-TileColor' content='#303434' />  
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#303434' />
        <link rel="manifest" href="/manifest.json" />  
                  
    </Head>
      
    <Component {...pageProps} /> 
      
    <Toaster/>   
  </UserContext.Provider> 
  ) 
} 

export default MyApp 
