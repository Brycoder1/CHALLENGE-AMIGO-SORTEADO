
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
        console.log(amigoS)

    }

};




function sortearAmigo () {
    if (amigoS.length <= 2) {
        alert ('No hay amigos suficientes para sortear');
        return; } 

    let amigoAleatorio = amigoS[Math.floor(Math.random() * amigoS.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo ganador es ${amigoAleatorio}`;
    limpiarLista();

};



function limpiarLista () {
    amigoS = []
    document.getElementById('listaAmigos').innerHTML = '';
}










