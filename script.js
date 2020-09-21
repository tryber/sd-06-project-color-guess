function randomColor() {
  const R = Math.floor(Math.random() * (255 + 1));
  const G = Math.floor(Math.random() * (255 + 1));
  const B = Math.floor(Math.random() * (255 + 1));

  return `rgb(${R}, ${G}, ${B})`;
}

function createBall(elements) {
  const ballContainer = document.getElementById('colors');
  for (let index = 0; index < elements; index += 1) {
    const ballElement = document.createElement('div');
    ballElement.classList.add('ball');
    ballElement.style.backgroundColor = randomColor();
    ballContainer.appendChild(ballElement);
  }
}

window.onload = function () {
  createBall(6);
};
