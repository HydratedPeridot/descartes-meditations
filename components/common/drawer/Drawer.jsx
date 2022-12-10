import React from 'react';
import PropTypes from 'prop-types';
import useModalTransition from '../../../hooks/useModalTransition';
import styles from './Drawer.module.scss';

const drawerTransitionDuration = 300;

const Drawer = (props) => {
    const { open, onClose, children } = props

    const { overlayStyle, handleClose, handleTransitionEnd } = useModalTransition(open, onClose, drawerTransitionDuration)

    return (
        <div className={styles.drawerOverlay} style={overlayStyle} onTransitionEnd={handleTransitionEnd} onClick={handleClose}>
            <div className={styles.drawer} style={{
                transform: open? 'none' : 'translateX(-100%)',
                boxShadow: open? '1vw 0vh 5vh rgba(0, 0, 0, 0.5)' : 'none',
                transition: `transform ${drawerTransitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow ${drawerTransitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`
            }}>
                {children}
            </div>
        </div>
    )
}

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object
}

export default Drawer