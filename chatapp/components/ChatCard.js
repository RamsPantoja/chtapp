import React from 'react';
import styles from './styles/ChatCard.module.css';
import Avatar from '@material-ui/core/Avatar';

const ChatCard = ({handleComponentContent}) => {
    return (
        <div className={styles.chat} onClick={(e) => {handleComponentContent(e, 'chat_box')}}>
            <Avatar src='../img/pp2.jpg'/>
            <div className={styles.chatInf}>
                <div className={styles.chatInfLeft}>
                    <span className={styles.chatName}>ChatName</span>
                    <span className={styles.chatCurrentMessage}>Current message</span>
                </div>
                <span>Date</span>
            </div>
        </div>
    )
}

export default ChatCard;