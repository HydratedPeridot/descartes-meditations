import React from 'react';
import Image from 'next/image'
import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import meditiations from '../../../ressources/meditations';
import styles from './MeditationsMenu.module.scss'

const MeditationsMenu = (props) => {
    const { closeMenu, handleSelectMeditation } = props 

    return (
        <div className={styles.menu}>
            <BsChevronLeft className={styles.closeButton} onClick={closeMenu} size='2em'/>
            <div className={styles.menuWrapper}>
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
                    )})}
            </div>
            <div className={styles.authors}>
                <a href="mailto:armelle.debonlier@ens.psl.eu" className={styles.authorLine}>
                    <span>Armelle Debonlier</span> 
                    <AiOutlineMail /> 
                    <span>armelle.debonlier@ens.psl.eu</span>  
                </a>
                <a href="mailto:paul.dudnic@outlook.com" className={styles.authorLine}>
                    <span>Paul Dudnic</span> 
                    <AiOutlineMail /> 
                    <span>paul.dudnic@outlook.com</span>  
                </a>
            </div>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.vercel}
            >
                <span>Réalisé avec</span>
                <span>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </div>
    )
}

MeditationsMenu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
    handleSelectMeditation: PropTypes.func.isRequired,
}

export default MeditationsMenu