import React, { useState, useEffect } from 'react';
import './SoScoreScreen.css';
import SoButton from '../SoButton/SoButton';
import Progress from '@ramonak/react-progress-bar';
import { NUMERO_SCORES, ESCALA_PUNTUACION, NUMERO_DE_PREGUNTAS, ORACIONES_RESULTADOS } from '../../Constants';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import SoScoreScreenStatistics from './SoScoreScreenStatistics/SoScoreScreenStatistics';
import { shuffle } from '../../functions/shuffle';
import SoStartScreen from '../SoStartScreen/SoStartScreen';
import { getTimestamp } from '../../functions/getTimestamp';


const SoScoreScreen = ({ resultado, setScreen }) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    };

    const getPuntuacionPorcentaje = () => {
        return resultado.puntaje * 100 / ESCALA_PUNTUACION;
    };


    const getResultsStylesOrSentence = () => {
        console.log(resultado.puntaje);

        if (getPuntuacionPorcentaje() < 40)
            return { sentence: shuffle(ORACIONES_RESULTADOS.menorA40, 1, "simple"), color: "#d62d2d" };

        if (getPuntuacionPorcentaje() >= 40 && getPuntuacionPorcentaje() < 60)
            return { sentence: shuffle(ORACIONES_RESULTADOS.entre40Y50, 1, "simple"), color: "#DDDD3E" };

        if (getPuntuacionPorcentaje() >= 60 && getPuntuacionPorcentaje() <= 70)
            return { sentence: shuffle(ORACIONES_RESULTADOS.entre60Y70, 1, "simple"), color: "80DD52" };

        if (getPuntuacionPorcentaje() >= 80 && getPuntuacionPorcentaje() <= 90)
            return { sentence: shuffle(ORACIONES_RESULTADOS.entre80Y90, 1, "simple"), color: "5FDB20" };

        if (getPuntuacionPorcentaje() === 100)
            return { sentence: shuffle(ORACIONES_RESULTADOS.un100, 1, "simple"), color: "#c1de1b" };
    };

    const handleAnimationEnds = () => {
        if (click) {
            setScreen(<SoStartScreen setScreen={setScreen} />);
        };

    };

    const createLocalStorageToStorePuntajes = (scoreObject) => {

        localStorage.setItem("puntajes", JSON.stringify([
            scoreObject
        ]));
    };

    const addPuntajeToLocalStorage = (puntajeArray, scoreObject) => {
        let auxArray = [...puntajeArray];
        auxArray.push(scoreObject);
        localStorage.setItem("puntajes", JSON.stringify(auxArray));
    };

    const reOrderLocalStoragePuntajes = (puntajesArray, scoreObject) => {
        puntajesArray.forEach(puntaje => {
            
        });
    };

    const storePuntaje = () => {

        const currentDate = new Date();

        const scoreObject = {
            date: currentDate,
            puntaje: resultado.puntaje
        };

        const currentLocalStorage = localStorage.getItem("puntajes");

        if (currentLocalStorage === null) return createLocalStorageToStorePuntajes(scoreObject);

        const currentArrayFromLocalStorage = (JSON.parse(currentLocalStorage));

        if (currentArrayFromLocalStorage.length < NUMERO_SCORES)
            return addPuntajeToLocalStorage(currentArrayFromLocalStorage, scoreObject);

        reOrderLocalStoragePuntajes(currentArrayFromLocalStorage, scoreObject);
    };

    useEffect(storePuntaje, []);

    return (
        <section onAnimationEnd={handleAnimationEnds} className={click ? "SoScoreScreen SoScoreScreen-transition" : "SoScoreScreen"}>
            <h1 className="SoScoreScreen-title">PUNTUACIÓN</h1>
            <p style={{ color: getResultsStylesOrSentence().color }} className="SoScoreScreen-sentence">{getResultsStylesOrSentence().sentence}</p>
            <h2 style={{ color: getResultsStylesOrSentence().color }} className="SoScoreScreen-puntuacion">{Math.floor(resultado.puntaje)}/{ESCALA_PUNTUACION}</h2>
            <Progress bgColor={getResultsStylesOrSentence().color} className="SoScoreScreen-progress" isLabelVisible={false} completed={getPuntuacionPorcentaje()} />
            <SoScoreScreenStatistics
                statistics={[{
                    icon: <CheckCircleIcon fontSize="large"
                        style={{ color: "#c1de1b" }} />, value: `${resultado.preguntasCorrectas} Preguntas Correctas`
                }, { icon: <CancelIcon fontSize="large" style={{ color: "#d62d2d" }} />, value: `${NUMERO_DE_PREGUNTAS - resultado.preguntasCorrectas} Preguntas Incorrectas` }]} />
            <SoButton label="Volver a inicio" onClick={handleClick} />
        </section>
    );
};

export default SoScoreScreen;