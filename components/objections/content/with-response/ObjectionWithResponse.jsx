import React from 'react';
import PropTypes from 'prop-types';
import styles from './ObjectionWithResponse.module.scss'

const ObjectionWithResponse = (props) => {
    const { objection, response } = props

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.titleObjection}>
                <div className={styles.titleText}>
                    {objection.title}
                </div>
            </div>
            <div className={styles.titleResponse}>
                <div className={styles.titleText}>
                    {response.title}
                </div>
            </div>
            <div className={styles.contentObjection}>
                {objection.content}
                <div className={styles.footnotes}>
                        {objection.footnotes.map((note) => note)}
                </div>
            </div>
            <div className={styles.contentResponse}>
                {response.content}
                <div className={styles.footnotes}>
                    {response.footnotes.map((note) => note)}
                </div>
            </div>
        </div>
    )
}

ObjectionWithResponse.propTypes = {
    objection: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired
}

export default ObjectionWithResponse