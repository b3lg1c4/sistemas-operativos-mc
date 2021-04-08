const NUMERO_DE_PREGUNTAS = 1;
const NUMERO_SCORES = 3;
const TIMER = 1000 * 20 // está en milisegundos(ms) , recomendado menos de 60 minutos
const ESCALA_PUNTUACION = 100;
const ORACIONES_RESULTADOS = {

    menorA40: [

        "Al parecer te falta bastante por aprender, no te rindas!",
        "Me siento mal por ti, tu puntuación ha sido mala, pero si estudias más, lo conseguirás!",
        "No te vendría mal un poco más de lectura.",
        "Necesitarás más que eso para vencerlos, sigue participando.",
        "'Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso'. <Bill Gates>"

    ],

    entre40Y50: [

        "Ups! Te faltó un poco más. Necesitarás estudiar más.",
        "Ya casi tienes los conocimientos mínimos, sigue así.",
        "Necesitas esforzarte más, pero no seas conformista.",
        "Si no haces un poco más de esfuerzo, te seguirán pisoteando.",
        "No te desesperes, no estás tan mal después de todo."

    ],

    entre60Y70: [

        "Enhorabuena! Tienes los conocimiento mínimos para aprobar la materia.",
        "Aunque hayas tenido una puntuación buena, no te conformes!",
        "Felicidades joven! Intenta pulír esos saberes.",
        "Ahora me de doy cuenta cuanto has mejorado, sigue así mi amigo!",
        "Bien bien, nada mal, pero podrías superarte más."

    ],

    entre80Y90: [

        "Muy bien! Estás casi listo para convertirte en todo un conocedor de los SOs",
        "Sorprendente, un poquito más y tendrás lo que se requiere para saberlo todo.",
        "Bastante bien. Felicitaciones por el esfuerzo que pusiste.",
        "Felicidades! Muy pocos llegan a este nivel.",
        "Ve a celebrar tu gran avance con la materia, felicidades!"

    ],

    un100: [

        "Eres todo un genio en esta materia.",
        "Felicitaciones! Has logrado entender por completo el funcionamiento de un SO.",
        "Eres un ser omnisciente de SO en el ámbito académico.",
        "Tienes la materia dominada, ahora ve por el 10 real.",
        "Estás completamente preparado para plasmar tus conocimientos en una hoja."

    ]
}

export { NUMERO_DE_PREGUNTAS, NUMERO_SCORES,TIMER, ESCALA_PUNTUACION, ORACIONES_RESULTADOS }
