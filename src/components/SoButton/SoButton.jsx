import React from 'react';
import Button from '@material-ui/core/Button';
import './SoButton.css';

const SoButton = ({label,animated}) => {
    return (

        <Button className={animated ? "SoButton loop" : "SoButton"} variant="contained">{label}</Button>
    );
};

export default SoButton;