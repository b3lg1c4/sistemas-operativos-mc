import React from 'react';
import './SoScoreScreen.css';
import SoButton from '../SoButton/SoButton';
import Progress from '@ramonak/react-progress-bar';
import { ESCALA_PUNTUACION, NUMERO_DE_PREGUNTAS, ORACIONES_RESULTADOS } from '../../Constants';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import SoScoreScreenStatistics from './SoScoreScreenStatistics/SoScoreScreenStatistics';

const SoScoreScreen = ({ resultado }) => {

    const handleClick = () => {

    };

    const getPuntuacionPorcentaje = () => {
        return resultado.puntaje * 100 / ESCALA_PUNTUACION;
    };


    const getResultsStylesOrSentence = () => {
        console.log(resultado.puntaje);

        if (getPuntuacionPorcentaje() < 40) return { sentence: "31ada213213", color: "#d62d2d" };
        if (getPuntuacionPorcentaje() >= 40 && getPuntuacionPorcentaje() < 60) return { sentence: "31ada213213", color: "#DDDD3E" };
        if (getPuntuacionPorcentaje() >= 60 && getPuntuacionPorcentaje() <= 70) return { sentence: "1312asdas", color: "80DD52" };
        if (getPuntuacionPorcentaje() >= 80 && getPuntuacionPorcentaje() <= 90) return { sentence: "dsae2q3e", color: "5FDB20" };
        if (getPuntuacionPorcentaje() === 100) return { sentence: "sa3easas", color: "#c1de1b" }
    };

    return (
        <section className="SoScoreScreen">
            <h1 className="SoScoreScreen-title">PUNTUACIÓN</h1>
            <p style={{ color: getResultsStylesOrSentence().color }} className="SoScoreScreen-sentence">j12h3y12u3vy12ugv12yu2gu12</p>
            <h2 className="SoScoreScreen-puntuacion">{Math.floor(resultado.puntaje)}/{ESCALA_PUNTUACION}</h2>
            <Progress bgColor="#c1de1b" className="SoScoreScreen-progress" isLabelVisible={false} completed={getPuntuacionPorcentaje()} />
            <SoScoreScreenStatistics
                statistics={[{
                    icon: <CheckCircleIcon fontSize="large"
                        style={{ color: "#c1de1b" }} />, value: `${resultado.preguntasCorrectas} Preguntas Correctas`
                }, { icon: <CancelIcon fontSize="large" style={{ color: "#d62d2d" }} />, value: `${NUMERO_DE_PREGUNTAS - resultado.preguntasCorrectas} Preguntas Incorrectas` }]} />
            <SoButton style={{ width: "50%" }} label="Volver a inicio" onClick={handleClick} />
        </section>
    );
};

export default SoScoreScreen;