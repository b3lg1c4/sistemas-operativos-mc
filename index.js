let res;


fetch("../assets/preguntas.json").then(res => {

    res.json().then(jsonRes => {
        console.log(jsonRes);
        document.querySelector(".xdd").innerHTML = jsonRes[0].respuestas[0].respuesta;
    });


});

