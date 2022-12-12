import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ObjectedText.module.scss'

const ObjectedText = (props) => {
    const { openObjection, children } = props

    const ref = useRef(null)

    const handleClick = () => {
        openObjection()
        setTimeout(() => ref.current.scrollIntoView({behavior: 'smooth', block: 'start'}), 200)
    }

    return <span ref={ref} className={styles.modalText} onClick={handleClick}>
        {children}
    </span>
}

ObjectedText.propTypes = {
    openObjection: PropTypes.func.isRequired,
    children: PropTypes.any
}

export default ObjectedText
