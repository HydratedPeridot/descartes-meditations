import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.scss'


const Header = (props) => {
    const { title, subtitle, handleDrawerOpenClose } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={handleDrawerOpenClose}/>
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

Header.propTypes = {
    title: PropTypes.string.isRequired,
    handleDrawerOpenClose: PropTypes.func.isRequired
}
 
export default Header