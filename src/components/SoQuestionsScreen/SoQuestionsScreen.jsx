import React, { useState } from 'react';
import './SoQuestionsScreen.css';
import SoQuestion from './SoQuestion/SoQuestion';
import SoScoreScreen from '../SoScoreScreen/SoScoreScreen';
import { NUMERO_DE_PREGUNTAS } from '../../Constants';

const SoQuestionsScreen = ({ preguntas, setScreen }) => {

    const [transition, setTransition] = useState(null);
    const [numeroPregunta, setNumeroPregunta] = useState(0);
    const [resultado, setResultado] = useState({
        puntaje: 0,
        preguntasCorrectas: 0
    });

    const getPreguntas = () => {
        let pr = preguntas.map((pregunta, index) => {
            return (<SoQuestion setTransition={setTransition} key={pregunta.id_pregunta} show={index === numeroPregunta} setNumeroPregunta={setNumeroPregunta}
                numeroPregunta={numeroPregunta}
                pregunta={preguntas[index]}
                setResultado={setResultado}
                resultado={resultado} />);
        });

        return pr;
    };

    const handleAnimationEnd = () => {
        if ((numeroPregunta === NUMERO_DE_PREGUNTAS - 1) && transition) {
            setScreen(<SoScoreScreen setScreen={setScreen} resultado={resultado} />);
        };

    };

    return (
        <section onAnimationEnd={handleAnimationEnd} className={transition ? "SoQuestionsScreen SoQuestionsScreen-transition" : "SoQuestionsScreen"}>
            {getPreguntas()}
        </section>
    );
};

export default SoQuestionsScreen;