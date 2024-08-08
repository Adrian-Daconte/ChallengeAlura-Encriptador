import { verificación } from "./main.js";

export const popup = document.querySelector(".div-popup");
export const fondoPopup = document.querySelector(".fondo-popup");
export function cerrarPopUp() {
  
  const cerrar = document.querySelector(".cerrar-popup");
  cerrar.addEventListener("click", () => {
    popup.classList.remove("div-popup");
    popup.classList.add("non");
    fondoPopup.classList.remove("fondo_popup");
    fondoPopup.classList.add("non");
  });
}

export function abrirPopUp() {
   
   popup.classList.add('div-popup');
   popup.classList.remove('non');
   fondoPopup.classList.add('fondo_popup');
   fondoPopup.classList.remove('non');
    
} 


