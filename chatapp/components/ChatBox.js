import React, { useState } from 'react';
import styles from './styles/ChatBox.module.css';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const ChatBox = () => {
    const [message, setMessage] = useState('');

    const handleInputOnChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        setMessage(value);
    }

    const hasMessageTyped = message !== '' ? <SendIcon style={{color: '#b1b3b5'}}/> : <MicIcon style={{color: '#b1b3b5'}}/>;

    return (
        <div className={styles.chatBoxContainer}>
            <div className={styles.chatBoxHeader}>
                <Avatar src='../img/pp2.jpg'/>
                <div className={styles.chatBoxHeaderRight}>
                    <div className={styles.contactInf}>
                        <span className={styles.chatName}>ChatName</span>
                        <span className={styles.lastSeen}>Last seen</span>
                    </div>
                    <div className={styles.chatBoxHeaderIcons}>
                        <SearchIcon fontSize='small'/>
                        <MoreVertIcon fontSize='small'/>
                    </div>
                </div>
            </div>
            <div className={styles.chatBoxMessages}>

            </div>
            <div className={styles.chatBoxInputMessage}>
                <div className={styles.chatBoxInputMessageIcons}>
                    <InsertEmoticonIcon/>
                    <AttachFileIcon/>
                </div>
                <form className={styles.chatBoxInputMessageInput}>
                    <input type='text' placeholder='Type a message' value={message} onChange={(e) => {handleInputOnChange(e)}}/>
                </form>
                {hasMessageTyped}
            </div>
        </div>
    )
}

export default ChatBox;