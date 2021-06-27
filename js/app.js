import AppComponents from "./components.js";
import {
    validarFormulario,
    mostrarAlerta,
    mostrarTemporizador,
    mostrarFormulario,
    comenzarTemporizador
} from './funciones.js';

(function(){

    const {formulario, temporizador, acciones} = AppComponents;

    let primeraVez = false;

    formulario.btnIniciarTemporizador.addEventListener('click', ()=>{

        if(!formulario.formularioTemporizador.classList.contains('aparecer')){
            mostrarFormulario();
            primeraVez = true;
        }else{
            //Desaparecer el formulario
            mostrarFormulario(false);
            primeraVez = false;
        }
    });


    formulario.btnSubmitFormulario.addEventListener('click', ()=> primeraVez = false);
    //Evento al enviar el formulario
    formulario.formularioTemporizador.addEventListener('submit', (e)=>{
        e.preventDefault();
        //Validar todos los campos del formularios que no tengan 00:00:00
        if(validarFormulario(formulario.inputsFormulario)){
            mostrarTemporizador();
            const tiempo = {
                horas: formulario.inputsFormulario[0].value,
                minutos: formulario.inputsFormulario[1].value,
                segundos: formulario.inputsFormulario[2].value
            }
            //Comenzar a correr el temporizador
            comenzarTemporizador(tiempo);
        }else{
            mostrarAlerta(primeraVez);
        }
    });
    
})();