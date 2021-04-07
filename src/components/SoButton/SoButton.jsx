import React from 'react';
import Button from '@material-ui/core/Button';
import './SoButton.css';

const SoButton = ({ label, animated, show, onClick }) => {

    return (

        <Button style={show ? {display:"block"} : {display:"none"}} onClick={onClick} className={animated ? "SoButton loop" : "SoButton"} variant="contained">{label}</Button>
    );
};

SoButton.defaultProps = {
    show: true
}

export default SoButton;