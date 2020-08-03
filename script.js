window.onload = function () {

  coloringCircles();
  const ballsPalette = document.querySelector('#balls');

  function randomNumbers() {
    return Math.floor(Math.random() * 255);
  }

  function generatorRandomColors() {
    let generatedRgb = '(' + randomNumbers() + ", " + randomNumbers() + ", " + randomNumbers() + ')';
    return generatedRgb;
  }
  
  function coloringCircles() {
    const circles = document.getElementsByClassName('ball');
    const guessing = document.getElementById('rgb-color');
    let arrayParaComparacao = [];
    for (let i = 0; i < circles.length; i += 1) {
      circles[i].style.backgroundColor = 'rgb'+generatorRandomColors();
      arrayParaComparacao[i] = circles[i].style.backgroundColor;
    }
    let valorApresentado = arrayParaComparacao[Math.floor(Math.random() * arrayParaComparacao.length)];
    guessing.innerHTML = valorApresentado;// como tirar o 'RGB' acrescentado na linha 20?
    document.getElementById('answer').innerText ="Escolha uma cor";
  }
  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', coloringCircles);
}

let score=0;
function chooseBall(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  const scoreElement = document.querySelector('#score');//
  let selectedColor = document.querySelector('.selected').style.backgroundColor;
  const valorApresentado = document.getElementById('rgb-color').innerHTML;
  const textBoxResult = document.getElementById('answer');
    if(valorApresentado === selectedColor) {
    textBoxResult.innerHTML ="Acertou!";
    score += 3;//
  } else {
    textBoxResult.innerHTML ="Errou! Tente novamente!";
    score += 0;//
  }
  scoreElement.innerHTML = "Placar: "+ score;
}

ballsPalette.addEventListener('click', chooseBall);

// function verifyColor() {
//   const selectedBackground = document.querySelector('#rgb-color').innerHTML;
//   const scoreElement = document.querySelector('#score');
//   let score = parseInt(scoreElement.innerHTML, 10);
//   if (event.target.style.backgroundColor === selectedBackground) {
//     const answerElement = document.querySelector('#answer');
//     answerElement.innerHTML = 'Acertou!';
//     score += 3;
//   } else {
//     const answerElement = document.querySelector('#answer');
//     answerElement.innerHTML = 'Errou! Tente novamente!';
//     score += 0;
//   }
//   scoreElement.innerHTML = score.toString();
// },




