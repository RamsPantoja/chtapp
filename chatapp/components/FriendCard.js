import React, { useEffect, useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import { motion } from 'framer-motion';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './styles/FriendCard.module.css';
import useHandleOnClickOutside from './hooks/useHandleOnClickOutside';

const FriendCard = () => {
    const wrapperRef = useRef(null)
    const [open, isOnFocus, openMenu] = useHandleOnClickOutside(wrapperRef);

    const variants = {
        open: {
            display: 'block',
            x: -15,
            y: 15,
            zIndex: 1000
        },
        closed: {
            opacity: 0,
            x: -15,
            y: 15,
            transitionEnd: {
                display: 'none'
            }
        }
    }

    return (
        <div className={styles.friendCard}>
            <Avatar/>
            <div className={styles.friendCardInf}>
                <div className={styles.friendCardLeftInf}>
                    <span>FrienName</span>
                    <span>Status</span>
                </div>
                <div className={styles.friendCardIcons}>
                    <IconButton style={{color: '#b1b3b5'}}>
                        <ChatBubbleIcon fontSize='small'/>
                    </IconButton>
                    <IconButton style={{color: '#b1b3b5', backgroundColor: `${isOnFocus}`}} onClick={openMenu} ref={wrapperRef}>
                        <MoreVertIcon fontSize='small'/>
                    </IconButton>
                    <motion.div
                    animate={open ? 'open' : 'closed'}
                    variants={variants}
                    initial={{
                        display: 'none'
                    }}>
                        <motion.ul className={styles.backgroundListMenu}>
                            <motion.li className={styles.menuItem}>Delete friend</motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FriendCard;