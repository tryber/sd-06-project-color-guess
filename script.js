const rgbText = document.getElementById('rgb-color');
const ballsCollections = document.getElementById('ball-collections');
const btnResetGame = document.getElementById('reset-game');

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

// Cria as bolinhas e sorteia aleatoriamente uma das cores para o jogo;
function createOptionsColors(options) {
  for (let index = 0; index < options.length; index += 1) {
    const balls = createBall(options[index]);
    ballsCollections.appendChild(balls);
  }
  rgbText.innerText = options[Math.floor(Math.random() * 6)];
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
function resultOfGame() {
  const answer = document.getElementById('answer');
  answer.innerHTML = 'Escolha uma cor';
}

// Reinicia o jogo com novas cores;
function resetGame() {
  const clearBalls = document.querySelectorAll('.ball');
  for (let index = 0; index < clearBalls.length; index += 1) {
    clearBalls[index].remove();
  }
  generateColorOptions();
}

window.onload = function () {
  btnResetGame.addEventListener('click', resetGame);
  generateColorOptions();
  resultOfGame();
};
