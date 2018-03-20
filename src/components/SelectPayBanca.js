import React from 'react';
import SitePayBancos from './SitePayBancos';

const SelectPayBanca = ({MainBancos}) => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePayBancos bancos={MainBancos}/>
        <p className="text-secondary">Puedes pagar desde la Web o App móvil del Banco</p>
       
    </div>
);

export default SelectPayBanca;
