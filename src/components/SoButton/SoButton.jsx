import React from 'react';
import Button from '@material-ui/core/Button';
import './SoButton.css';

const SoButton = ({ style, label, animated, show, onClick }) => {

    return (
        <React.Fragment>
            { show ? <Button
                style={style}
                onClick={onClick}
                className={animated ? "SoButton loop" : "SoButton"}
                variant="contained">{label}
            </Button> : null}
        </React.Fragment>
    );
};

SoButton.defaultProps = {
    show: true
}

export default SoButton;