import React from 'react';
import './SoQuestion.css';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SoButton from '../../SoButton/SoButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SoQuestion = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    console.log(value);

    return (

        <div className="SoQuestion-container">
            <div className="SoQuestion-container-time-container">
                <div className="SoQuestion-container-time-container-box">
                    <QueryBuilderIcon fontSize="large" className="SoQuestion-container-time-container-box-icon" />
                    <div className="SoQuestion-container-time-container-box-value">00:30</div>
                </div>

            </div>
            <div className="SoQuestion-container-pregunta">
                <div className="SoQuestion-container-pregunta-number">Pregunta 5/15</div>
                <div className="SoQuestion-container-pregunta-value">uio123iu12gyu12g4u12yg4uy124213123213123123132yu12iv4uy912gf4y12949uy12g124uyg21yu4g1u2yg4u21</div>
            </div>
            <div className="SoQuestion-container-respuestas">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="xd" control={<Radio />} label="321kj3b12u312iy3g12uyg3uy12g3g123123123213" />
                        <FormControlLabel value="q" control={<Radio />} label="321kj3b12u312iy3g12uyg3uy12g3g123123123213" />
                        <FormControlLabel value="x" control={<Radio />} label="321kj3b12u312iy3g12uyg3uy12g3g123123123213" />
                    </RadioGroup>
                </FormControl>
                <SoButton label="Corregir" />
            </div>
        </div>

    );
};

export default SoQuestion;