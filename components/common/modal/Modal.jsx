import React, { useEffect, useState } from "react";
import styles from './Modal.module.scss'


const Modal = (props) => {
    const { open, hide, children } = props

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

    const modalStyle = `${styles.modal} ${open ? styles.opened : styles.closed}`
    const backdropStyle = `${styles.modalBackdrop} ${open ? styles.opaque : styles.transparent}`

    return (       
        <div className={styles.modalWrapper} style={{
            visibility: (visible)? 'visible' : 'hidden'
        }}>
            <div className={modalStyle} onTransitionEnd={handleTransitionEnd}>
                {children}
            </div>
            <div className={backdropStyle} onClick={hide} />
        </div>
    )
}
    

export default Modal;