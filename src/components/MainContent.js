import React from 'react';
import TimeBox from './TimeBox';
import SelectPayBanca from './SelectPayBanca';
import SelectPayEfectivo from './SelectPayEfectivo';
import BancosDetails from './detailsBancos';


const MainContent = ({ListBancos}) => (
    <div className="tab-content" id="nav-tabContent">
        <TimeBox />
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <SelectPayBanca  MainBancos={ListBancos}/>
            <BancosDetails opcionDetailBanco={ListBancos[0]}/> 
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <SelectPayEfectivo />
        </div>
    </div>
);

export default MainContent;
