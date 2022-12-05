import React from 'react';
import styles from './SideMenu.module.css';

const SideMenu = (props) => {
    const { showSideMenu } = props
    const finalStyle = `${styles.menu} ${showSideMenu ? styles.opened : styles.closed}`

    return (
        <div className={finalStyle}>
        </div>
    )
}

export default SideMenu