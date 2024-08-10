import "../../scss/styles.scss";

import {cerrarPopUp,abrirPopUp } from "./animaciones.js";



const btnEncriptar = document.querySelector("#botonEncriptar");
const expresionRegular = /^[a-z\s]+$/;
export let verificación;


console.log("archivo main.js cargado");


function revisarTexto() {
  btnEncriptar.addEventListener("click", () => {
    let textoRecibido = document.querySelector("#area__input").value;
    let verificado = undefined;

    if (expresionRegular.test(textoRecibido)) {
     
     

    } else {
     
      abrirPopUp();
    }

    return verificación;
  });
}


revisarTexto();
cerrarPopUp();

//funcion para encriptar el texto
function encriptar() {
  btnEncriptar.addEventListener("click", () => {
    let textoRecibido = document.querySelector("#area__input").value;

    textoRecibido = textoRecibido.split("");
    console.log(textoRecibido);
  });
}
encriptar();




