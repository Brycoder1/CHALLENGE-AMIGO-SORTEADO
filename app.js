
let amigoS = []



function agregarAmigo () {
    let nombreAmigo = document.getElementById ('amigo').value;
    amigoS.push(nombreAmigo);


    if (nombreAmigo == "") {
        alert ("Por favor, ingrese el nombre del amigo");
        document.getElementById ('amigo').focus(); 
    }
   else {
    document.getElementById ('amigo').value="";
    actualizarlista();
   }
};





function actualizarlista () {
    let listaAmigos = document.getElementById('listaAmigos');   
    listaAmigos.innerHTML = "";
    document.getElementById ('listaAmigos').focus(); 


    for (let i = 0; i < amigoS.length; i++ ) {
        let item = document.createElement("li");
        item.textContent = amigoS[i];
        listaAmigos.appendChild(item);

    }

};




function sortearAmigo () {
    if (amigoS.length <= 2) {
        alert  ('No hay amigos suficientes para sortear');
        return; } 

    let amigoAleatorio = amigoS[Math.floor(Math.random() * amigoS.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo ganador es ${amigoAleatorio}`;
    limpiarLista();
};



function enlazarAmigo() {

    amigoS = amigoS.sort(() => Math.random() - 0.5);

    let result = []; 
    for (let i = 0; i < amigoS.length; i+= 2) {
    if (i + 1 < amigoS.length) {

        result.push(`${amigoS[i]} & ${amigoS[i + 1]}`);
        } else {
         result.push(`${amigoS[i]}  (Sol(@)`);
        }
     

    let listaParejas =document.getElementById("parejas");
    listaParejas.innerHTML = "";
    result.forEach(par => {

    let item = document.createElement("li");
    item.textContent = par;
    listaParejas.appendChild(item);})
    limpiarLista
}};







function limpiarLista () {
    amigoS = []
    document.getElementById('listaAmigos').innerHTML = '';
}



function reiniciarJuego () {

    // Vaciar la lista de amigos
        amigoS = [];
        document.getElementById('listaAmigos').innerHTML = '';
    
        // Vaciar la lista de parejas
        document.getElementById('parejas').innerHTML = '';
    
        // Vaciar el resultado del sorteo
        document.getElementById('resultado').innerHTML = '';
    
        // Limpiar el input de nombres
        document.getElementById('amigo').value = '';
    
        alert("El juego se ha reiniciado.");
    }
    










