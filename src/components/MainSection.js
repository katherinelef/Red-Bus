import React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

const DataPagosPorInternet = [{img:'assets/images/bcp.png',  paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES'} ,
 {img:'assets/images/bbva.png',  paso1: 'Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES'}, 
 {img:'assets/images/interbank.png',  paso1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO'}, 
 {img:'assets/images/scotiabank.png',  paso1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES'},
 {img:'assets/images/banbif.png',  paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO'}
];

const MainSection = () => (
    <main>
        <MainHeader />
        <MainContent ListBancos={DataPagosPorInternet}/>
    </main>
);

export default MainSection;