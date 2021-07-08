import React, { useEffect } from 'react';
import styles from './styles/index.module.css';
import SideBar from '../components/SideBar';
import { getSession, signOut } from 'next-auth/client';
import instance from '../axios';
import LayoutContent from '../components/LayoutContent';
import useHandleContentPage from '../components/hooks/useHandleContentPage';
import socket from '../socket';

const home = ({session}) => {
  const [contentComponent, handleComponentContent] = useHandleContentPage();

  if (session) {
    socket.auth = { session };
    socket.connect();
  }

  useEffect(() => {
    socket.on('connect_error', (err) => {
      if (err.message === 'User no login') {
        signOut();
      }
    });

    socket.emit('user:connected', { email: session.user.email });

    return () => {
      socket.emit('disconnect');
      socket.off('connect_error');
    }
  },[session]);

  return (
    <div className={styles.backgroundApp}>
      <div className={styles.chatContainer}>
        <SideBar 
        user={session.user}
        handleComponentContent={handleComponentContent}/>
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
      img: session.user.image
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