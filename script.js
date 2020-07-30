
functionalities = {
  generateColorBalls: function generateColors() {
    const colorsContainer =document.querySelector('#colors-container');
    const colorElement = document.createElement('li');
    colorElement.className = 'ball';
    colorElement.style.backgroundColor = functionalities.generateRandomColor();
    colorsContainer.appendChild(colorElement);
  },
  generateRandomColor: function generateRandomColor() {
    const redChannel = Math.random() * 255;
    const greenChannel = Math.random() * 255;
    const blueChannel = Math.random() * 255;
    const color = ('rgb('.concat([redChannel, greenChannel, blueChannel].toString())).concat(')');
    return color;
  },
}



window.onload = function () {
  const numberOfColors = 6;
  for (let i = 0; i < numberOfColors; i += 1) {
    functionalities.generateColorBalls();
  }
}