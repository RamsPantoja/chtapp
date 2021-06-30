import React from 'react';
import styles from './styles/Chats.module.css';
import ChatCard from './ChatCard';

const Chats = ({handleComponentContent}) => {
    return (
        <div className={styles.chatsContainer}>
            <ChatCard handleComponentContent={handleComponentContent}/>
        </div>
    )
}

export default Chats;