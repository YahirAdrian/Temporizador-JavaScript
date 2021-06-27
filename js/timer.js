import AppComponents from "./components.js";

const {temporizador, acciones} = AppComponents;

class Timer{
    constructor(time){
        const { horas, minutos, segundos} = time;
        this.tiempoInicial = time;
        this.horas = parseInt(horas);
        this.minutos = parseInt(minutos);
        this.segundos = parseInt(segundos);
        this.totalSegundos =  (this.horas * 3600) + (this.minutos*60) + (this.segundos);
        this.segundosTranscurridos = 0;
        this.pausa = false;
    }

    play(){
        this.mostrarTiempo();
        this.intervalo = setInterval(()=> this.contar(), 1000);
        temporizador.temporizador.style.backgroundImage = `linear-gradient(0deg, #6DADFF 0%, #F1F1F1 0%)`;
    }

    contar(){
        if(!this.pausa){
            this.segundosTranscurridos++;
            this.porcentaje =((this.segundosTranscurridos * 100) / this.totalSegundos);
            
            console.log(this);
            temporizador.temporizador.style.backgroundImage = `linear-gradient(0deg, #6DADFF ${this.porcentaje}%, #F1F1F1 0%)`;
            if(this.segundos !==0){
                //Si los segundos son mayores a cero, se restan los segundos
                this.segundos --;
                this.mostrarTiempo();
            }else{
                if(this.segundos === 0 && this.minutos === 0 && this.horas === 0){
                    // temporizador.temporizador.textContent = "¡Se acabó el tiempo!";
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
        temporizador.cajaTemporizador.style.bottom = "200vh";
    }
    
    pausar_reanudar(){
        if(this.pausa){
            this.pausa = false;
            acciones.btnPlay.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 45.975 45.975" style="enable-background:new 0 0 512 512" xml:space="preserve"  ><g>
                <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z" fill="#ffffff" data-original="#000000"/>
                        <path d="M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z" fill="#ffffff" data-original="#000000"/>
                    </g>
                </g>
            </svg>
            `
            ;
        }else{
            this.pausa = true;
            acciones.btnPlay.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 163.861 163.861" style="enable-background:new 0 0 512 512" xml:space="preserve"><g>
                <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" fill="#ffffff" data-original="#000000" style=""/>
                </g>
            </svg>
            `;
        }
    }

    reiniciar(){
        const {horas, minutos, segundos} =  this.tiempoInicial;
        this.horas = parseInt(horas); 
        this.minutos = parseInt(minutos);
        this.segundos = parseInt(segundos);
        this.porcentaje = 0;
        this.segundosTranscurridos = 0;
    }
}

export default Timer;