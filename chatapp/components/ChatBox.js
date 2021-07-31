import React, { useState } from 'react';
import styles from './styles/ChatBox.module.css';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton'

const ChatBox = ({friendChatInf}) => {
    const [message, setMessage] = useState('');

    const handleInputOnChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        setMessage(value);
    }


    const {userName, img, isOnline} = friendChatInf;

    const hasMessageTyped = message !== '' ? <IconButton style={{color: '#b1b3b5'}}><SendIcon/></IconButton> : <IconButton style={{color: '#b1b3b5'}}><MicIcon/></IconButton>;

    return (
        <div className={styles.chatBoxContainer}>
            <div className={styles.chatBoxHeader}>
                <Avatar src={img}/>
                <div className={styles.chatBoxHeaderRight}>
                    <div className={styles.contactInf}>
                        <span className={styles.chatName}>{userName}</span>
                        <span className={styles.lastSeen}>{isOnline ? 'Online' : 'Offline'}</span>
                    </div>
                    <div className={styles.chatBoxHeaderIcons}>
                        <IconButton style={{color: '#b1b3b5'}}><SearchIcon fontSize='small'/></IconButton>
                        <IconButton style={{color: '#b1b3b5'}}><MoreVertIcon fontSize='small'/></IconButton>
                    </div>
                </div>
            </div>
            <div className={styles.chatBoxMessages}>
                <div className={styles.messageBoxStart}>
                    <div className={styles.messageStart}>
                        <span>
                            Estaba subiendo los cursos a la app, y como no tenía la imagen del curso puse otra para rellenar el espacio, pero ya hasta que estaba guardado recordé que no se podía editar la imagen ¿crees que me puedas ayudar con eso? Sólo es una.
                        </span>
                        <span className={styles.dateMessage}>{moment().format('LLL')}</span>
                    </div>
                </div>
                <div className={styles.messageBoxEnd}>
                    <div className={styles.messageEnd}>
                        <span>
                            Solo digame cual es y la imagen nueva
                        </span>
                        <span className={styles.dateMessage}>{moment().format('LLL')}</span>
                    </div>
                </div>
            </div>
            <div className={styles.chatBoxInputMessage}>
                <div className={styles.chatBoxInputMessageIcons}>
                    <IconButton style={{color: '#b1b3b5'}}><InsertEmoticonIcon/></IconButton>
                    <IconButton style={{color: '#b1b3b5'}}><AttachFileIcon/></IconButton>
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