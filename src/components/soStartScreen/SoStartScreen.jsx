import React from 'react';
import './SoStartScreen.css';
import SoStartScreenScore from './SoStartScreenScore/SoStartScreenScore';
import SoButton from '../SoButton/SoButton';

const SoStartScreen = () => {
    return (
        <div className="SoStartScreen">
            <h1 className="SoStartScreen-title">SOMC</h1>
            <SoStartScreenScore/>
            <SoButton animated={true} label="Comenzar"/>
        </div>
    );
};

export default SoStartScreen;
