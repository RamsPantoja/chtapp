import React, { useEffect, useState } from 'react';
import styles from './styles/index.module.css';
import SideBar from '../components/SideBar';
import { getSession } from 'next-auth/client';
import instance from '../axios';
import LayoutContent from '../components/LayoutContent';
import useHandleContentPage from '../components/hooks/useHandleContentPage';
import { io } from 'socket.io-client';

const home = ({session}) => {
  const [contentComponent, handleComponentContent] = useHandleContentPage();
  const socket = io('http://localhost:5200');

  useEffect(() => {
    socket.emit('user:connected', { email: session.user.email });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, []);

  return (
    <div className={styles.backgroundApp}>
      <div className={styles.chatContainer}>
        <SideBar 
        user={session.user}
        handleComponentContent={handleComponentContent}
        socket={socket}/>
        <LayoutContent children={contentComponent}/>
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

  if (session) {
    instance.post('/new_user', {
      name: session.user.name,
      email: session.user.email,
    })
    .catch((error) => {
      if (error) {
        window.location.reload();
      }
    });
  }

  return {
    props: {
      session: session
    }
  }
}

export default home;