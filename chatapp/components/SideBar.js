import React from 'react';
import styles from './styles/SideBar.module.css';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const SideBar = () => {
    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.headerSideBar}>
                <Avatar src='../img/pp.jpg'/>
                <div className={styles.headerIcons}>
                    <DonutLargeIcon fontSize='small'/>
                    <ChatIcon fontSize='small'/>
                    <MoreVertIcon fontSize='small'/>
                </div>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.backgroundSearchBar}>
                    <SearchIcon fontSize='small'/>
                    <input type='text' placeholder='Search or start a new chat' className={styles.inputSearch}/>
                </div>
            </div>
            <div className={styles.chatsBar}>
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
        </div>
    )
}

export default SideBar;