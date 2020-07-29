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
  console.log(rightIndex);
  for (let i = 0; i < 6; i += 1) {
    if (i === rightIndex) {
      rightAnswer = generateRandomRGBColor();
      document.getElementsByClassName('ball')[i].style.backgroundColor = rgb + rightAnswer;
    } else {
      document.getElementsByClassName('ball')[i].style.backgroundColor = rgb + generateRandomRGBColor();
    }
  }
  const balls = document.getElementsByClassName('ball');
  for (let i = 0; i < balls.length; i += 1) {    
    const bgcolor = window.getComputedStyle(balls[i]).getPropertyValue('background-color');
    console.log(bgcolor);
  }
}

window.onload = generateRandomPalette();

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', function () {
  generateRandomPalette();
  document.getElementById('rgb-color').innerHTML = rightAnswer;
});


