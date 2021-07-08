import React from 'react';
import styles from './styles/Friends.module.css';
import FriendCard from './FriendCard';

const Friends = ({friendsByUser}) => {
    return (
        <div className={styles.friendsContainer}>
            <div className={styles.friendsConnected}>
                <span>Connected -</span>
                { friendsByUser.map((friend) => {
                    if (friend.isOnline === true) {
                        return (
                            <FriendCard
                            key={friend._id}
                            userName={friend.userName}
                            isOnline={friend.isOnline}
                            img={friend.img}/>
                        )
                    }
                })}
            </div>
            <div className={styles.friendsDisconnected}>
                <span>Disconnected -</span>
                {
                    friendsByUser.map((friend) => {
                        if (friend.isOnline === false) {
                            return (
                                <FriendCard
                                key={friend._id}
                                userName={friend.userName}
                                isOnline={friend.isOnline}
                                img={friend.img}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Friends;