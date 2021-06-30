import React from 'react'
import styles from './styles/Welcome.module.css';


const Welcome = () => {
    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.welcomeMessage}>
                <h1>iMessage</h1>
                <p>The new platform to send messages to your friends!</p>
            </div>
        </div>
    )
}

export default Welcome;