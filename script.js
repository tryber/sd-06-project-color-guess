
const functionalities = {
  generateColorBalls: function generateBalls(numberOfColors) {
    for (let i = 0; i < numberOfColors; i += 1) {
      functionalities.generateColorBall();
    }
  },
  generateColorBall: function generateColors() {
    const colorsContainer = document.querySelector('#colors-container');
    const colorElement = document.createElement('li');
    colorElement.className = 'ball';
    colorElement.style.backgroundColor = functionalities.generateRandomColor();
    colorElement.addEventListener('click', functionalities.verifyColor);
    colorsContainer.appendChild(colorElement);
  },
  generateRandomColor: function generateRandomColor() {
    const redChannel = Math.random() * 255;
    const greenChannel = Math.random() * 255;
    const blueChannel = Math.random() * 255;
    const color = ('rgb('.concat([redChannel, greenChannel, blueChannel].toString())).concat(')');
    return color;
  },
  generateRandomColorToBeGuessed: function mainColor() {
    const allColors = document.querySelectorAll('.ball');
    const numberColors = allColors.length;
    const randomColor = Math.round((Math.random() * (numberColors - 1)) + 1);
    const colorToBeGuessed = allColors[randomColor - 1].style.backgroundColor;
    const colorToBeGuessedElement = document.querySelector('#rgb-color');
    colorToBeGuessedElement.innerHTML = colorToBeGuessed;
    const answerElement = document.querySelector('#answer');
    answerElement.innerHTML = 'Escolha uma cor';
  },
  verifyColor: function verifyColor() {
    const selectedBackground = document.querySelector('#rgb-color').innerHTML;
    const scoreElement = document.querySelector('#score');
    let score = parseInt(scoreElement.innerHTML, 10);
    if (event.target.style.backgroundColor === selectedBackground) {
      const answerElement = document.querySelector('#answer');
      answerElement.innerHTML = 'Acertou!';
      score += 3;
    } else {
      const answerElement = document.querySelector('#answer');
      answerElement.innerHTML = 'Errou! Tente novamente!';
      score += 0;
    }
    scoreElement.innerHTML = score.toString();
  },
  resetGame: function reset(numberOfColors) {
    const allColorBalls = document.querySelectorAll('.ball');
    const colorsContainer = document.querySelector('ul');
    for (let i = 0; i < allColorBalls.length; i += 1) {
      colorsContainer.removeChild(allColorBalls[i]);
    }
    console.log('oii')
    functionalities.generateColorBalls(numberOfColors);
    functionalities.generateRandomColorToBeGuessed();
  },
};

window.onload = function () {
  const numberOfColors = 6;
  functionalities.generateColorBalls(numberOfColors);    
  functionalities.generateRandomColorToBeGuessed();
  const buttonResetElement = document.querySelector('#reset-game');
  buttonResetElement.addEventListener('click', () => functionalities.resetGame(numberOfColors));
};
