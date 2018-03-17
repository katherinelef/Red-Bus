import React from 'react';
import SitePay from './SitePay';

const datosEspañol = ['bcp.png', 'bbva.png', 'interbank.png', 'scotiabank.png','banbif.png'];

const SelectPay = () => (
    <div className="m-4">
        <p className="text-secondary">Selecciona dónde quieres pagar</p>
        <SitePay arrayString={datosEspañol}/>
        <p className="text-secondary">Puedes pagar desde la Web o App móvil del Banco</p>
    </div>
);

export default SelectPay;
