const colorOptions = document.querySelector('.color-options');
const correctColor = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const currentScore = document.querySelector('#score');
let score = 0;

function scoreTracker() {
  currentScore.innerText = score;
}

scoreTracker();

colorOptions.addEventListener('click', function () {
  const selectedColor = event.target;
  const rgbOfSelectedColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');

  if (rgbOfSelectedColor.substr(3) === correctColor.innerText) {
    answerText.innerText = 'Acertou!';
    score += 3;
    scoreTracker()
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
});

function colorParam() {
  const color = Math.floor(Math.random() * 300);
  return color;
}

function getRandomColor() {
  const newRgbRng = `rgb(${colorParam()}, ${colorParam()}, ${colorParam()})`;
  return newRgbRng;
}

function colorAssigner() {
  const colorsToSet = document.querySelector('.color-options').children;

  for (let x = 0; x < colorsToSet.length; x += 1) {
    colorsToSet[x].style.backgroundColor = getRandomColor();
  }

  function pickingTheRight() {
    const pickedNumber = Math.floor(Math.random() * 6);
    const pickedColor = colorsToSet[pickedNumber].style.backgroundColor;
    return pickedColor.substr(3);
  }

  answerText.innerText = 'Escolha uma cor';
  correctColor.innerText = pickingTheRight();
}

colorAssigner();

resetButton.addEventListener('click', colorAssigner);
