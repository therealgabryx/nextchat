import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <React.Fragment> 
    <Head>
        <title>Next Chat</title>
        <link rel="icon" href="/favicon.ico" />
    </Head> 
    <Component {...pageProps} /> 
  </React.Fragment>
  ) 
} 

export default MyApp
