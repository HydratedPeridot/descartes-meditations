import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ObjectionWithResponse from './with-response/ObjectionWithResponse'
import ObjectionWithoutResponse from './without-response/ObjectionWithoutResponse'


const ObjectionContent = (props) => {
    const { objection } = props 

    return objection.response 
            ? <ObjectionWithResponse objection={objection.objection} response={objection.response}/>
            : <ObjectionWithoutResponse objection={objection.objection}/>

}

ObjectionContent.propTypes = {
    objection: PropTypes.object.isRequired
}

export default ObjectionContent