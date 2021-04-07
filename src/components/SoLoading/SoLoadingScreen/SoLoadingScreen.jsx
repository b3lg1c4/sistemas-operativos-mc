import React from 'react';
import SoLoadingCircularProgress from '../SoLoadingCircularProgress/SoLoadingCircularProgress';
import './SoLoadingScreen.css';

const SoLoadingScreen = ({show}) => {
    return (
        <section style={show ? {display:"flex"} : {display:"none"}} className="SoLoadingScreen-backdrop">
            <div className="SoLoadingScreen-backdrop-container">
                <SoLoadingCircularProgress />
                <p className="SoLoadingScreen-backdrop-container-subtitle">Cargando</p>
            </div>

        </section>
    );
};

export default SoLoadingScreen;