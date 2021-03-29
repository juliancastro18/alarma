//contiene la vibración por segundo de la nota
//posición en el arreglo: do=0,do#=1,re=2........
let Sonidos= [261,277,293,311,329,349,369,392,415,440,466,493];
let pos = 0;
let direccion = false;
 
//creamos contexto
let context = new (window.AudioContext || window.webkitAudioContext)();
 
const posChanger = () => {
    if (direccion){
        pos--;
    }else{
        pos++;
    }
    if(pos==11 || pos==0){
        direccion = !direccion;
    }
}

function Sonido(){
     //creamos oscilador
    let osc = context.createOscillator();
 
    // admite: sine, square, sawtooth, triangle
    osc.type = 'sawtooth'; 
 
    osc.frequency.value=Sonidos[pos];
 
    //asignamos el destino para el sonido
    osc.connect(context.destination);
    //iniciamos la nota
    osc.start();
    //detenemos la nota medio segundo despues
    osc.stop(context.currentTime + .5);
 
}

setInterval( () => {
    Sonido();
    posChanger();
}, 300);