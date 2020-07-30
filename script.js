function randomNumber() {
  let max = 256;
  let min = 0;
  for (let i = 0; i < 3; i += 1) {
    var number = Math.floor(Math.random() * (max - min)) + min;
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
let numberColor = Math.floor(Math.random()*6);
for (let i = 0; i < 6; i += 1) {
  let divCor = document.createElement('div');
  divCor.className = 'ball';
  divCor.style.backgroundColor = randomColor();
  document.querySelector('#container-balls').appendChild(divCor);
}
let colorChoice = document.querySelectorAll('.ball')[numberColor].style.backgroundColor;
colorChoice = colorChoice.substr(3);
document.querySelector('#rgb-color').innerHTML = colorChoice;
window.onclick = function () {
  if (event.target.style.backgroundColor === ('rgb' + colorChoice)) {
    document.querySelector('#answer').innerHTML = 'Acertou!';
  } else {
    document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
  }
}
