import React, { useState, Fragment, useEffect } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { motion } from 'framer-motion';
import styles from './styles/Menu.module.css';
import { signOut } from 'next-auth/client';

const variants = {
    open: { 
        display: 'block',
        y: 10, 
        x: -160
    },
    closed: { 
        opacity: 0, 
        y: 0, 
        x: -160,
        transitionEnd: {
            display: 'none'
        }
    },
}

const MenuMore = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOnFocus, setIsOnFocus] = useState('');

    const openMenu = (e) => {
        e.preventDefault();
        if (isOpen) {
            setIsOpen(false);
            setIsOnFocus('rgba(0, 0, 0, 0)');
        } else {
            setIsOpen(true);
            setIsOnFocus('rgba(0, 0, 0, 0.1)');
        }
    }

    useEffect(() => {
        window.onclick = (e) => {
            let clickOutside = e.target;
            if (clickOutside && isOpen === true) {
                setIsOpen(false);
                setIsOnFocus('rgba(0, 0, 0, 0)');
            }
        }
    })

    return (
        <Fragment>
            <IconButton style={{color: '#b1b3b5', backgroundColor: `${isOnFocus}`}} onClick={(e) => {openMenu(e)}}>
                <MoreVertIcon fontSize='small'/>
            </IconButton>
            <motion.nav
            animate={isOpen ? "open" : 'closed'}
            variants={variants}
            initial={{
                display: 'none',
                y: 0, 
                x: -160,
            }}>
                <motion.ul className={styles.backgroundListMenu}>
                    <motion.li className={styles.menuItem}>New group</motion.li>
                    <motion.li className={styles.menuItem}>Create a room</motion.li>
                    <motion.li className={styles.menuItem}>Profile</motion.li>
                    <motion.li className={styles.menuItem}>Settings</motion.li>
                    <motion.li className={styles.menuItem} onClick={() => signOut()}>Log out</motion.li>
                </motion.ul>
            </motion.nav>
        </Fragment>
    )
}

export default MenuMore;