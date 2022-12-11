import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ObjectionContent.module.scss'
import objections from '../../../ressources/objections';

const ObjectionContent = (props) => {
    const { title, content, footnotes } = props 

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.content}>
                {content}
                {
                    footnotes.length 
                    ? <div className={styles.footnotes}>
                        {footnotes.map((note) => note)}
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

ObjectionContent.propTypes = {

}

export default ObjectionContent