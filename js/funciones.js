import AppComponents from "./components.js";
import Timer from "./timer.js";

const {formulario, temporizador, acciones} = AppComponents;

export function validarFormulario(campos){
    const campoHoras = campos[0];
    const campoMinutos = campos[1];
    const campoSegndos = campos[2];

    const tiempoVacio = (campoHoras.value == 0 && campoMinutos.value == 0 && campoSegndos.value == 0);

    if(!tiempoVacio){
        return true;
    }else{
        return false;
    }
}

export function mostrarAlerta(primeraVez){
    if(!document.querySelector('.mensaje-error') && !primeraVez){
        const mensaje = document.createElement('p');
        mensaje.textContent = "¡No puedes iniciar un temporizador con 0 segundos!";
        mensaje.classList.add('mensaje-error');
        formulario.formularioTemporizador.appendChild(mensaje);
        setTimeout(()=>mensaje.remove(), 2500);
    }
}

export function mostrarTemporizador(){
    const { cajaTemporizador } = temporizador;
    cajaTemporizador.classList.add('temporizador-abajo');
    cajaTemporizador.style.bottom = "0vh";
    setTimeout(()=>cajaTemporizador.style.animationPlayState ="pasued", 1000);
}

export function mostrarFormulario(mostrar = true){
    if(mostrar){
        formulario.btnIniciarTemporizador.remove();
        formulario.formularioTemporizador.classList.add('aparecer');
        formulario.btnIniciarTemporizador.textContent = 'Regresar';
        formulario.btnIniciarTemporizador.classList.add('boton-secundario');
        temporizador.reloj.style.display = "none";
        formulario.formularioTemporizador.appendChild(formulario.btnIniciarTemporizador);
    }else{
        formulario.formularioTemporizador.classList.remove('aparecer');
            formulario.btnIniciarTemporizador.textContent = 'Crear Temporizador';
            temporizador.reloj.style.display = "block";
            //Regresar el boton al inicio
            formulario.btnIniciarTemporizador.remove();
            formulario.divConfig.append(formulario.btnIniciarTemporizador);
    }
}

export function comenzarTemporizador(tiempo){

    const temporizador = new Timer(tiempo);
    temporizador.play();

    //Agregar eventos para los botones
    acciones.btnPlay.addEventListener('click', ()=>{
        console.log("Parar");
    });

    acciones.btnRestart.addEventListener('click', ()=>{
        console.log("Reiniciar");
    });

    acciones.btnSalir.addEventListener('click', temporizador.parar);
}