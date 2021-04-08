import React, { useEffect, useState } from 'react';
import './SoQuestion.css';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SoButton from '../../SoButton/SoButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { NUMERO_DE_PREGUNTAS, ESCALA_PUNTUACION } from '../../../Constants';
import SoQuestionTimer from './SoQuestionTimer';
import { shuffle } from '../../../functions/shuffle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';


const SoQuestion = ({ show, setNumeroPregunta, pregunta, numeroPregunta, setResultado, resultado, setTransition }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [respuestas, setRespuestas] = useState([]);
    const [corregida, setCorregida] = useState(false);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        setRespuestas(shuffle(pregunta.respuestas));
    }, []);

    const getCorrectAnswer = () => {

        let index = 0;

        while ((index < respuestas.length)) {
            if (respuestas[index].esCorrecta) return index.toString();
            index += 1;
        };
    };

    const answerIsCorrect = () => {
        return selectedOption === getCorrectAnswer();
    };


    const getCurrentResultadoValue = () => {
        const resultadoTemp = { ...resultado };
        return resultadoTemp;
    };

    const getPuntajeTerm = () => {
        return 1 * ESCALA_PUNTUACION / NUMERO_DE_PREGUNTAS;
    };

    const checkAnswer = () => {
        if (selectedOption !== null) setCorregida(true);;

        if (answerIsCorrect()) {

            const currentValue = getCurrentResultadoValue();
            const { puntaje, preguntasCorrectas } = currentValue;

            setResultado({
                ...resultado,
                preguntasCorrectas: preguntasCorrectas + 1,
                puntaje: puntaje + getPuntajeTerm()
            });

        };
    };

    const handleTimerEnds = () => {
        setCorregida(true);
    };

    const changeQuestion = () => {
        if (numeroPregunta === NUMERO_DE_PREGUNTAS - 1) return setTransition(true);
        setNumeroPregunta(numeroPregunta + 1);
    };


    const question = <div className="SoQuestion-container">
        <div className="SoQuestion-container-time-container">
            <div className="SoQuestion-container-time-container-box">
                <QueryBuilderIcon fontSize="large" className="SoQuestion-container-time-container-box-icon" />
                <SoQuestionTimer stopTimer={corregida} onTimerEnds={handleTimerEnds} />
            </div>

        </div>
        <div className="SoQuestion-container-pregunta">
            <div className="SoQuestion-container-pregunta-number">Pregunta {numeroPregunta + 1}/{NUMERO_DE_PREGUNTAS}</div>
            <div className="SoQuestion-container-pregunta-value">{pregunta.pregunta}</div>
        </div>
        <div className="SoQuestion-container-respuestas">
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={selectedOption} onChange={handleChange}>
                    {respuestas.map((respuesta, index) => (
                        <div key={index} className="SoQuestion-container-respuestas-respuesta">
                            <FormControlLabel disabled={corregida} value={index.toString()} control={<Radio />} label={respuesta.respuesta} />
                            {corregida ? <div className="SoQuestion-container-respuestas-respuesta-icon">
                                {respuesta.esCorrecta ? <CheckCircleIcon fontSize="large" style={{ color: "#c1de1b" }} />
                                    : <CancelIcon fontSize="large" style={answerIsCorrect() ? { color: "#d62d2d", display: "none" } : { color: "#d62d2d", display: "block" }} />}
                            </div> : null}

                        </div>

                    )
                    )}
                </RadioGroup>
            </FormControl>

        </div>
        <div className="SoQuestion-container-button-container">
            <SoButton show={!corregida} onClick={checkAnswer} label="Corregir" />
            <SoButton show={corregida} onClick={changeQuestion} label="Avanzar" />
        </div>

    </div>;


    return (

        <React.Fragment>
            {show ? question : null}
        </React.Fragment>
    );
};

export default SoQuestion;