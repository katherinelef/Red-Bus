import React from 'react';

const Eyelashes = () => (
    <nav>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Banca por internet</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Pagar en efectivo</a>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
        </div>
    </nav>    
);

export default Eyelashes;