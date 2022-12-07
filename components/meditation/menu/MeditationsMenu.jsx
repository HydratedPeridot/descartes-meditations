import React from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr'
import meditiations from '../../../ressources/meditations';
import styles from './MeditationsMenu.module.scss'

const MeditationsMenu = (props) => {
    const { closeMenu, handleSelectMeditation } = props 

    return (
        <div className={styles.menu}>
            <GrClose className={styles.closeButton} onClick={closeMenu}/>
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