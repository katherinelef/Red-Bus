import React from 'react';
import SitePayBancos from './SitePayBancos';

const datosEspañol = ['bcp.png', 'bbva.png', 'interbank.png', 'scotiabank.png','banbif.png'];

const SelectPayEfectivo = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePaybancos arrayString={datosEspañol}/>
       
    </div>
);

export default SelectPayEfectivo;
