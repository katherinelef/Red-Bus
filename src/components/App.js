import React from 'react';
import Header from './Header';
import Main from './main';
import Footer from './Footer';
import BancosDetails from './detailsBancos';

const DataPagosPorInternet = [{img:'bcp.png',  paso1: 'Selecciona la opción Pago de Servicios > EMPRESAS > PAGOEFECTIVO > PAGOEFECTIVOSOLES'} ,
 {img:'bbva.png',  paso1: 'Selecciona la opción Pago de Servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES'}, 
 {img:'interbank.png',  paso1: 'Selecciona la opción Pago a Instituciones o Empresa > Empresa PAGOEFECTIVO > Servicio PAGO EFECTIVO'}, 
 {img:'scotiabank.png',  paso1: 'Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES'},
 {img:'banbif.png',  paso1: 'Selecciona la opción Pago de Servicios > Busca por Empresa y escribe PAGO EFECTIVO > Seleciona la empresa PAGO EFECTIVO'}
];

const App = () => (
    <div className="container"> 
        <Header/>
        <Main MainBancos = {DataPagosPorInternet}/>
        <BancosDetails opcionDetailBanco = {DataPagosPorInternet[0]}/>
        <Footer />
    </div>
)

export default App;