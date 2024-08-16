import "../../scss/styles.scss"; //importando el archivo de estilos

import Typed from "typed.js"; //importando la libreria typed.js para animaciones de texto

//--------------------------------------------- //
//                 VARIABLES                    //
//--------------------------------------------- //
const expresionRegular = /^[a-z\s]+$/; //expresion regular para validar el texto ingresado3
const botonEncriptar = document.querySelector("#botonEncriptar"); //DOM boton encriptar
let textoIngresado = ''; //DOM texto ingresado
let estadoVerificado; //variable para almacenar el estado de verificacion del texto ingresado
let textoEncriptado = []; //variable para almacenar el texto encriptado
const popup = document.querySelector(".popup"); //DOM popup
const btnClosePopup = document.querySelector(".closePopup") //DOM btn cerrar popup



//--------------------------------------------- //
//              ADD EVENT LISTENER              //
//--------------------------------------------- //

//cerrar popup y reiniciar valor del input 
btnClosePopup.addEventListener('click',(e)=>{
   
    popup.classList.add('show')
    
    document.querySelector("#area__input").value = '';
})

//btn encriptar
 botonEncriptar.addEventListener('click',(e)=>{
    
    verificacioTexto();
   
    outputResult();
   
    
})

//--------------------------------------------- //
//                FUNCIONES                     //
//--------------------------------------------- //

//funcion para encriptar el texto ingresado
const encriptacionTexto = () => {
    textoEncriptado = [];
    textoIngresado = document.querySelector("#area__input").value;
    textoIngresado= textoIngresado.split("");
    textoIngresado.map((letra) => {
      //switch para la condicional de encriptacion
      switch (letra) {
        case "a":
          return textoEncriptado.push("ai");
          break;
  
        case "e":
          return textoEncriptado.push("enter");
          break;
  
        case "i":
          return textoEncriptado.push("imes");
          break;
  
        case "o":
          return textoEncriptado.push("ober");
          break;
        case "u":
          return textoEncriptado.push("ufat");
          break;
  
        default:
          return textoEncriptado.push(letra);
          break;
      }
      
    }).join('');
  
    return textoEncriptado = textoEncriptado.join('')
    console.log(textoEncriptado);
    
  }; 

//funcion para verificar si el texto ingresado es valido
const verificacioTexto = () => {
    textoIngresado = document.querySelector("#area__input").value;
    console.log('el texto recibido es '+textoIngresado);
    
    if (expresionRegular.test(textoIngresado)) {
    console.log("el texto es valido");
    encriptacionTexto();
    return (estadoVerificado = true);
  } else {
    console.log("el texto NO es valido");
   popupOpen();
    return (estadoVerificado = false);
  }
};

//funcion abrir popup
const popupOpen = () =>{

    
    popup.classList.remove('show')
    
}

//funcion mostrar resultado en output
const outputResult = () => {
  const divOutput = document.querySelector('.cont__output');
  let salidaTexto = divOutput.querySelector('.salida_texto');

  if (!salidaTexto) {
    
    salidaTexto = document.createElement('p');
    salidaTexto.classList.add('salida_texto');
    divOutput.appendChild(salidaTexto);
  }


 setInterval(() => {
  salidaTexto.textContent = `Texto encriptado: ${textoEncriptado}`;
 }, 2000);

  typedOutput();
  console.log(textoEncriptado);
  console.log(salidaTexto);
};


//--------------------------------------------- //
//             ANIMACIONES                      //
//--------------------------------------------- //

//animacion con libreria typed.js para texto en el header
const typed = new Typed('.typedAnimado_header', {
  strings: [
    '<i class="animado">ENCRIPTAR</i>',
    '<i class="animado">DESENCRIPTAR</i>'],
  typeSpeed: 100,
  loop: true,
  backSpeed: 100,
});


//animacion con libreria typed.js para la salidad del texto encriptado
const typedOutput = ()=>{ new Typed('.salida_texto', {
  strings: [
    'Encriptando .',
    '..',
    'Encriptando ...',
   
   
  ],
  typeSpeed: 1,
  loopCount: 1,
 
})};




