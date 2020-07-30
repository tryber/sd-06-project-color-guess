const colorOptions = document.querySelector('.color-options');
const correctColor = document.querySelector('#rgb-color');
let answerText = document.querySelector('#answer');

colorOptions.addEventListener('click', function () {
  const selectedColor = event.target;
  const rgbOfSelectedColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');

  if (rgbOfSelectedColor.substr(3) === correctColor.innerText) {
    answerText.innerText = 'Acertou!';
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
};

function colorAssigner() {
  const colorsToSet = document.querySelector('.color-options').children;

  for (let x = 0; x < colorsToSet.length; x += 1) {
    colorsToSet[x].style.backgroundColor = getRandomColor();
  }

  function pickingTheRight() {
    let pickedNumber = Math.floor(Math.random() * 6);
    let pickedColor = colorsToSet[pickedNumber].style.backgroundColor;
    return pickedColor.substr(3);
  }

  answerText.innerText = 'Escolha uma cor';
  correctColor.innerText = pickingTheRight();
};

colorAssigner();

const resetButton = document.querySelector('#reset-game');

resetButton.addEventListener('click', colorAssigner);
