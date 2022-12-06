import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Drawer.module.scss';

const Drawer = (props) => {
    const { open, onClose, children } = props

    const [visible, setVisible] = useState(open)

    useEffect(() => {
        if (open) {
            setVisible(true)
        }
    }, [open])

    const handleTransitionEnd = () => {
        if (!open) {
            setVisible(false)
        }
    }

    const drawerStyle = `${styles.drawer} ${open ? styles.opened : styles.closed}`
    const backdropStyle = `${styles.drawerBackdrop} ${open ? styles.opaque : styles.transparent}`

    return (
        <div className={styles.drawerWrapper} style={{
            visibility: (visible)? 'visible' : 'hidden'
        }}
        >
            <div className={drawerStyle} onTransitionEnd={handleTransitionEnd}>
                {children}
            </div>
            <div className={backdropStyle} onClick={() => onClose()}/>
        </div>
    )
}

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object
}

export default Drawer