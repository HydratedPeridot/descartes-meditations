import React from 'react';
import PropTypes from 'prop-types';

import ObjectionContent from '../content/ObjectionContent';
import styles from './ObjectionDrawer.module.scss'
import ObjectionTitle from '../title/ObjectionTitle';

const transitionDuration = 300

const ObjectionDrawer = (props) => {
    const { objection, open, closeObjection } = props

    return <div 
        className={styles.objectionDrawer} 
        style={{
            width: open? (objection.response ? '60%' : '45%') : '0%',
            boxShadow: open? '-1vw 0vh 5vh rgba(0, 0, 0, 0.5)' : 'none',
            transition: `width ${transitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow ${transitionDuration}ms cubic-bezier(0.165, 0.84, 0.44, 1)`
        }}
    >
        <ObjectionTitle title={objection.title} subtitle={objection.subtitle} closeObjection={closeObjection}/>
        <div className={styles.contentWrapper}>
            <ObjectionContent {...objection.objection}/>
            { objection.response ? <ObjectionContent {...objection.response}/> : null }
        </div>
    </div>
}

ObjectionDrawer.propTypes = {
    objection: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeObjection: PropTypes.func.isRequired
}

export default ObjectionDrawer