const rgbText = document.getElementById('rgb-color');
const ballsCollections = document.getElementById('ball-collections');
const btnResetGame = document.getElementById('reset-game');
const resultOfAnswer = document.getElementById('answer');
const result = Math.floor(Math.random() * 6);
const score = document.getElementById('score');
let counter = 0;

// Gera uma RGB aleatória;
function randomColor() {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return `(${R}, ${G}, ${B})`;
}

// Cria as bolinhas;
function createBall(color) {
  const ballsOptions = document.createElement('div');
  ballsOptions.className = 'ball';
  ballsOptions.style.backgroundColor = `rgb${color}`;
  return ballsOptions;
}

// Cria as bolinhas e seleciona o rgb para descobrir;
function createOptionsColors(options) {
  for (let index = 0; index < options.length; index += 1) {
    const balls = createBall(options[index]);
    ballsCollections.appendChild(balls);
  }
  rgbText.innerText = options[result];
}

// Cria array de cores randomizadas;
function generateColorOptions() {
  const colorsOptions = [];
  for (let index = 0; index < 6; index += 1) {
    colorsOptions.push(randomColor());
  }
  return createOptionsColors(colorsOptions);
}

// Mostra o resultado;
function resultOfGame(event) {
  const correctBall = document.getElementsByClassName('ball')[result];
  const verify = event.target;
  if (verify.style.backgroundColor === correctBall.style.backgroundColor) {
    resultOfAnswer.innerHTML = 'Acertou!';
    counter += 3;
  }
  if (verify.style.backgroundColor !== correctBall.style.backgroundColor) {
    resultOfAnswer.innerHTML = 'Errou! Tente novamente!';
    if (counter > 0) {
      counter -= 1;
    }
  }
  score.innerHTML = `Placar: ${counter}`;
}

// Reinicia o jogo com novas cores;
function resetGame() {
  const clearBalls = document.querySelectorAll('.ball');
  for (let index = 0; index < clearBalls.length; index += 1) {
    clearBalls[index].remove();
  }
  generateColorOptions();
  resultOfAnswer.innerHTML = 'Escolha uma cor';
}

window.onload = function () {
  btnResetGame.addEventListener('click', resetGame);
  ballsCollections.addEventListener('click', resultOfGame);
  generateColorOptions();
  resultOfAnswer.innerHTML = 'Escolha uma cor';
  score.innerHTML = `Placar: ${counter}`;
};
