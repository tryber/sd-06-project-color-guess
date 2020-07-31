// Criação das bolas coloridas
let colors;
let count = 0;
let score = 0;
let colorToGuess;
const answer = document.querySelector('#answer');

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
  let colorsTo = [];
  for (let index = 0; index < 6; index += 1) {
    colorsTo.push(generateRandomColor());
  }
  return colorsTo;
}

// escolhe uma das cores geradas na paleta para adivinhar
function selectColorGuess() {
  colorToGuess = colors[Math.ceil(Math.random() * colors.length)];
  return colorToGuess;
}

// Inicializa o jogo
function initGame() {
  // reseta paleta
  const resetPalette = document.querySelector('#balls');
  while (resetPalette.firstChild) {
    resetPalette.removeChild(resetPalette.lastChild);
  }
  // gera paleta de cores
  colors = generateColors();
  // cria as bolas coloridas
  createColorBalls();
  // escolhe uma cor da paleta gerada
  selectColorGuess();
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerHTML = colorToGuess;
  answer.innerHTML = 'Escolha uma cor';
  count = 0;
};

// Botão que chama a funcão para reinicializar o jogo
const resetNow = document.querySelector('#reset-game');
resetNow.addEventListener('click', initGame);

const runNow = document.getElementById('balls');
runNow.addEventListener('click', function (event) {
  const runner = event.target;
  if (runner.className === 'ball' && count === 0) {
    if (runner.style.backgroundColor === colorToGuess) {
      answer.innerHTML = 'Acertou!';
      count += 1;
      score += 3;
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
      count += 1;
      if (score >= 0) {
        score -= 1;
      }
    }
  }
});
// runNow.addEventListener('mouseover', function (event) {
//   console.log(event.target.style.backgroundColor);
// });

window.onload = function () {
  // Inicializa o jogo
  initGame();
};
