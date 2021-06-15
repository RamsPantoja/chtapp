import React, { useState } from 'react';
import styles from './styles/SideBar.module.css';
import Avatar from '@material-ui/core/Avatar';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Menu from './Menu';
import Badge from '@material-ui/core/Badge';
import LayoutSection from './LayoutSection';
import Chats from './Chats';
import Friends from './Friends';
import NotificationsIcon from '@material-ui/icons/Notifications';

const SideBar = ({user}) => {
    const [whichComponent, setWhichComponent] = useState('chats');
    let sectionComponent;

    const handleComponentSection = (e, component) => {
        e.preventDefault();
        setWhichComponent(component);
    }

    switch (whichComponent) {
        case 'chats':
            sectionComponent = <Chats/>;
            break;
        case 'friends':
            sectionComponent = <Friends/>
            break;
        default:
            sectionComponent = <Chats/>
            break;
    }

    return (
        <div className={styles.sideBarContainer}>
            <div className={styles.headerSideBar}>
                <Badge classes={{dot: styles.dotBadge}} overlap='circle' variant='dot' anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                    <Avatar src={user.image}/>
                </Badge>
                <div className={styles.headerIcons}>
                    <IconButton style={{color: '#b1b3b5'}}>
                        <Badge badgeContent={2} classes={{badge: styles.badgeNotifications}}>
                            <NotificationsIcon fontSize='small'/>
                        </Badge>
                    </IconButton>
                    <IconButton style={{color: '#b1b3b5'}} onClick={(e) => {handleComponentSection(e, 'chats')}}><ChatIcon fontSize='small'/></IconButton>
                    <IconButton style={{color: '#b1b3b5'}} onClick={(e) => {handleComponentSection(e, 'friends')}}><EmojiPeopleIcon fontSize='small'/></IconButton>
                    <Menu/>
                </div>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.backgroundSearchBar}>
                    <SearchIcon fontSize='small'/>
                    <input type='text' placeholder='Search or start a new chat' className={styles.inputSearch}/>
                </div>
            </div>
            <LayoutSection>
                {sectionComponent}
            </LayoutSection>
        </div>
    )
}

export default SideBar;