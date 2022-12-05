import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.css'


const Header = (props) => {
    const { title, openCloseSideMenu } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={openCloseSideMenu}/>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    openCloseSideMenu: PropTypes.func.isRequired
}
 
export default Header;