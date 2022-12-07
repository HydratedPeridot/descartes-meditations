import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.scss'


const Header = (props) => {
    const { openMenu, children } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={openMenu}/>
            {children}
        </div>
    )
}

Header.propTypes = {
    openMenu: PropTypes.func.isRequired,
    children: PropTypes.object
}
 
export default Header