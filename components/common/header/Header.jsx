import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.scss'


const Header = (props) => {
    const { toggleDrawer, children } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={toggleDrawer}/>
            {children}
        </div>
    )
}

Header.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    children: PropTypes.object
}
 
export default Header