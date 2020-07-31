const showColor = document.querySelector('#rgb-color');
const ballsList = document.querySelector('#create-balls');
const avaliator = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const scoreShow = document.querySelector('#score');
let colorToMatchStr = '';
let colorToMatchStr2 = '';
let colors = [];
const pontos = 0;
let total = pontos;
const string1 = 'Pontuação: ';
const string2 = 'rgb';
const string3 = 'background-color: rgb';
const string4 = ';';


function randomColors() {
  let j = 0;
  while (j < 6) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    j += 1;
    colors.push(`(${r}, ${g}, ${b})`);
  }
}

function colorToMatch() {
  colorToMatchStr = colors[Math.floor(Math.random() * 6)];
  showColor.innerHTML = colorToMatchStr;
  colorToMatchStr2 = string2 + colorToMatchStr;
}

function createBalls() {
  let i = 0;
  while (i < 6) {
    const create = document.createElement('div');
    create.setAttribute('class', 'ball');
    create.setAttribute('style', string3 + colors[i] + string4);
    ballsList.appendChild(create);
    i += 1;
  }
}

function score() {
  total += 3;
  scoreShow.innerHTML = string1 + total;
}

ballsList.addEventListener('click', function (event) {
  if (event.target.style.backgroundColor === colorToMatchStr2) {
    avaliator.innerHTML = 'Acertou!';
    score();
  } else {
    avaliator.innerHTML = 'Errou! Tente novamente!';
  }
});

resetBtn.addEventListener('click', function () {
  showColor.innerHTML = '';
  colors = [];
  let index = 0;
  while (index < 6) {
    const rmvBalls = document.querySelector('.ball');
    index += 1;
    ballsList.removeChild(rmvBalls);
  }
  avaliator.innerHTML = 'Escolha uma cor';
  randomColors();
  colorToMatch();
  createBalls();
});

window.onload = function name() {
  randomColors();
  colorToMatch();
  createBalls();
};
