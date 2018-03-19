import React from 'react';
import SitePayBancos from './SitePayBancos';

const bancos = ['bcp.png', 'bbva.png', 'interbank.png', 'scotiabank.png','banbif.png'];

const SelectPayBanca = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePayBancos dataBancos={bancos}/>
        <p className="text-secondary">Puedes pagar desde la Web o App móvil del Banco</p>
       
    </div>
);

export default SelectPayBanca;
