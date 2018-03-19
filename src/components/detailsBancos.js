import React from 'react';
import SelectPayBanca from './SelectPayBanca';

const BancosDetails = ({dataBancos}) => (
  <div>
    <div >
      <div className= "instrucciones ml-4">Instrucciones de pago</div>
      <div className= "ml-4 mt-2">Selecciona la opción pago de servicios</div>
      <div className= "ml-4">Ingresa tu codigo</div>
      <button type="button" className="btn btn-danger btn-lg btn-block mt-4 mb-4"> <a><i className="far fa-arrow-alt-circle-right fa-lg mr-2"></i> Ir a banca por internet</a></button>
    
    </div>
  </div>
)

export default BancosDetails