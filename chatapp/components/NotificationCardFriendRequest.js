import React from 'react';
import styles from './styles/NotificationCard.module.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';

const NotificationCardFriendRequest = () => {
    return (
        <div className={styles.notificationCardFriendRequest}>
            <Avatar/>
            <div className={styles.friendRequestInf}>
                <span>Friend</span>
                <div className={styles.friendIconsRequest}>
                    <Button size='small' style={{color: '#b1b3b5'}} endIcon={<CheckCircleIcon style={{color: '#056162'}}/>}>Accept</Button>
                    <Button size='small' style={{color: '#b1b3b5'}} endIcon={<CancelIcon style={{color:'#ed4242'}}/>}>Decline</Button>
                </div>
            </div>
        </div>
    )
}

export default NotificationCardFriendRequest;