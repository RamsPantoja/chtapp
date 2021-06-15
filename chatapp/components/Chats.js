import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles/Chats.module.css';


const Chats = () => {
    return (
        <div className={styles.chatsContainer}>
            <div className={styles.chat}>
                <Avatar src='../img/pp2.jpg'/>
                <div className={styles.chatInf}>
                    <div className={styles.chatInfLeft}>
                        <span className={styles.chatName}>ChatName</span>
                        <span className={styles.chatCurrentMessage}>Current message</span>
                    </div>
                    <span>Date</span>
                </div>
            </div>
        </div>
    )
}

export default Chats;