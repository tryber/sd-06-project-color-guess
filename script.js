function RandomGenerator8Bits() {
  const valores = [];
  const primeiroValor = Math.ceil(Math.random()*2);
  for (let i = 0; i < 3; i += 1) {
    if (i === 0) {
      valores.push(primeiroValor);
    }
    if (i >= 1) {
      const DemaisValores = Math.ceil(Math.random()*5);
      valores.push(DemaisValores);
    }
  }
  return (valores.join(''));
}

function generateRandomColorCode() {
  const parameters = [];
  for (let i = 0; i < 3; i += 1) {
    parameters.push(RandomGenerator8Bits());
  }
  const numero = parameters.join(',');
  return `(${numero})`;
}

function generateElements(n) {
  for(i = 0; i < n; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    document.getElementById('balls-container').appendChild(ball);
  }
}

function paintBalls() {
  let balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    let ball = balls[i];
    let codigoCorGerada = generateRandomColorCode();
    ball.style.backgroundColor = `rgb${codigoCorGerada}`;
  }
}

function updateGuessPresentation (answer) {
  let  answerFirstSlice = [];
  let answerSecondSlice =  getNumbers(answer).substr(0,3) + ', ' + getNumbers(answer).substr(4,3) + ', ' + getNumbers(answer).substr(8,3)
  let editedAnswer ;
  for (let i in answer) {
    if (i < 3) {
      answerFirstSlice.push(answer[i]);
    }
  }
  editedAnswer =  answerFirstSlice.join('').toUpperCase() + " (" + answerSecondSlice + ")"
  document.getElementById('rgb-color').innerText = editedAnswer ;
}



function chooseRandomAnswer() {
  const balls = document.querySelectorAll('.ball');
  const choiceIndex = Math.ceil(Math.random()*(balls.length-1));
  const backgroundColor = balls[choiceIndex].style.backgroundColor;
  return `${backgroundColor}`
}

function getNumbers (element) {
  let newElement = [] ;
  for(let i in element) {
    if (Number(element[i]) === Number(element[i] || element[i] === '')  ) {
      newElement.push(element[i]);
    }
  }
  return  newElement.join('')
}

function getResult (result) {
  let currentScoreBoard ;
  if (result === 'Acertou!') {
    currentScoreBoard = 3;
  }
  else {
    currentScoreBoard = 0
  }
  return currentScoreBoard;
}

function generateCurrentScore (currentResult) {
  const board = document.createElement('div');
  board.id = 'current-score';
  board.innerText = currentResult;
  main = document.getElementById('main');
  main.appendChild(board);
}

function setTotalScore () {
  const totalScoreElement = document.getElementById('score');
  const currentScore = document.getElementById('current-score').innerText;
  let currentScorePoints = Number(currentScore)
  let totalScorePoints;
  if (getNumbers(totalScoreElement.innerText) == " ") {
    totalScorePoints = 0;
  } else {
    totalScorePoints  = Number(getNumbers(totalScoreElement.innerText));
    totalScorePoints += currentScorePoints;
  }
  totalScoreElement.innerText = `${(totalScorePoints)}`;
}

function removeCurrentScore() {
  document.getElementById('current-score').remove();
}

function compareElements(e,answer) {
  const responseColor = e.currentTarget.style.backgroundColor;
  const response = ` (${getNumbers(responseColor)})`;
  const correctAnswer = ` (${getNumbers(answer)})`;
  let gameResultText;
  if ( response === correctAnswer) {
    gameResultText= 'Acertou!';
  } else {
      gameResultText= 'Errou! Tente novamente!';
  }
  document.querySelector('#answer').innerText = gameResultText ;
  generateCurrentScore(getResult(gameResultText));
  setTotalScore();
  removeCurrentScore();
}

function removeAnswersEvents () {
  const balls = document.querySelectorAll('.ball');
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  document.querySelector('#rgb-color').innerText = 'RGB color';
  balls.forEach((element) => {element.removeEventListener('click', function()
  {}
  )});
}

function newAnswersEvents () {
  const balls = document.querySelectorAll('.ball');
  const answer = chooseRandomAnswer();
  updateGuessPresentation(answer);
  balls.forEach((element) => {element.addEventListener('click', (e) => {
    compareElements(e,answer);
  })})
}

function resetGame() {
  paintBalls();
  removeAnswersEvents();
  newAnswersEvents();
}

function restartEvents () {
  resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', (e) => {
    resetGame();
  })
}

window.onload = () => {
  generateElements(6);
  paintBalls();
  newAnswersEvents();
  restartEvents();
}

