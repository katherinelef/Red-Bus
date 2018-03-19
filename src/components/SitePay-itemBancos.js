import React from 'react';
import PropTypes from 'prop-types';

const SitePayItemBancos = ({ datostring }) => (
    <figure className="col-xl-2 m-0">
        <img className="col-xl-12 border-img-color p-3 pl-4 pr-4" src={datostring} />
    </figure>
)

SitePayItemBancos.propTypes = {
    datostring: PropTypes.string.isRequired
};

export default SitePayItemBancos;