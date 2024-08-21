import "../../scss/styles.scss"; //importando el archivo de estilos

import Typed from "typed.js"; //importando la libreria typed.js para animaciones de texto
import { generateSpaceLayer } from "./fondoanimado"; //importando la funcion para generar el fondo animado
generateSpaceLayer("1px", ".space-1", 200, "25s"); //generando las capas de fondo animado
generateSpaceLayer("2px", ".space-2", 50, "20s");
generateSpaceLayer("4px", ".space-3", 20, "15s");

//------------------VARIABLES------------------- //
//                                              //
//--------------------------------------------- //
const expresionRegular = /^(?!\s*$)[a-z\s]+$/; //expresion regular para validar el texto ingresado y que no este vacio
const botonEncriptar = document.querySelector("#botonEncriptar"); //DOM boton encriptar
const botonDesencriptar = document.querySelector("#botonDesencriptar"); //DOM boton desencriptar
let textoIngresado = ""; //DOM texto ingresado
let textoEncriptado = []; //variable para almacenar el texto encriptado
let textoDesencriptado = []; //variable para almacenar el texto desencriptado
const popup = document.querySelector(".popup"); //DOM popup
const btnClosePopup = document.querySelector(".closePopup"); //DOM btn cerrar popup
let salida = document.querySelector(".area_salida"); //DOM texto de salida
const btnCopiar = document.querySelector("#btnCopiar"); //DOM btn copiar
let clickEncriptar = undefined; //variable para verificar si se hizo click en encriptar
let clickDesencriptar = undefined; //variable para verificar si se hizo click en desencriptar
const divOutput = document.querySelector(".div_output"); //DOM div output
let tituloSalida = divOutput.querySelector(".titulo_salida"); //DOM titulo salida
let areaSalida = divOutput.querySelector(".area_salida"); //DOM area salida
const divImagenOutput = document.querySelector(".imagen_ouput"); //DOM div imagen output

//----------------- ADD EVENT LISTENER  ------- //
//                                              //
//--------------------------------------------- //

//evento para copiar el texto de salida
btnCopiar.addEventListener("click", (e) => {
  copiarTexto();
  limpiarInput();
  limpiarOutput();
});

//evento para limpiar input y output al cargar la pagina
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
  clickEncriptar = true;
  clickDesencriptar = false;
  verificacioTexto();
});

//btn desencriptar
botonDesencriptar.addEventListener("click", (e) => {
  clickDesencriptar = true;
  clickEncriptar = false;
  verificacioTexto();
});

//-------------------FUNCIONES -------------- //
//                                             //
//--------------------------------------------- //

//funcion para copiar el texto de salida
const copiarTexto = () => {
  navigator.clipboard
    .writeText(areaSalida.value)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.log("Error al copiar el texto", err);
    });
};

//funcion para encriptar el texto ingresado
const encriptacionTexto = () => {
  textoEncriptado = [];
  textoIngresado = textoIngresado.split("");
  textoIngresado
    .map((letra) => {
      //switch para la condicional de encriptacion
      switch (letra) {
        case "a":
          return textoEncriptado.push("ai");

        case "e":
          return textoEncriptado.push("enter");

        case "i":
          return textoEncriptado.push("imes");

        case "o":
          return textoEncriptado.push("ober");
        case "u":
          return textoEncriptado.push("ufat");

        default:
          return textoEncriptado.push(letra);
      }
    })
    .join("");

  return (textoEncriptado = textoEncriptado.join(""));
};

//funcion para desencriptar el texto ingresado
const desencriptacionTexto = () => {
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

  if (expresionRegular.test(textoIngresado)) {
    if (clickEncriptar == true) {
      encriptacionTexto();
      outputResult();
    } else {
      if (clickDesencriptar == true) {
        desencriptacionTexto();
        outputResult();
      } else {
      }
    }
  } else {
    popupOpen();
    limpiarInput();
    limpiarOutput();
  }
};

//funcion abrir popup
const popupOpen = () => {
  popup.classList.remove("show");
};

//funcion mostrar resultado en output
const outputResult = () => {
  //condicional para crear el titulo salida encriptado/desencriptado
  if (!tituloSalida) {
    tituloSalida = document.createElement("h2");
    tituloSalida.classList.add("titulo_salida");
    divOutput.appendChild(tituloSalida);
  }

  if (clickEncriptar == true) {
    divImagenOutput.setAttribute("style", "display:none");
    areaSalida.setAttribute("style", "display:block");
    areaSalida.value = textoEncriptado;
    tituloSalida.textContent = "Texto encriptado";

    if (areaSalida.value != "") {
      btnCopiar.setAttribute("style", "display:block");
    }
  } else {
    if (clickDesencriptar == true) {
      divImagenOutput.setAttribute("style", "display:none");
      areaSalida.setAttribute("style", "display:block");
      areaSalida.value = textoDesencriptado;
      tituloSalida.textContent = "Texto desencriptado";

      if (areaSalida.value != "") {
        btnCopiar.setAttribute("style", "display:block");
      }
    }
  }
};

//funcion para limpiar el input
const limpiarInput = () => {
  document.querySelector("#area__input").value = "";
  btnCopiar.setAttribute("style", "display:none");
};

//funcion para limpiar el output
const limpiarOutput = () => {
  setTimeout(() => {
    areaSalida.value = "";
    divImagenOutput.setAttribute("style", "display:block");
    areaSalida.setAttribute("style", "display:none");
    tituloSalida.textContent = "";
    btnCopiar.setAttribute("style", "display:none");
  }, 300);
};

//------------------------ANIMACIONES------------- //
//                                                //
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
