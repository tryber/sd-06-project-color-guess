// Criação das bolas coloridas
let colors;

function createColorBalls() {
  const balls = document.querySelector('#balls');
  for (let index = 0; index < colors.length; index += 1) {
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divBall.style.backgroundColor = colors[index];
    balls.appendChild(divBall);
  }
}

// Gera os números aleatórios de cada cor RGB
function generateRandomColorNumber() {
  return Math.ceil(Math.random() * 255);
}

// Gera as cores RGB aleatórias
function generateRandomColor() {
  const colorR = generateRandomColorNumber();
  const colorG = generateRandomColorNumber();
  const colorB = generateRandomColorNumber();
  const colorRGB = `rgb(${colorR}, ${colorG}, ${colorB})`;
  return colorRGB;
}

// Cria as 6 bolas de cores
function generateColors() {
  colors = [];
  for (let index = 0; index < 6; index += 1) {
    colors.push(generateRandomColor());
  }
}

// escolhe uma das cores geradas na paleta para adivinhar
function selectColorGuess() {
  const colorToRun = colors[0].substring(3);
  return colorToRun;
}

window.onload = function () {
  // gera paleta de cores
  generateColors();
  // cria as bolas coloridas
  createColorBalls();
  // escolhe uma cor da paleta gerada
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerHTML = selectColorGuess();
}
