import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalText.module.scss'

const ModalText = (props) => {
    const { openModal, children } = props

    return <span className={styles.modalText} onClick={openModal}>
        {children}
    </span>
}

ModalText.propTypes = {
    openModal: PropTypes.func.isRequired,
    children: PropTypes.any
}

export default ModalText