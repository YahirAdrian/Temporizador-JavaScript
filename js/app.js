import AppComponents from "./components.js";

(function(){

    const {formulario, temporizador, acciones} = AppComponents;

    console.log(AppComponents);
    formulario.btnIniciarTemporizador.addEventListener('click', ()=>{
        if(!formulario.formularioTemporizador.classList.contains('aparecer')){
            //Hacer que aparezca el formulario 
            formulario.formularioTemporizador.classList.add('aparecer');
        }else{
            //Desaparecer el formulario
            formulario.formularioTemporizador.classList.remove('aparecer');
        }
    });
})();