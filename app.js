// ----------------- Variables Globales. -----------------
let amigos = [];
// --------------------- Funciones. ---------------------
function agregarAmigo(){
    let inputAmigo = document.querySelector('#amigo');
    let nombreAmigo = inputAmigo.value;
// Validacion de la entrada.
    if (nombreAmigo == false) {
        alert('Por favor, inserte un nombre.');
        return;
    }
// Igresa amigos a una lista.    
    amigos.push(nombreAmigo);
// Limpia la caja.
    inputAmigo.value="";
    inputAmigo.focus();
// Impreme lista.
    impresionListaAmigos();
}

function impresionListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
// Crea lista dinamica. <li> amigos[i] </li>
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
// Valida la existencia de una lista no vacia.
    if(amigos.length === 0){
        alert('No hay ningun amigo para sortear.');
        return;
    }
// Genera el sorteo aleatorio
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    let resultado = document.getElementById('resultado');
    let limpiarLista = document.getElementById('listaAmigos');
// Imprime el resultado.
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    limpiarLista.innerHTML = '';
}
