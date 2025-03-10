// ----------------- Variables Globales. -----------------
let amigos = [];
// --------------------- Funciones. ---------------------

function agregarAmigo(){
    let inputAmigo = document.querySelector('#amigo');
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo == false) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombreAmigo);
    inputAmigo.value="";
    inputAmigo.focus();

    impresionListaAmigos();
}

function impresionListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){

    if(amigos.length === 0){
        alert('No hay ningun amigo para sortear.');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    let resultado = document.getElementById('resultado');
    let limpiarLista = document.getElementById('listaAmigos');
    
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    limpiarLista.innerHTML = '';
}
