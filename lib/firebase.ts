import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage' 

const firebaseConfig = {
  apiKey: "AIzaSyCS-2S4GnviA97-Jnwy8Wbo3aZB2u8xtps",
  authDomain: "nextchat-6a21f.firebaseapp.com",
  projectId: "nextchat-6a21f",
  storageBucket: "nextchat-6a21f.appspot.com",
  messagingSenderId: "640957096072",
  appId: "1:640957096072:web:4e30c0d3371b4bd3467f3d",
  measurementId: "G-N2CXQM74EB"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig) 
}

export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore() 
export const storage = firebase.storage()  