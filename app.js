// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//import java.util.ArrayList;

let listaAmigoSecreto = [];
let amigoSecreto = "";
const listado = document.getElementById("listaAmigos");


function agregarAmigo(){

    let amigoSecreto = document.getElementById('amigo').value.trim().toUpperCase(); //conviert todo a Mayuscula
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let resultado = document.getElementById("resultado");
           
    if ( amigoSecreto == "" )  //Valida que el campo no este vacio 
        {  
        alert("El campo no debe estar vacio, debe ingresar Nombre");
        limpiarcaja();
    }else{
        if( !regex.test( amigoSecreto ) ){
            alert("Solo se permite el ingreso de Nombres, no debes incluir caracteres numericos, Gracias");
            limpiarcaja();
        }else{
        if (listaAmigoSecreto.includes(amigoSecreto)) //Valida si el nombre ya fue ingresado
            {
            alert("Este nombre ya fue ingresado");  
            limpiarcaja();
            }else{

           // console.log(amigoSecreto);
            
            listaAmigoSecreto.push(amigoSecreto);
            console.log(listaAmigoSecreto);       
            muestraAmigos();
            }
        }        
    }    
}
function muestraAmigos(){
        
        //const listado = document.getElementById("listaAmigos");
        listado.innerHTML = "";
        
            for (let i = 0; i < listaAmigoSecreto.length; i++) {
                const li = document.createElement("li");
                li.innerText = listaAmigoSecreto[i];
                listado.appendChild(li);
                //listaAmigoSecreto.innerHTML = "";
                limpiarcaja(); //funcion que limpia el campo, para ingresar otro nombre
                
            }
        }    

function sortearAmigo(){

    if (listaAmigoSecreto.length == ""){
        alert("Lista Vacia, debes ingresar Nombres.");
        return;
    }

    //let listado = document.getElementById("listaAmigos"); 
    let idAmigoSecreto =  listaAmigoSecreto[Math.floor(Math.random() * listaAmigoSecreto.length)];
    let resultado = document.getElementById("resultado"); 

    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.innerText = `Tu Amigo Secreto es: ${idAmigoSecreto}`;
    resultado.appendChild(li);
    listaAmigoSecreto = [];   
    listado.innerHTML = "";
    
}

function limpiarcaja(){
    document.querySelector('#amigo').value = '';
}