// Criação das bolas coloridas
let colors;
let count = 0;
let score = 0;
let colorToGuess = '';
const answer = document.querySelector('#answer');
const scoreRun = document.querySelector('#score');

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
  const arrayOfColors = [];
  for (let index = 0; index < 6; index += 1) {
    arrayOfColors.push(generateRandomColor());
  }
  return arrayOfColors;
}

// escolhe uma das cores geradas na paleta para adivinhar
function selectColorGuess() {
  const arrayOfColorsSize = colors.length - 1;
  const index = Math.ceil(Math.random() * arrayOfColorsSize);
  const selectedColor = colors[index];
  return selectedColor;
}

// Atualiza score
function updateScore() {
  scoreRun.innerHTML = `Placar: ${score}`;
}

// Inicializa o jogo
function initGame() {
  // reiniciar paleta
  const resetPalette = document.querySelector('#balls');
  while (resetPalette.firstChild) {
    resetPalette.removeChild(resetPalette.lastChild);
  }
  // gera paleta de cores
  colors = generateColors();
  // cria as bolas coloridas
  createColorBalls();
  // escolhe uma cor da paleta gerada
  colorToGuess = selectColorGuess();
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerHTML = colorToGuess;
  answer.innerHTML = 'Escolha uma cor';
  count = 0;
  updateScore();
}

// Botão que chama a função para reinicializar o jogo
const resetNow = document.querySelector('#reset-game');
resetNow.addEventListener('click', initGame);

// Verifica se a cor está correta quando clica na bola;
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
      if (score > 0) {
        score -= 1;
      }
    }
  }
  updateScore();
});

window.onload = function () {
  // Inicializa o jogo
  initGame();
};
