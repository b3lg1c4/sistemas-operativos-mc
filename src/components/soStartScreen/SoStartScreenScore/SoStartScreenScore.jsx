import React from 'react';
import './SoStartScreenScore.css';

const SoStartScreenScore = () => {
    return (
        <div className="SoStartScreenScore">
            <h1>Score</h1>
            <div className="SoStartScreenScore-table">
                <div className="SoStartScreenScore-table-timestamp">Fecha y Hora</div>
                <div className="SoStartScreenScore-table-puntuacion">Puntuación</div>
                <div className="SoStartScreenScore-table-timestamp">2021-04-06 06:30</div>
                <div className="SoStartScreenScore-table-puntuacion">67/100</div>
                <div className="SoStartScreenScore-table-timestamp">2021-04-06 06:30</div>
                <div className="SoStartScreenScore-table-puntuacion">67/100</div>
                <div className="SoStartScreenScore-table-timestamp">2021-04-06 06:30</div>
                <div className="SoStartScreenScore-table-puntuacion">67/100</div>
            </div>
        </div>
    );
};

export default SoStartScreenScore;