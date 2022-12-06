import React from 'react';
import PropTypes from 'prop-types';
import styles from './MeditationTitle.module.scss'

const MediationTitle = (props) => {
    const { title, subtitle } = props

    return (
        <div className={styles.titleWrapper}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.subtitle}>
                {subtitle}
            </div>
        </div>
    )
}

MediationTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default MediationTitle