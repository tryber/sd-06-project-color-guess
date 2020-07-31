let score = 0;
let level = 0;

function generateColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return rgb
}

function fillLevelColor() {
  const balls = document.querySelectorAll('.ball');
  const numberOfBalls = balls.length;

  const randBall = Math.floor(Math.random() * (numberOfBalls - 1));

  let color = window.getComputedStyle(balls[randBall]).getPropertyValue('background-color');
  color = color.replace('rgb', '');

  const display = document.getElementById('rgb-color');
  display.innerText = color;
}

function updateScore(hit) {
  if (hit) {
    score += 3;
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = score;
    level += 1;
    const levelElement = document.getElementById('level');
    levelElement.innerText = level;
  }
}

function checkColor(event) {
  const display = document.getElementById('rgb-color');
  const color = 'rgb' + display.innerText;

  const answer = document.getElementById('answer');

  if (event.target.style.backgroundColor === color) {
    answer.innerText = 'Acertou!';
    updateScore(true);
    fillBalls();
    fillLevelColor();
  } else {
    answer.innerText = 'Errou! Tente Novamente!';
  }
}

function fillBalls() {
  const balls = document.querySelectorAll('.ball');

  balls.forEach((ball) => {
    rgb = generateColor();
    ball.style.backgroundColor = rgb;

    ball.addEventListener('click', checkColor)
  })
}

function enableButton() {
  const btn = document.querySelector('button');

  btn.onclick = () => {
    const answer = document.getElementById('answer');
    answer.innerText = 'Escolha uma cor';

    fillBalls();
    fillLevelColor();

    level = 0;
    const levelElement = document.getElementById('level');
    levelElement.innerText = level;
  }
}

fillBalls();
fillLevelColor();
enableButton();