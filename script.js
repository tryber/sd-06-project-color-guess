const rgbText = document.getElementById('rgb-color');
const ballsCollections = document.getElementById('ball-collections');

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

function createOptionsColors(options) {
  for (let index = 0; index < options.length; index += 1) {
    const balls = createBall(options[index]);
    ballsCollections.appendChild(balls);
  }
  rgbText.innerText = options[Math.floor(Math.random() * 6)];
}

// 
function generateColorOptions() {
  const colorsOptions = [];
  for (let index = 0; index < 6; index += 1) {
    colorsOptions.push(randomColor());
  }
  return createOptionsColors(colorsOptions);
}

window.onload = function () {
  generateColorOptions();
};
