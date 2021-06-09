import React from 'react';
import styles from './styles/index.module.css';
import SideBar from '../components/SideBar';
import ChatBox from '../components/ChatBox';


const home = () => {
  return (
    <div className={styles.backgroundApp}>
      <div className={styles.chatContainer}>
        <SideBar/>
        <ChatBox/>
      </div>
    </div>
  )
}

export default home;