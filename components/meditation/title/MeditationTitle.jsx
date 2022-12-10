import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './MeditationTitle.module.scss'


const MeditationTitle = (props) => {
    const { title, subtitle, openMenu } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={openMenu} size='2em'/>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
            </div>
        </div>
    )
}

MeditationTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    openMenu: PropTypes.func.isRequired,
}
 
export default MeditationTitle