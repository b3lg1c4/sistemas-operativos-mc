import React from 'react';
import './SoBackground.css';
import video from './video.mp4';

const SoBackground = () => {
    return (<React.Fragment>
        <video autoPlay loop muted id="video">
            <source src={video} type="video/mp4" />
        </video>
        <div className="video-opacity"></div>
    </React.Fragment>)
};

export default SoBackground;