import React from 'react';
import styles from './styles/Friends.module.css';
import FriendCard from './FriendCard';

const Friends = () => {
    return (
        <div className={styles.friendsContainer}>
            <div className={styles.friendsConnected}>
                <span>Connected -</span>
                <FriendCard/>
            </div>
            <div className={styles.friendsDisconnected}>
                <span>Disconnected -</span>
                <FriendCard/>
            </div>
        </div>
    )
}

export default Friends;