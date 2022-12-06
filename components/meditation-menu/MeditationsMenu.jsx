import React from 'react';
import meditiations from '../../ressources/meditations';
import styles from './MeditationsMenu.module.css'

const MeditationsMenu = (props) => {
    return (
        <div className={styles.menu}>
            {meditiations.map((item, key) => {
                return (
                    <div className={styles.itemWrapper}>
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

export default MeditationsMenu