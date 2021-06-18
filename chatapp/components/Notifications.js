import React from 'react';
import NotificationCardFriendRequest from './NotificationCardFriendRequest';
import styles from './styles/Notifications.module.css';

const Notifications = () => {
    return (
        <div className={styles.notificationsContainer}>
            <div className={styles.notifications}>
                <span>Notifications</span>
                <NotificationCardFriendRequest/>
            </div>
        </div>
    )
}

export default Notifications;