var score = 0;

function generateScore() {
  score += 3;
  string = `Placar: ${score}`
  document.getElementById('score').innerText = string;
}

function verifyAnswer(event) {
  let color = event.target.style.backgroundColor;
  color = color.slice(3);
  if (color !== document.getElementById('rgb-color').innerText) {
    document.getElementById('answer').innerText = 'Errou! Tente novamente';
  } else {
    document.getElementById('answer').innerText = 'Acertou!';
    generateScore();
  }
}

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function generateBalls(numberOfBalls) {
  const gameArea = document.getElementById('game-area');
  for (ball = 0; ball < numberOfBalls; ball += 1) {
    const ball = document.createElement('div');
    const color = generateRandomColor();
    ball.classList.add('ball');
    ball.style.backgroundColor = color;
    ball.addEventListener('click', verifyAnswer);
    gameArea.appendChild(ball);
  }
}

function generateColorText(numberOfBalls) {
  const balls = document.getElementsByClassName('ball');
  const index = Math.floor(Math.random() * (numberOfBalls))
  let innerText = window.getComputedStyle(balls[index], null).getPropertyValue('background-color');
  innerText = innerText.slice(3);
  document.getElementById('rgb-color').innerText = innerText;
}

function destroyBalls() {
  const gameArea = document.getElementById('game-area');
  while (gameArea.children.length !== 0) {
    gameArea.removeChild(gameArea.children[0]);
  }
}

function generateNewGame() {
  destroyBalls();
  document.getElementById('answer').innerText = 'Escolha uma cor';
  generateBalls(6);
  generateColorText(6);
}

window.onload = function () {
  generateBalls(6);
  generateColorText(6);
  document.getElementById('reset-game').addEventListener('click', generateNewGame);
};
