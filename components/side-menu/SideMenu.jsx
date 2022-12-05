import React, { useEffect, useState } from 'react';
import styles from './SideMenu.module.css';

const SideMenu = (props) => {
    const { showSideMenu, handleMenuOpenClose } = props

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, [showSideMenu])

    const handleTransitionEnd = () => {
        if (!showSideMenu) {
            setIsVisible(false)
        }
    }

    const handleBackDropClick = () => {
        if (showSideMenu) {
            handleMenuOpenClose()
        }
    }

    const drawerStyle = `${styles.drawer} ${showSideMenu ? styles.opened : styles.closed}`
    const backdropStyle = `${styles.drawerBackdrop} ${showSideMenu ? styles.opaque : styles.transparent}`

    return (
        <div className={styles.drawerWrapper} style={{
            visibility: isVisible? 'visible' : 'hidden'
        }}>
            <div className={drawerStyle} onTransitionEnd={handleTransitionEnd}/>
            <div className={backdropStyle} onClick={handleBackDropClick}/>
        </div>
    )
}

export default SideMenu