import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './SoLoadingCircularProgress.css';

const SoLoadingCircularProgress = () => {
    return (
        <div className="SoLoadingCircularProgress-container">
            <CircularProgress size="85px" className="SoLoadingCircularProgress"/>
        </div>
    );
};

export default SoLoadingCircularProgress;