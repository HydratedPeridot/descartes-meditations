import React from 'react';
import PropTypes from 'prop-types';
import styles from './ObjectedText.module.scss'

const ObjectedText = (props) => {
    const { openObjection, children } = props

    return <span className={styles.modalText} onClick={openObjection}>
        {children}
    </span>
}

ObjectedText.propTypes = {
    openObjection: PropTypes.func.isRequired,
    children: PropTypes.any
}

export default ObjectedText
