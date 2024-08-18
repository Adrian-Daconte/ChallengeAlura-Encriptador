import "../../scss/styles.scss"; //importando el archivo de estilos

import Typed from "typed.js"; //importando la libreria typed.js para animaciones de texto

//--------------------------------------------- //
//                 VARIABLES                    //
//--------------------------------------------- //
const expresionRegular = /^[a-z\s]+$/; //expresion regular para validar el texto ingresado3
const botonEncriptar = document.querySelector("#botonEncriptar"); //DOM boton encriptar
const botonDesencriptar = document.querySelector("#botonDesencriptar"); //DOM boton desencriptar
let textoIngresado = ""; //DOM texto ingresado
let textoEncriptado = []; //variable para almacenar el texto encriptado
let textoDesencriptado = []; //variable para almacenar el texto desencriptado
const popup = document.querySelector(".popup"); //DOM popup
const btnClosePopup = document.querySelector(".closePopup"); //DOM btn cerrar popup
let clickEncriptar = undefined;
let clickDesencriptar = undefined;



//--------------------------------------------- //
//              ADD EVENT LISTENER              //
//--------------------------------------------- //

//evento para limpiar el input al cargar la pagina
addEventListener("DOMContentLoaded", (e) => {
  limpiarInput();
  limpiarOutput();
});

//cerrar popup
btnClosePopup.addEventListener("click", (e) => {
  popup.classList.add("show");
});

//btn encriptar
botonEncriptar.addEventListener("click", (e) => {
  ;
  clickEncriptar = true;
  clickDesencriptar = false;
  limpiarOutput();
  verificacioTexto();
  console.log('click encriptar es ' + clickEncriptar);
 
  
  
});

//btn desencriptar
botonDesencriptar.addEventListener("click", (e) => {
  clickDesencriptar = true;
  clickEncriptar = false;
  limpiarOutput();
verificacioTexto();
});

//--------------------------------------------- //
//                FUNCIONES                     //
//--------------------------------------------- //



//funcion para encriptar el texto ingresado
const encriptacionTexto = () => {
  
  textoEncriptado = [];
  textoIngresado = document.querySelector("#area__input").value;
  textoIngresado = textoIngresado.split("");
  textoIngresado
    .map((letra) => {
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
    })
    .join("");

  return (textoEncriptado = textoEncriptado.join(""));
  console.log(textoEncriptado);
};

//funcion para desencriptar el texto ingresado
const desencriptacionTexto = () => {
  
  textoIngresado = document.querySelector("#area__input").value;


  const matrizEncriptacion = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  matrizEncriptacion.forEach(([elemento, valor]) => {
    textoIngresado = textoIngresado.replace(new RegExp(elemento, "g"), valor);
    textoDesencriptado = textoIngresado;
   
    
  });



};

//funcion para verificar si el texto ingresado es valido
const verificacioTexto = () => {
  textoIngresado = document.querySelector("#area__input").value;
  console.log("el texto recibido es " + textoIngresado);

  

  if (expresionRegular.test(textoIngresado)) {
    console.log("el texto es valido");
    if (clickEncriptar==true) {
     
      encriptacionTexto();
      outputResult();
      console.log('click encriptar en verificacion es ' + clickEncriptar);
      
    } else { 
    if (clickDesencriptar==true) {
      desencriptacionTexto();
      outputResult();
      
    } else {
      
    }
    }
  }
  else {
    console.log("el texto NO es valido");
    popupOpen();
    limpiarInput();
  }

};

//funcion abrir popup
const popupOpen = () => {
  popup.classList.remove("show");
};

//funcion mostrar resultado en output y copiar resultado en portapapeles
const outputResult = () => {
  const divOutput = document.querySelector(".div_output");
  let salidaTexto = divOutput.querySelector(".salida_texto");
  let tituloSalida = divOutput.querySelector(".titulo_salida");
  const divImagenOutput = document.querySelector(".imagen_ouput");
  const btnCopiar = document.querySelector("#btnCopiar");

  if (!salidaTexto) {
    salidaTexto = document.createElement("p");
    tituloSalida = document.createElement("h2");
    salidaTexto.classList.add("salida_texto");
    tituloSalida.classList.add("titulo_salida");
    divOutput.appendChild(tituloSalida);
    divOutput.appendChild(salidaTexto);
    
  
  }
  setTimeout(() => {
    
    console.log('click encriptar en output es ' + clickEncriptar);
    if ( clickEncriptar==true){

      tituloSalida.textContent = "Texto encriptado";
      salidaTexto.textContent = textoEncriptado;
      divImagenOutput.setAttribute('style','display:none');
      console.log('el texto a mostrar es ' + textoEncriptado);
      console.log('dom boton copiar es ');
      console.log(btnCopiar);
      
        
        btnCopiar.addEventListener("click", (e) => {

          console.log('se ejecuto la funcion copiar texto encriptar');
          navigator.clipboard.writeText(salidaTexto.textContent).then(() => {
            alert('Texto copiado al portapapeles');
          });
          
          
        });

      

      

    }else {
      if (clickDesencriptar==true) {
        tituloSalida.textContent = "Texto desencriptado";
        salidaTexto.textContent = textoDesencriptado;
        divImagenOutput.setAttribute('style','display:none');
        console.log('el texto a mostrar es ' + textoDesencriptado);
        console.log('dom boton copiar es ');
        console.log(btnCopiar);
       
        btnCopiar.addEventListener("click", (e) => {

          console.log('se ejecuto la funcion copiar texto desecnriptar');
          navigator.clipboard.writeText(salidaTexto.textContent);
        console.log('el texto copiado es ' + salidaTexto.textContent);

        });
        
      }
    }
    

  }, 4000);
  typedOutput();
 
  
};

//funcion para limpiar el output
const limpiarOutput = () => {
  const divOutput = document.querySelector(".cont__output");
  let salidaTexto = divOutput.querySelector(".salida_texto");
  let tituloSalida = divOutput.querySelector(".titulo_salida");

  if (salidaTexto && tituloSalida) {
    salidaTexto.remove();
    tituloSalida.remove();
  }
};

//funcion para limpiar el input
const limpiarInput = () => {
  document.querySelector("#area__input").value = "";
};
//--------------------------------------------- //
//             ANIMACIONES                      //
//--------------------------------------------- //

//animacion con libreria typed.js para texto en el header
const typed = new Typed(".typedAnimado_header", {
  strings: [
    '<i class="animado">ENCRIPTAR</i>',
    '<i class="animado">DESENCRIPTAR</i>',
  ],
  typeSpeed: 100,
  loop: true,
  backSpeed: 100,
});

//animacion con libreria typed.js para la salidad del texto encriptado
const typedOutput = () => {
  new Typed(".salida_texto", {
    strings:['. . . . ','cargando por favor espere . . .','. . . .'],
    typeSpeed: 1,
    loopCount: 1,
  });
};
