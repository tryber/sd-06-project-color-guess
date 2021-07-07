window.onload = function () {
  function randomNumbers() {
    return Math.floor(Math.random() * 255);
  }
  function generatorRandomColors() {
    let generatedRgb = '(' + randomNumbers() + ', ' + randomNumbers() + ', ' + randomNumbers() + ')';
    return generatedRgb;
  }
  function coloringCircles() {
    const circles = document.getElementsByClassName('ball');
    const guessing = document.getElementById('rgb-color');
    const arrayParaComparacao = [];
    for (let i = 0; i < circles.length; i += 1) {
      circles[i].style.backgroundColor = 'rgb' + generatorRandomColors();
      arrayParaComparacao[i] = circles[i].style.backgroundColor;
    }
    const valorApresentado = arrayParaComparacao[Math.floor(Math.random() * arrayParaComparacao.length)];
    guessing.innerHTML = valorApresentado;// como tirar o 'RGB' acrescentado na linha 20?
    document.getElementById('answer').innerText = 'Escolha uma cor';
  }
  coloringCircles();
  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', coloringCircles);
};
const ballsPalette = document.getElementById('ballsPalette');
let score = 0;
function chooseBall(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  const scoreElement = document.querySelector('#score');//
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const valorApresentado = document.getElementById('rgb-color').innerHTML;
  const textBoxResult = document.getElementById('answer');
  if (valorApresentado === selectedColor) {
    textBoxResult.innerHTML = 'Acertou!';
    score += 3;//
  } else {
    textBoxResult.innerHTML = 'Errou! Tente novamente!';
    score += 0;//
  }
    scoreElement.innerHTML = 'Placar: ' + score;
}

ballsPalette.addEventListener('click', chooseBall);
