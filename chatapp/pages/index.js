import React, { useEffect } from 'react';
import styles from './styles/index.module.css';
import SideBar from '../components/SideBar';
import { getSession, signOut } from 'next-auth/client';
import instance from '../axios';
import LayoutContent from '../components/LayoutContent';
import useHandleContentPage from '../components/hooks/useHandleContentPage';
import socket from '../socket';

const home = ({session}) => {
  const [
    contentComponent, 
    handleComponentContent, 
    handleChatBoxComponentWithFriendInf ] = useHandleContentPage();

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
      socket.off('connect_error');
      socket.emit('disconnect')
      socket.disconnect();
    }
  },[session]);

  return (
    <div className={styles.backgroundApp}>
      <div className={styles.chatContainer}>
        <SideBar 
        user={session.user}
        handleComponentContent={handleComponentContent}
        handleChatBoxComponentWithFriendInf={handleChatBoxComponentWithFriendInf}/>
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
        console.log(error)
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