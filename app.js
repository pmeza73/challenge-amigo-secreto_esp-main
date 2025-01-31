// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//import java.util.ArrayList;

let listaAmigoSecreto = [];



function agregarAmigo(){
    
    let amigoSecreto = document.getElementById('amigo').value; 
   
    if ( amigoSecreto == "" ) 
        {
        alert("Debe ingresar Nombre");
        limpiarcaja();
    }else{
        console.log("Se ingresa " + amigoSecreto +" en Array");
        listaAmigoSecreto.push(amigoSecreto);
        limpiarcaja();
        console.log(listaAmigoSecreto);
    }
    return amigoSecreto;
}

function limpiarcaja(){
    document.querySelector('#amigo').value = '';
}


printf(amigoSecreto);