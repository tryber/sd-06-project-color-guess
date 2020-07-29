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

window.onload = generateRandomPalette();

let gameText = document.getElementById('answer')
const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', function () {
  generateRandomPalette();
  
  //Concatenei com os espaços para poder comparar no final! Não sabia como, catei na internet.
  const rightAnswerConcatenated = rightAnswer.split(',').join(', ');
  document.getElementById('rgb-color').innerText = rightAnswerConcatenated;
  gameText.innerText = 'Escolha uma cor';
});

const balls = document.getElementsByClassName('ball');
const ballsContainer = document.getElementById('ball-container');
ballsContainer.addEventListener('click', function (event) {
  const rightColor = rgb + document.getElementById('rgb-color').innerText;
  const ball = event.target;
  const ballRGB = window.getComputedStyle(ball).getPropertyValue('background-color');
  if (rightColor === ballRGB) {
    gameText.innerText = 'Acertou!';
  } else {
    gameText.innerText = 'Errou! Tente novamente!';
  }
});
