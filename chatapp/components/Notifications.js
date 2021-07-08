import React from 'react';
import NotificationCardFriendRequest from './NotificationCardFriendRequest';
import styles from './styles/Notifications.module.css';

const Notifications = ({friendRequests, receiverId, handleAcceptFriendRequest}) => {

    const notifications = friendRequests.length > 0 ? friendRequests.map((friendRequest) => {
        return (
            <NotificationCardFriendRequest
            key={friendRequest._id}
            senderName={friendRequest.senderName}
            senderImg={friendRequest.senderImg}
            senderId={friendRequest.senderId}
            receiverId={receiverId}
            handleAcceptFriendRequest={handleAcceptFriendRequest}/>
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