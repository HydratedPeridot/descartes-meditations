import React from 'react';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr'
import ObjectionContent from '../content/ObjectionContent';
import styles from './ObjectionDrawer.module.scss'

const ObjectionDrawer = (props) => {
    const { open, closeObjection } = props

    return <div 
        className={styles.objectionDrawer} 
        style={{
            height: open? '45%' : '0%',
            transition: 'height 400ms cubic-bezier(0.23, 1, 0.320, 1)',
        }}
    >
        <div className={styles.header}>
            <div className={styles.title}>
                Lorem ipsum dolor sit amet
            </div>
            <GrClose className={styles.closeButton} onClick={closeObjection}/>
        </div>
        <div className={styles.contentWrapper}>
            <ObjectionContent />
            <ObjectionContent />
        </div>
    </div>
}

ObjectionDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    closeObjection: PropTypes.func.isRequired
}

export default ObjectionDrawer