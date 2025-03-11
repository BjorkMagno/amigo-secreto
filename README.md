<h1 align="center">Amigo Secreto</h1>

  <h3 align="right"><i>Version en Español.</i></h3>
  
  - ***Estado del Proyecto :*** Funcionalidad basica.
    
  - ***Descrpción:*** Aplicación web sencilla, desarrollado principalmente con <i>Java Scrip combinado con HTML y CSS</i> su funcionalidad radica en <i>sortear un amigo de una lista de amigos ingresada por el usuario.</i>
    
  <h2>Descripción del código JS.</h2>
  
  1. Se creó una función ***impresionListaAmigos()*** encargada de la impresión de la lista de amigos ingresados correctamente.
  ```javascript
    function impresionListaAmigos(){
        let listaAmigos = document.getElementById('listaAmigos');
            listaAmigos.innerHTML = "";

        for(let i = 0; i < amigos.length; i++){
            let item = document.createElement('li');
                item.textContent = amigos[i];
                listaAmigos.appendChild(item);
        }
    }
  ```
  2. Se creó una función ***agregarAmigos()*** para agregar amigos de forma dinamica y sin limíte máximo. La función valida si la entrada es no vacia e imprime la lista de amigos ingresados.
     ```javascript
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
     ```
  3. Se creó una función ***sortearAmigo()*** para sortear de manera aleatoria un amigo de la agregado por el usuario.
     ```javascript
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
     ```
    
Para volver a hacer otro listado se requiere reiniciar la pagina.
