const colorOptions = document.querySelector('.color-options');
const correctColor = `rgb${document.querySelector('#rgb-color').innerText}`;
let answerText = document.querySelector('#answer');

colorOptions.addEventListener('click', function () {
  const selectedColor = event.target;
  const rgbOfSelectedColor = window.getComputedStyle(selectedColor, null).getPropertyValue('background-color');

  console.log(rgbOfSelectedColor);
  if (rgbOfSelectedColor === correctColor) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
})
