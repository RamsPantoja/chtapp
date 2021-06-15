import React, { useEffect, useState } from 'react';
import styles from './styles/index.module.css';
import SideBar from '../components/SideBar';
import ChatBox from '../components/ChatBox';
import { getSession } from 'next-auth/client';
import io from 'socket.io-client';
import instance from '../axios';

const home = ({session}) => {
  let socket;
  const endPoint = 'http://localhost:5200'

  useEffect(() => {
    socket = io(endPoint);
    socket.emit('User connected', { name: session.user.name });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [endPoint]);

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

  if (session) {
    instance.post('/new_user', {
      name: session.user.name,
      email: session.user.email,
    })
    .catch((error) => {
      if (error) {
        return {
          redirect: {
            destination: '/signin',
            permanent: false
          }
        }
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