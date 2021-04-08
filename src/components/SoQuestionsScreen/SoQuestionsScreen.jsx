import React, { useState } from 'react';
import './SoQuestionsScreen.css';
import SoQuestion from './SoQuestion/SoQuestion';

const SoQuestionsScreen = ({ preguntas }) => {

    const [numeroPregunta, setNumeroPregunta] = useState(0);

    /*{preguntas.map((pregunta, index) => (
                    <h1 style={index === numeroPregunta ? { display: "block" } : { display: "none" }}>{pregunta.pregunta}</h1>
                ))}*/

    return (
        <section className="SoQuestionsScreen">
            <SoQuestion numeroPregunta={numeroPregunta} pregunta={preguntas[numeroPregunta]}/>
            
        </section>
    );
};

export default SoQuestionsScreen;