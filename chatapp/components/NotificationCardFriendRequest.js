import React from 'react';
import styles from './styles/NotificationCard.module.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

const NotificationCardFriendRequest = ({senderName, senderImg, senderId, receiverId, handleAcceptFriendRequest, notificationId}) => {

    return (
        <div className={styles.notificationCardFriendRequest}>
            <Avatar src={senderImg}/>
            <div className={styles.friendRequestInf}>
                <span>{senderName}</span>
                <div className={styles.friendIconsRequest}>
                    <Button 
                    size='small' 
                    style={{color: '#b1b3b5'}} 
                    endIcon={<CheckCircleIcon 
                    style={{color: '#056162'}}/>} 
                    onClick={(e) => {handleAcceptFriendRequest(e, senderId, receiverId, notificationId)}}>Accept</Button>
                    <Button size='small' style={{color: '#b1b3b5'}} endIcon={<CancelIcon style={{color:'#ed4242'}}/>}>Decline</Button>
                </div>
            </div>
        </div>
    )
}

export default NotificationCardFriendRequest;