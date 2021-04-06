import React from 'react';
import './SoBackground.css';

const SoBackground = () => {
    return (<React.Fragment>
        <video autoPlay loop muted id="video">
            <source src={`${process.env.REACT_APP_CLIENT_IP}:${process.env.REACT_APP_CLIENT_PORT}/video.mp4`} type="video/mp4" />
        </video>
        <div className="video-opacity"></div>
    </React.Fragment>)
};

export default SoBackground;