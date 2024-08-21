//Opacidad de color para las estrellas
const COLORS = ["#fff2", "#fff4", "#fff6", "#fff8", "#fffa", "#fffc"];
//funcion campo de estrellas en el fondo
export const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const layer = [];

  for (let i = 0; i < totalStars; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    layer.push(`${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--space-layer", layer.join(","));
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
};
