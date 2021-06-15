import React from 'react';
import styles from './styles/LayoutSection.module.css';


const LayoutSection = ({children}) => {
    return (
        <div className={styles.sectionContainer}>
            {children}
        </div>
    )
}

export default LayoutSection;
