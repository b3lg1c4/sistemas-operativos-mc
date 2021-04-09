import React, { useState } from 'react';
import './SoStartScreen.css';
import SoStartScreenScore from './SoStartScreenScore/SoStartScreenScore';
import SoButton from '../SoButton/SoButton';
import SoQuestionsScreen from '../SoQuestionsScreen/SoQuestionsScreen';
import json from '../../assets/preguntas.json';
import { NUMERO_DE_PREGUNTAS } from '../../Constants';
import { shuffle } from '../../functions/shuffle';

const SoStartScreen = ({ setScreen }) => {


    const handleStartClick = () => {

        setScreen(<SoQuestionsScreen setScreen={setScreen}
            preguntas={shuffle(json.preguntas, NUMERO_DE_PREGUNTAS, "array")} />);

    };


    return (
        <section className="SoStartScreen">
            <h1 className="SoStartScreen-title">SOMC</h1>
            <SoStartScreenScore />
            <SoButton onClick={handleStartClick} animated={true} label="Comenzar" />
        </section>
    );
};

export default SoStartScreen;