import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronRight } from 'react-icons/bs'
import styles from './ObjectionTitle.module.scss'

const ObjectionTitle = (props) => {
    const { title, subtitle, closeObjection } = props

    return (
        <div className={styles.header}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>
                    {title}
                </div>
                { subtitle 
                ?  <div className={styles.subtitle}>
                    {subtitle}
                </div> 
                : null }
            </div>
            <BsChevronRight className={styles.closeButton} onClick={closeObjection} size='2em'/>
        </div>
    )
}

ObjectionTitle.propTypes = {
    title: PropTypes.object.isRequired,
    subtitle: PropTypes.object,
    closeObjection: PropTypes.func.isRequired
}

export default ObjectionTitle