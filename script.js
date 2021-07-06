function randomNumber() {
  const max = 256;
  const min = 0;
  let number = 0;
  for (let i = 0; i < 3; i += 1) {
    number = Math.floor(Math.random() * (max - min)) + min;
  }
  return number;
}
function randomColor() {
  let color = 'rgb(';
  color += randomNumber();
  color += ',';
  color += randomNumber();
  color += ',';
  color += randomNumber();
  color += ')';
  return color;
}
let numberColor = Math.floor(Math.random() * 6);
const container = document.querySelector('#container-balls');
function createDivs() {
  for (let i = 0; i < 6; i += 1) {
    const divCor = document.createElement('div');
    divCor.className = 'ball';
    divCor.style.backgroundColor = randomColor();
    container.appendChild(divCor);
  }
}
createDivs();
function colorP() {
  let colorChoice = document.querySelectorAll('.ball')[numberColor].style.backgroundColor;
  colorChoice = colorChoice.substr(3);
  return colorChoice;
}
const paragraph = document.querySelector('#rgb-color');
paragraph.innerHTML = colorP();
const result = document.querySelector('#answer');
const scored = document.querySelector('#score');
let counter = 0;
scored.innerHTML = counter;
container.addEventListener('click', function () {
  if (event.target.style.backgroundColor === (`rgb${paragraph.innerHTML}`)) {
    counter += 3;
    result.innerHTML = 'Acertou!';
    scored.innerHTML = counter;
  } else {
    result.innerHTML = 'Errou! Tente novamente!';
  }
});
const buttonReset = document.querySelector('#reset-game');
buttonReset.addEventListener('click', function () {
  while (container.children.length > 0) {
    container.firstChild.remove();
  }
  createDivs();
  numberColor = Math.floor(Math.random() * 6);
  paragraph.innerHTML = colorP();
  result.innerHTML = 'Escolha uma cor';
});
