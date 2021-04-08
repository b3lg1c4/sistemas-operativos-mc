import React, { useState, useEffect } from 'react';
import './SoScoreScreen.css';
import SoButton from '../SoButton/SoButton';
import Progress from '@ramonak/react-progress-bar';
import { NUMERO_SCORES, ESCALA_PUNTUACION, NUMERO_DE_PREGUNTAS, ORACIONES_RESULTADOS } from '../../Constants';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import SoScoreScreenStatistics from './SoScoreScreenStatistics/SoScoreScreenStatistics';
import SoStartScreen from '../SoStartScreen/SoStartScreen';
import {getResultsStylesOrSentence} from '../../functions/getResultsStylesOrSentence';


const SoScoreScreen = ({ resultado, setScreen }) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    };

    const getPuntuacionPorcentaje = () => {
        return resultado.puntaje * 100 / ESCALA_PUNTUACION;
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

    const getIntegerTimes = (puntajesArray) => {
        let dates = [];
        puntajesArray.forEach(puntaje => {
            dates.push((new Date(puntaje.date)).getTime());
        });
        return dates;
    };

    const getGreatestDate = (integerTimes) => {
        let greatest = 0;
        for (let index = 1; index < integerTimes.length; index++) {
            if (integerTimes[greatest] > integerTimes[index]) greatest = index;
        };

        return greatest;
    };

    const reOrderLocalStoragePuntajes = (puntajesArray, scoreObject) => {
        console.log(puntajesArray);
        const auxArray = [...puntajesArray];
        const integerTimes = getIntegerTimes(puntajesArray);
        const greatestDate = getGreatestDate(integerTimes);
        auxArray[greatestDate] = scoreObject;

        localStorage.setItem("puntajes", JSON.stringify(auxArray));

    };

    const storePuntaje = () => {

        const currentDate = new Date();

        const scoreObject = {
            date: currentDate,
            puntaje: resultado.puntaje,
            escala: ESCALA_PUNTUACION
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
            <p style={{ color: getResultsStylesOrSentence(getPuntuacionPorcentaje()).color }} className="SoScoreScreen-sentence">{getResultsStylesOrSentence(getPuntuacionPorcentaje()).sentence}</p>
            <h2 style={{ color: getResultsStylesOrSentence(getPuntuacionPorcentaje()).color }} className="SoScoreScreen-puntuacion">{Math.floor(resultado.puntaje)}/{ESCALA_PUNTUACION}</h2>
            <Progress bgColor={getResultsStylesOrSentence(getPuntuacionPorcentaje()).color} className="SoScoreScreen-progress" isLabelVisible={false} completed={getPuntuacionPorcentaje()} />
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