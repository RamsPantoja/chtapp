import React from 'react';
import styles from './styles/index.module.css';
import SideBar from '../components/SideBar';
import ChatBox from '../components/ChatBox';
import { getSession } from 'next-auth/client';

const home = ({session}) => {
  return (
    <div className={styles.backgroundApp}>
      <div className={styles.chatContainer}>
        <SideBar user={session.user}/>
        <ChatBox/>
      </div>
    </div>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req});

  if (!session && req) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: {
      session: session
    }
  }
}

export default home;