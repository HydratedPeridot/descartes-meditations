import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs'
import meditiations from '../../../ressources/meditations';
import styles from './MeditationsMenu.module.scss'

const MeditationsMenu = (props) => {
    const { closeMenu, handleSelectMeditation } = props 

    return (
        <div className={styles.menu}>
            <BsChevronLeft className={styles.closeButton} onClick={closeMenu} size='2em'/>
            {meditiations.map((item) => {
                return (
                    <div key={item.id} className={styles.itemWrapper} onClick={handleSelectMeditation(item)}>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                        <div className={styles.subtitle}>
                            {item.subtitle}
                        </div>
                    </div>    
                )
            }
        )}
        </div>
    )
}

MeditationsMenu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    handleSelectMeditation: PropTypes.func.isRequired,
}

export default MeditationsMenu