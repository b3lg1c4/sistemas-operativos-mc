import {shuffle} from './shuffle';
import {ORACIONES_RESULTADOS} from '../Constants';

const getResultsStylesOrSentence = (puntuacion) => {

    if (puntuacion < 40)
        return { sentence: shuffle(ORACIONES_RESULTADOS.menorA40, 1, "simple"), color: "#d62d2d" };

    if (puntuacion >= 40 && puntuacion < 60)
        return { sentence: shuffle(ORACIONES_RESULTADOS.entre40Y50, 1, "simple"), color: "#DDDD3E" };

    if (puntuacion >= 60 && puntuacion <= 70)
        return { sentence: shuffle(ORACIONES_RESULTADOS.entre60Y70, 1, "simple"), color: "80DD52" };

    if (puntuacion >= 80 && puntuacion <= 90)
        return { sentence: shuffle(ORACIONES_RESULTADOS.entre80Y90, 1, "simple"), color: "5FDB20" };

    if (puntuacion === 100)
        return { sentence: shuffle(ORACIONES_RESULTADOS.un100, 1, "simple"), color: "#c1de1b" };
};

export { getResultsStylesOrSentence };