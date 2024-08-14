import "../../scss/styles.scss"; //importando el archivo de estilos

//-------------VARIABLES  ------------------
const expresionRegular = /^[a-z\s]+$/; //expresion regular para validar el texto ingresado3
const botonEncriptar = document.querySelector("#botonEncriptar"); //DOM boton encriptar
let textoIngresado = ''; //DOM texto ingresado
let estadoVerificado; //variable para almacenar el estado de verificacion del texto ingresado
let textoEncriptado = []; //variable para almacenar el texto encriptado
const popup = document.querySelector(".popup"); //DOM popup
const btnClosePopup = document.querySelector(".closePopup") //DOM btn cerrar popup
const divOutput = document.querySelector('.cont__output');



//-------------ADD EVENT LISTENER ------------------

//cerrar popup y reiniciar valor del input 

btnClosePopup.addEventListener('click',(e)=>{
   
    popup.classList.add('show')
    console.log(popup);
    document.querySelector("#area__input").value = '';
})

//btn encriptar
botonEncriptar.addEventListener('click',(e)=>{
    
    verificacioTexto();
    outputResult();
    
})

//-------------FUNCIONES ------------------

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
  const newDiv = document.createElement('div');
  newDiv.className = 'output_result';
  newDiv.innerHTML = `<h2>${textoEncriptado}</h2>`;
  divOutput.appendChild(newDiv);
};






