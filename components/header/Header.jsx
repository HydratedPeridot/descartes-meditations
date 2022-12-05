import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './Header.module.css'


const Header = (props) => {
    const { title, handleMenuOpenClose } = props

    return (
        <div className={styles.header}>
            <AiOutlineMenu className={styles.menuButton} onClick={handleMenuOpenClose}/>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    handleMenuOpenClose: PropTypes.func.isRequired
}
 
export default Header;