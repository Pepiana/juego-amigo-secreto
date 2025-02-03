// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSecreto = "";


function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;

    console.log(amigoNuevo);
    console.log(amigos);
    if (amigoNuevo) {
        amigos.push(amigoNuevo);
        actualizarLista();
    } else {
        alert("Por favor, inserte un nombre.");
    }
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 

    let contenido = ""; 
    for (let i = 0; i < amigos.length; i++) {
        contenido += `<li>${amigos[i]}</li>`; 
    }
    
    lista.innerHTML = contenido;
}


function sortearAmigo() {
    let numeroAmigo =  Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[numeroAmigo];

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    document.getElementById('resultado').innerHTML = `Amigo secreto: ${amigoSecreto}`; 
    
}
