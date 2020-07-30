window.onload = function name() {
  randomColors();
  colorToMatch();
  createBalls();
}

const showColor = document.querySelector('#rgb-color');
const ballsList = document.querySelector('#create-balls');
const avaliator = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const scoreShow = document.querySelector('#score');
let colorToMatchStr = '';
let colorToMatchStr2 = '';
let colors = [];
let pontos = 0;
let total = 0;

function randomColors() {
  let j = 0; 
  
  while (j < 6) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    j += 1
    colors.push(`(${r}, ${g}, ${b})`) ;
  }
}

function colorToMatch() {
  colorToMatchStr = colors[Math.floor(Math.random() * 6)]
  showColor.innerHTML = colorToMatchStr;
  colorToMatchStr2 = 'rgb'+colorToMatchStr;
  console.log(colorToMatchStr);
}

function createBalls() {
  let i = 0;
  while (i < 6) {
    const create = document.createElement('div');
    create.setAttribute('class', 'ball');
    create.setAttribute('style', 'background-color: rgb' + colors[i] + ';')
    ballsList.appendChild(create);
    i += 1;
  } 
}

 ballsList.addEventListener('click', function (event) {
  if (event.target.style.backgroundColor === colorToMatchStr2) {
    avaliator.innerHTML = "Acertou!";
    score();

  }else{
    avaliator.innerHTML = "Errou! Tente novamente!";
  }
 })

  resetBtn.addEventListener('click', function () {
    showColor.innerHTML = "";
    colors = [];
    let index = 0;
    while (index < 6) {
      const rmvBalls = document.querySelector('.ball')
      index += 1;
      ballsList.removeChild(rmvBalls)
    }
    randomColors();
    colorToMatch();
    createBalls();
  })

  function score() {
    total = pontos += 3;
    scoreShow.innerHTML = 'Pontuação:' + total;
  }


