//Variables
let numeroSecreto = generar_Numero_Secreto();
let intentos = 1;
//Variables

function asignar_Texto_Elemento(elemento,texto){
    let elemento_Html = document.querySelector(elemento);
    elemento_Html.innerHTML = texto;
}

asignar_Texto_Elemento('h1','Juego del número secreto');
asignar_Texto_Elemento('.texto__parrafo','Indica un número entre el 1 y el 10');

function verificar_Intento() {
    let numero_de_Usuario = document.getElementById('valor_Usuario').value;

            if (numero_de_Usuario == numeroSecreto){
            asignar_Texto_Elemento('.texto__parrafo','Felicitaciones has adivinado el numero secreto que es: '+ numeroSecreto +' en '+ intentos+' intentos');
            document.getElementById('reiniciar').removeAttribute('disabled');
                } else{
                    //El usuario no acertó
                    if (numero_de_Usuario > numeroSecreto){
                        asignar_Texto_Elemento('.texto__parrafo','El número secreto es menor')
                    }
                    else {
                        asignar_Texto_Elemento('.texto__parrafo','El número secreto es mayor')
                    }
                    intentos++;
                    limpiarcaja();
                
    }
} 
function reiniciar_Juego() {
    location.reload();
}


function limpiarcaja (){
    let valorCaja = document.querySelector('#valor_Usuario');
    valorCaja.value = '';
}

function generar_Numero_Secreto(){
    //Crear numero aleatorio
    return Math.floor(Math.random()*10)+1;
}

generar_Numero_Secreto();