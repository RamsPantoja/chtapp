import React, { useState } from 'react'
import styles from './styles/AddFriend.module.css';
import instance from '../axios'
import { getSession } from 'next-auth/client';


const AddFriend = () => {
    const [friendEmail, setFriendEmail] = useState('');

    const handleOnChangeFriendEmail = (e) => {
        const friendEmail = e.target.value;
        setFriendEmail(friendEmail);
    }

    const sendFriendRequest = async (e) => {
        e.preventDefault();
        const session = await getSession();
        instance.post('/friend_request', {
            senderId: session.user.email,
            senderName: session.user.name,
            senderImg: session.user.image,
            receiverId: friendEmail,

        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <div className={styles.addFriendContainer}>
            <div className={styles.addFriendForm}>
                <h3>ADD FRIEND</h3>
                <p>You can add a new friend with its email.</p>
                <form className={styles.addFriendInput} onSubmit={(e) => {sendFriendRequest(e)}}>
                    <input type='email' placeholder='Type email' value={friendEmail} onChange={(e) => {handleOnChangeFriendEmail(e)}}/>
                    <button type='submit'>Send friend request</button>
                </form>
            </div>
            <div className={styles.addFriendSpan}>
                <p>Add Your Friends!</p>
            </div>
        </div>
    )
}

export default AddFriend;