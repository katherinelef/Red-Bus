import React from 'react';
import SitePayItemBancos from './SitePay-itemBancos';
import PropTypes from 'prop-types';

const SitePayBancos = ({bancos}) => {
    return (
    <div className="row d-flex justify-content-between align-items-center mt-4 mb-4">
        {bancos.map( (e, i) =>
            <SitePayItemBancos
                datostring={e}
                key={i}
                />
        )}
     </div>
    )
} 

SitePayBancos.propTypes = {
    bancos: PropTypes.arrayOf(PropTypes.string)
};

export default SitePayBancos;