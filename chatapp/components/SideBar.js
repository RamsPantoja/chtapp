import React from 'react';
import styles from './styles/SideBar.module.css';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Menu from './Menu';
import Badge from '@material-ui/core/Badge';

const SideBar = ({user}) => {
    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.headerSideBar}>
                <Badge classes={{dot: styles.dotBadge}} overlap='circle' variant='dot' anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                    <Avatar src={user.image}/>
                </Badge>
                <div className={styles.headerIcons}>
                    <IconButton style={{color: '#b1b3b5'}}><DonutLargeIcon fontSize='small'/></IconButton>
                    <IconButton style={{color: '#b1b3b5'}}><ChatIcon fontSize='small'/></IconButton>
                    <Menu/>
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