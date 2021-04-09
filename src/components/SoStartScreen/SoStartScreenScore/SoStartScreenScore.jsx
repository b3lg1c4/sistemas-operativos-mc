import React from 'react';
import './SoStartScreenScore.css';
import { NUMERO_SCORES } from '../../../Constants';
import { getResultsStylesOrSentence } from '../../../functions/getResultsStylesOrSentence';
import { getTimestamp } from '../../../functions/getTimestamp';

const SoStartScreenScore = () => {

    const puntajesString = localStorage.getItem("puntajes");
    const parsedPuntajes = JSON.parse(puntajesString);


    const getScores = () => {
        let scores = parsedPuntajes.map((pregunta, index) => {

            const formattedDate = getTimestamp(pregunta.date);
            if (index < NUMERO_SCORES) {
                return (<React.Fragment key={index}>
                    <div className="SoStartScreenScore-table-timestamp">{formattedDate.day} - {formattedDate.time}</div>
                    <div style={{ color: getResultsStylesOrSentence(pregunta.puntaje).color }} className="SoStartScreenScore-table-puntuacion">{pregunta.puntaje}/{pregunta.escala}</div>
                </React.Fragment>);
            }
        });

        return scores;
    };

    return (
        <div className="SoStartScreenScore">
            <h1>Score</h1>
            <div className="SoStartScreenScore-table">
                <div className="SoStartScreenScore-table-timestamp">Fecha y Hora</div>
                <div className="SoStartScreenScore-table-puntuacion">Puntuación</div>
                {parsedPuntajes === null ?
                    null

                    :

                    getScores()
                }
            </div>
            {parsedPuntajes === null ? <p className="SoStartScreenScore-advise">No se han registrado puntuaciones anteriores</p> : null}
        </div>
    );
};

export default SoStartScreenScore;