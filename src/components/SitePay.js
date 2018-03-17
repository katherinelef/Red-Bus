import React from 'react';
import SitePayItem from './SitePay-item';
import PropTypes from 'prop-types';


const SitePay = ({arrayString}) => {
    return (
    <div className="row d-flex justify-content-between align-items-center mt-4 mb-4">
        {arrayString.map( (e, i) =>
            <SitePayItem
                datostring={e}
                key={i}
                />
        )}
     </div>
    )
} 

SitePay.propTypes = {
    arrayString: PropTypes.arrayOf(PropTypes.string)
};

export default SitePay;