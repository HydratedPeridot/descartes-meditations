import React from "react";
import PropTypes from 'prop-types';
import useModalTransition from '../../../hooks/useModalTransition';
import styles from './Modal.module.scss'


const modalTransitionDuration = 400;

const Modal = (props) => {
    const { open, onClose, children } = props

    const { overlayStyle, handleClose, handleTransitionEnd } = useModalTransition(open, onClose, modalTransitionDuration)

    return (
        <div className={styles.modalOverlay} style={overlayStyle} onTransitionEnd={handleTransitionEnd} onClick={handleClose}>
            <div className={styles.modal} style={{
                transform: open? 'none' : 'scale(0.5)',
                opacity: open? '1' : '0',
                transition: `transform ${modalTransitionDuration}ms cubic-bezier(0.23, 1, 0.320, 1), opacity ${modalTransitionDuration}ms cubic-bezier(0.23, 1, 0.320, 1)`
            }}>
                {children}
            </div>
        </div>
    )
}
    

export default Modal;