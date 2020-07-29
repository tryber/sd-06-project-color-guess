const rgb = 'rgb';

function generateRandomRGBColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const openingBrackets = '(';
  const closeBrackets = ')';
  const comma = ',';
  return openingBrackets + r + comma + g + comma + b + closeBrackets;
}

let rightIndex;
function getRightIndex() {
  return Math.round(Math.random() * 5);
}

let rightAnswer;
function generateRandomPalette() {
  rightIndex = getRightIndex();
  for (let i = 0; i < 6; i += 1) {
    if (i === rightIndex) {
      rightAnswer = generateRandomRGBColor();
      document.getElementsByClassName('ball')[i].style.backgroundColor = rgb + rightAnswer;
    } else {
      document.getElementsByClassName('ball')[i].style.backgroundColor = rgb + generateRandomRGBColor();
    }
  }
}

function resetBorders() {
  const balls = document.getElementsByClassName('ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.borderColor = 'black';
  }
}

let hasTried = false;
const gameText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

function setGame() {
  hasTried = false;
  generateRandomPalette();

  // Concatenei com os espaços para poder comparar no final! Não sabia como, catei na internet.
  const rightAnswerConcatenated = rightAnswer.split(',').join(', ');
  document.getElementById('rgb-color').innerText = rightAnswerConcatenated;
  gameText.innerText = 'Escolha uma cor';
  resetBorders();
}

window.onload = setGame;

resetButton.addEventListener('click', setGame);

const ballsContainer = document.getElementById('ball-container');
let points = 0;
ballsContainer.addEventListener('click', function (event) {
  const rightColor = rgb + document.getElementById('rgb-color').innerText;
  const ball = event.target;
  const ballRGB = window.getComputedStyle(ball).getPropertyValue('background-color');
  resetBorders();
  event.target.style.borderColor = 'tomato';
  if (!hasTried) {
    if (rightColor === ballRGB) {
      document.getElementById('answer').innerHTML = 'Acertou!';
      points += 3;
      document.getElementById('score').innerHTML = points;
    } else {
      gameText.innerHTML = 'Errou! Tente novamente!';
    }
    hasTried = true;
  }
});
