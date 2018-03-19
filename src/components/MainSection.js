import React from 'react';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

const DataPagosPorInternet = [{img:'bcp.png',  paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES'} ,
 {img:'bbva.png',  paso1: 'Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES'}, 
 {img:'interbank.png',  paso1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO'}, 
 {img:'scotiabank.png',  paso1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES'},
 {img:'banbif.png',  paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO'}
];

const MainSection = () => (
    <main>
        <MainHeader ListBancos={DataPagosPorInternet}/>
        <MainContent opcionDetailBanco = {DataPagosPorInternet[0]}/>
    </main>
);

export default MainSection;