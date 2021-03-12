import styles from '../styles/Home.module.css'
import ChatPreview from '../components/ChatPreview'

export default function Home() {
  return (
    <div> 
      <main>
        <h1><i><b>nextchat</b></i></h1>
        
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />
        <ChatPreview />

      </main> 
    </div> 
  ) 
}

