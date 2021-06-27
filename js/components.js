const AppComponents = {

    //Elementos del formulario
    formulario:{
        main: document.querySelector('.main'),
        btnIniciarTemporizador: document.querySelector('#btn-display'),
        formularioTemporizador: document.querySelector('#formulario-configuracion'),
        inputsFormulario: document.querySelectorAll('.inputs-tiempo'),
        btnSubmitFormulario: document.querySelector('#btn-iniciar'),
        divConfig: document.querySelector('.config')
    },
    
    //Elementos del temporizador
    temporizador: {

        cajaTemporizador: document.querySelector('#temporizador'),
        temporizador: document.querySelector('#timer'),
        timeCount: document.querySelectorAll('.time'),
        hoursLeft: document.querySelector('#hours-left'),
        minutesLeft: document.querySelector('#minutes-left'),
        secondsLeft: document.querySelector('#seconds-left'),
        reloj: document.querySelector('#reloj')
    },

    //botones
    acciones:{
        acciones: document.querySelector('#acciones'),
        botones: document.querySelectorAll('#acciones button'),
        btnPlay: document.querySelector('#btn-play'),
        btnRestart: document.querySelector('#btn-restart'),
        btnSalir: document.querySelector('#btn-salir')
    }
}

export default AppComponents;