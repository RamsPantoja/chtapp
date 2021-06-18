import React from 'react';
import styles from './styles/LayoutContent.module.css';

const LayoutContent = ({children}) => {
    return (
        <div className={styles.layoutContentContainer}>
            {children}
        </div>
    )
}

export default LayoutContent;