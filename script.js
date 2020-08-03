const color = document.querySelector('#rgb-color');
const ballsDiv = document.querySelector('.balls');

// Gerando cor aleatória
function generateColor() {
  const first = Math.ceil((Math.random()) * 256);
  const second = Math.ceil((Math.random()) * 256);
  const third = Math.ceil((Math.random()) * 256);
  color.innerHTML = '(' + first + ', ' + second + ', ' + third + ')';
}
generateColor();

// Cores para advinhação
function generateColors(limit) {
  for (let index = 0; index < limit; index += 1) {
    const cor = document.createElement('div');
    cor.className = 'ball';
    ballsDiv.appendChild(cor);
  }
}
generateColors(6);
