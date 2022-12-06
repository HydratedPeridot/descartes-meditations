import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.scss'


const Header = (props) => {
    const { handleDrawerOpenClose, children } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={handleDrawerOpenClose}/>
            {children}
        </div>
    )
}

Header.propTypes = {
    handleDrawerOpenClose: PropTypes.func.isRequired,
    children: PropTypes.object
}
 
export default Header