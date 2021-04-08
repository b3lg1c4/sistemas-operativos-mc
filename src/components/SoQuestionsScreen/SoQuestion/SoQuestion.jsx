import React, { useEffect, useState } from 'react';
import './SoQuestion.css';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SoButton from '../../SoButton/SoButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { NUMERO_DE_PREGUNTAS } from '../../../Constants';
import SoQuestionTimer from './SoQuestionTimer';
import { shuffle } from '../../../functions/shuffle';


const SoQuestion = ({ pregunta, numeroPregunta }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [respuestas, setRespuestas] = useState([]);

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

    const checkAnswer = () => {
        console.log(selectedOption, getCorrectAnswer());
        if (selectedOption === getCorrectAnswer()) {

            console.log("alto crack sos");
        };
    };

    return (

        <div className="SoQuestion-container">
            <div className="SoQuestion-container-time-container">
                <div className="SoQuestion-container-time-container-box">
                    <QueryBuilderIcon fontSize="large" className="SoQuestion-container-time-container-box-icon" />
                    <SoQuestionTimer />
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
                            <FormControlLabel key={index} value={index.toString()} control={<Radio />} label={respuesta.respuesta} />
                        )
                        )}
                    </RadioGroup>
                </FormControl>

            </div>
            <div className="SoQuestion-container-button-container">
                <SoButton onClick={checkAnswer} label="Corregir" />
            </div>

        </div>

    );
};

export default SoQuestion;