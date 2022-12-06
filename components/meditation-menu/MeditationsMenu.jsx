import React from 'react';
import PropTypes from 'prop-types';
import meditiations from '../../ressources/meditations';
import styles from './MeditationsMenu.module.css'

const MeditationsMenu = (props) => {
    const { handleSelectMeditation } = props 

    return (
        <div className={styles.menu}>
            {meditiations.map((item, key) => {
                return (
                    <div className={styles.itemWrapper} onClick={handleSelectMeditation(item)}>
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
    selectMeditation: PropTypes.func.isRequired
}

export default MeditationsMenu