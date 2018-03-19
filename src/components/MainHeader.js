import React from 'react';
// import TimeBox from './TimeBox';
// import SelectPayBanca from './SelectPayBanca';
// import SelectPayEfectivo from './SelectPayEfectivo';

const MainHeader = () => (
    <div>
        <nav>
        <div className="nav nav-tabs border-warning eyelashes" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Banca por internet</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Pagar en efectivo</a>
            </div>
            {/* <TimeBox />
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                    <SelectPayBanca bancos = {ListBancos}/>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <SelectPayEfectivo />
                </div>
            </div> */}
        </nav>
    </div>
);

export default MainHeader;