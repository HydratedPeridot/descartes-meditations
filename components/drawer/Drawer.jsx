import React, { useEffect, useState } from 'react';
import styles from './Drawer.module.css';
import PropTypes from 'prop-types';

const Drawer = (props) => {
    const { showDrawer, handleDrawerOpenClose, children } = props

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, [showDrawer])

    const handleTransitionEnd = () => {
        if (!showDrawer) {
            setIsVisible(false)
        }
    }

    const handleBackDropClick = () => {
        if (showDrawer) {
            handleDrawerOpenClose()
        }
    }

    const drawerStyle = `${styles.drawer} ${showDrawer ? styles.opened : styles.closed}`
    const backdropStyle = `${styles.drawerBackdrop} ${showDrawer ? styles.opaque : styles.transparent}`

    return (
        <div className={styles.drawerWrapper} style={{
            visibility: isVisible? 'visible' : 'hidden'
        }}
        >
            <div className={drawerStyle} onTransitionEnd={handleTransitionEnd}>
                {children}
            </div>
            <div className={backdropStyle} onClick={handleBackDropClick}/>
        </div>
    )
}

Drawer.PropTypes = {
    showDrawer: PropTypes.bool.isRequired,
    handleDrawerOpenClose: PropTypes.func.isRequired,
    children: PropTypes.object
}

export default Drawer