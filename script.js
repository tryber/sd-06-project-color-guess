let score = 0;
let count = 0;
let arrayOfColors = [];
let colorToGuess = '';
const btnResetGame = document.getElementById('reset-game');
const rgbColor = document.getElementById('rgb-color');
const scoreElement = document.getElementById('score');
const ballContainer = document.getElementById('colors');
const answer = document.getElementById('answer');

function randomColor() {
  const R = Math.floor(Math.random() * (255 + 1));
  const G = Math.floor(Math.random() * (255 + 1));
  const B = Math.floor(Math.random() * (255 + 1));
  return `(${R}, ${G}, ${B})`;
}

function createBall(elements) {
  arrayOfColors = [];
  for (let index = 0; index < elements; index += 1) {
    const ballElement = document.createElement('div');
    const color = randomColor();
    arrayOfColors.push(color);
    ballElement.classList.add('ball');
    ballElement.style.backgroundColor = `rgb${color}`;
    ballContainer.appendChild(ballElement);
  }
}

function getColorToGuess() {
  const numberOfColors = arrayOfColors.length - 1;
  const index = Math.ceil(Math.random() * numberOfColors);
  colorToGuess = arrayOfColors[index];
  return colorToGuess;
}

function updateScore() {
  scoreElement.innerHTML = `Placar: ${score}`;
}

ballContainer.addEventListener('click', function ({ target }) {
  if (target.className === 'ball' && count === 0) {
    if (target.style.backgroundColor === `rgb${colorToGuess}`) {
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

function initGame() {
  ballContainer.innerHTML = '';
  createBall(6);
  rgbColor.innerText = getColorToGuess();
  answer.innerText = 'Escolha uma cor';
  count = 0;
  updateScore();
}

btnResetGame.addEventListener('click', initGame);

window.onload = function () {
  initGame();
};
