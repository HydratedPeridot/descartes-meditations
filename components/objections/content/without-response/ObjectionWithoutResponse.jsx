import React from 'react';
import PropTypes from 'prop-types';
import styles from './ObjectionWithoutResponse.module.scss'

const ObjectionWithoutResponse = (props) => {
    const { objection } = props

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.titleObjection}>
                <div className={styles.titleText}>
                    {objection.title}
                </div>
            </div>
            <div className={styles.contentObjection}>
                {objection.content}
                <div className={styles.footnotes}>
                        {objection.footnotes.map((note) => note)}
                </div>
            </div>
        </div>
    )
}

ObjectionWithoutResponse.propTypes = {
    objection: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired
}

export default ObjectionWithoutResponse