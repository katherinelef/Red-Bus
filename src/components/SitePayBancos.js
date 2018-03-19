import React from 'react';
import SitePayItemBancos from './SitePay-itemBancos';
import PropTypes from 'prop-types';


const SitePayBancos = ({dataBancos}) => {
    return (
    <div className="row d-flex justify-content-between align-items-center mt-4 mb-4">
        {dataBancos.map( (e, i) =>
            <SitePayItemBancos
                datostring={e}
                key={i}
                />
        )}
     </div>
    )
} 

SitePayBancos.propTypes = {
    dataBancos: PropTypes.arrayOf(PropTypes.string)
};

export default SitePayBancos;