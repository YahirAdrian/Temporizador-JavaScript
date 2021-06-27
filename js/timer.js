import AppComponents from "./components.js";

const {temporizador} = AppComponents;

class Timer{
    constructor(time){
        const { horas, minutos, segundos} = time;
        this.horas = parseInt(horas);
        this.minutos = parseInt(minutos);
        this.segundos = parseInt(segundos);
        this.totalSegundos =  (this.horas * 3600) + (this.minutos*60) + (this.segundos);
        this.segundosTranscurridos = 0;
    }

    play(){
        this.mostrarTiempo();
        this.intervalo = setInterval(()=> this.contar(), 1000);
        
    }

    contar(){
        this.segundosTranscurridos++;
        this.porcentaje = 100 - ((this.segundos * 100) / this.totalSegundos);
        temporizador.temporizador.style.backgroundImage = `linear-gradient(0deg, #6DADFF ${this.porcentaje}%, #F1F1F1 0%)`;
        if(this.segundos !==0){
            //Si los segundos son mayores a cero, se restan los segundos
            this.segundos --;
            this.mostrarTiempo();
        }else{
            if(this.segundos === 0 && this.minutos === 0 && this.horas === 0){
                temporizador.temporizador.textContent = "¡Se acabó el tiempo!";
                this.parar();
            }else{
                if(this.minutos !== 0){
                    //So los minutos son mayores a cero, se restan los minutos y se ponen 59 segundos
                    this.minutos --;
                    this.segundos = 59;
                    this.mostrarTiempo();
                }else{
                    if(this.horas !== 0){
                        //Si las horas son mayores a cero, se restan las horas y se ponen 59 minutos
                        this.horas --;
                        this.minutos = 59;
                        this.mostrarTiempo();
                    }
                }
            }
        }
    }

    mostrarTiempo(){
        //Eliminar los ceros de las horas y mostrar las horas
        if(this.horas < 10){
            temporizador.hoursLeft.textContent = "0" + this.horas;
        }else{
            temporizador.hoursLeft.textContent = this.horas;
        }

        //Eliminar los ceros de los minutos y mostrar los minutos
        if(this.minutos < 10){
            temporizador.minutesLeft.textContent = "0" + this.minutos;
        }else{
            temporizador.minutesLeft.textContent = this.minutos;
        }
        
        //Eliminar los ceros de los segundos y mostrar los segundos
        if(this.segundos < 10){
            temporizador.secondsLeft.textContent = "0" + this.segundos;
        }else{
            temporizador.secondsLeft.textContent = this.segundos;
        }
    }

    parar(){
        window.clearInterval(this.intervalo);
        //Quitar el temporizador
        temporizador.cajaTemporizador.classList.remove('temporizador-abajo');
        temporizador.cajaTemporizador.classList.add('temporizador-arriba');
        //Como rayos lo animo para que se suba!!!!!!!!!
    }
}

export default Timer;