import React, { useState } from 'react';
import './SoStartScreen.css';
import SoStartScreenScore from './SoStartScreenScore/SoStartScreenScore';
import SoButton from '../SoButton/SoButton';
import SoQuestionsScreen from '../SoQuestionsScreen/SoQuestionsScreen';
import json from '../../assets/preguntas.json';
import { NUMERO_DE_PREGUNTAS } from '../../Constants';

const SoStartScreen = ({ setScreen }) => {

    const [click, setClick] = useState(false);

    const shufflePreguntas = () => {
        let shuffledPreguntas = [];
        for (let index = 0; index < NUMERO_DE_PREGUNTAS; index++) {
            let randomPregunta = getRandomPregunta();
            shuffledPreguntas.push(randomPregunta);
        };

        return shuffledPreguntas;
    };

    const getRandomPregunta = () => {
        return json.preguntas[Math.floor(Math.random() * json.preguntas.length)];
    };

    const handleStartClick = () => {

        setClick(true);

    };



    return (
        <section onAnimationEnd={() => { setScreen(<SoQuestionsScreen preguntas={shufflePreguntas()} />); }} className={click ? "SoStartScreen SoStartScreen-transition" : "SoStartScreen"}>
            <h1 className="SoStartScreen-title">SOMC</h1>
            <SoStartScreenScore />
            <SoButton onClick={handleStartClick} animated={true} label="Comenzar" />
        </section>
    );
};

export default SoStartScreen;
