import React, { useState, useEffect } from 'react';
import { TIMER } from '../../../Constants';

const SoQuestionTimer = ({ onTimerEnds, stopTimer }) => {

    const [currentTime, setCurrentTime] = useState(TIMER);

    const getCurrentTimeSeconds = () => {

        const seconds = Math.floor(currentTime / 1000 - getCurrentTimeMinutes() * 60);
        if (seconds.toString().length < 2) return `0${seconds}`;
        return seconds;
    };

    const getCurrentTimeMinutes = () => {
        const minutes = Math.floor(currentTime / 1000 / 60);
        if (minutes.toString().length < 2) return `0${minutes}`;
        return minutes;

    };



    useEffect(() => {
        let interval = setInterval(() => { setCurrentTime(currentTime => currentTime - 1000) }, 1000);
        if (currentTime === 0) { clearInterval(interval); onTimerEnds() }
        if (stopTimer) clearInterval(interval);
        return () => { clearInterval(interval) };
    }, [currentTime]);


    return (
        <div style={currentTime <= 1000 * 10 ? { color: "#d62d2d" } : null} className="SoQuestion-container-time-container-box-value">{getCurrentTimeMinutes()}:{getCurrentTimeSeconds()}</div>
    );
};

export default SoQuestionTimer;