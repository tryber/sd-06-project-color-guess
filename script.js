window.onload = function name(params) {
  randomColors();
  colorToMatch();
  createBalls();
}

const showColor = document.querySelector('#rgb-color');
const ballsList = document.querySelector('#create-balls');
const avaliator = document.querySelector('#avaliator')
let colorToMatchStr = '';
let colorToMatchStr2 = '';
let colors = [];

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
  }else{
    avaliator.innerHTML = "Errou! Tente novamente!";
  }
 })




