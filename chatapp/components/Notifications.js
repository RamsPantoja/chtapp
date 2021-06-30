import React, { useEffect, useState } from 'react';
import NotificationCardFriendRequest from './NotificationCardFriendRequest';
import styles from './styles/Notifications.module.css';
import instance from '../axios';
import { getSession } from 'next-auth/client';

const Notifications = ({friendRequests}) => {

    const notifications = friendRequests.length > 0 ? friendRequests.map((friendRequest) => {
        return (
            <NotificationCardFriendRequest
            key={friendRequest._id}
            senderName={friendRequest.senderName}
            senderImg={friendRequest.senderImg}/>
        )
    }) : <p className={styles.noFriendRequestSpan}>You don´t have friend requests</p>;

    return (
        <div className={styles.notificationsContainer}>
            <div className={styles.notifications}>
                <span>Notifications</span>
                {notifications}
            </div>
        </div>
    )
}

export default Notifications;