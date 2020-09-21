const btnResetGame = document.getElementById('reset-game');

function randomColor() {
  const R = Math.floor(Math.random() * (255 + 1));
  const G = Math.floor(Math.random() * (255 + 1));
  const B = Math.floor(Math.random() * (255 + 1));
  return `(${R}, ${G}, ${B})`;
}

function createBall(elements) {
  const ballContainer = document.getElementById('colors');
  for (let index = 0; index < elements; index += 1) {
    const ballElement = document.createElement('div');
    const color = randomColor();
    ballElement.classList.add('ball');
    ballElement.style.backgroundColor = `rgb${color}`;
    ballContainer.appendChild(ballElement);
  }
}

btnResetGame.addEventListener('click', () => {
  const rgbColor = document.getElementById('rgb-color');
  const answer = document.getElementById('answer');
  rgbColor.innerText = randomColor();
  answer.innerText = 'Escolha uma cor';
});

window.onload = function () {
  createBall(6);
};
