const balls = document.querySelectorAll('#balls .ball');
const pickedColorElement = document.querySelector('#rgb-color');
let answerRGB = '';
let randomBallRGB = '';
let rgbRandom = '';
const resultElement = document.querySelector('#answer');
const hand = document.querySelector('#hand');

function genColors() {
  const rgbColor1 = (Math.round(Math.random() * 255));
  const rgbColor2 = (Math.round(Math.random() * 255));
  const rgbColor3 = (Math.round(Math.random() * 255));
  rgbRandom = '(' + rgbColor1 + ', ' + rgbColor2 + ', ' + rgbColor3 + ')';
}

function paintBalls() {
  for (let key = 0; key < balls.length; key += 1) {
    genColors();
    balls.item(key).style.backgroundColor = 'rgb' + rgbRandom;
    for (let checkColor = 0; checkColor < key; checkColor += 1) {
      if (balls.item(key).style.backgroundColor = 'rgb' + rgbRandom) {
        genColors();
        balls.item(key).style.backgroundColor = 'rgb' + rgbRandom;
      }
    }
  }
}

paintBalls();

function pickRGB() {
  const randomBall = Math.floor(Math.random() * 6);
  randomBallRGB = balls.item(randomBall).style.backgroundColor;
  answerRGB = randomBallRGB.substr(3);
  pickedColorElement.innerHTML = answerRGB;
}

pickRGB();

function resetGame(event) {
  paintBalls();
  pickRGB();
  resultElement.innerText = 'Escolha uma cor';
  hand.className = 'far fa-hand-point-down hands';
}

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', resetGame);

function checkAnswer(event) {
  if (event.target.style.backgroundColor === randomBallRGB) {
    resultElement.innerText = 'Acertou!';
    hand.className = 'far fa-thumbs-up hands';
  } else {
    resultElement.innerText = 'Errou! Tente novamente!';
    hand.className = 'fas fa-poo hands';
  }
}

for (let key = 0; key < balls.length; key += 1) {
  balls.item(key).addEventListener('click', checkAnswer);
}
