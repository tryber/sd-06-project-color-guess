let score = 0;

function ballGenerate() {
  const newBall = document.createElement('div');
  newBall.className = 'ball';
  document.querySelector('.ball-container').appendChild(newBall);
}

function generateChallenge() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  document.getElementById('rgb-color').innerText = `(${red}, ${green}, ${blue})`;
}

function generateAnswers() {
  let answerArray = [];
  answerArray.push(`rgb${document.getElementById('rgb-color').innerText}`);
  for (let i = 1; i < document.querySelectorAll('.ball').length; i += 1) {
    const newRed = Math.ceil(Math.random() * 255);
    const newGreen = Math.ceil(Math.random() * 255);
    const newBlue = Math.ceil(Math.random() * 255);
    answerArray.push(`rgb(${newRed}, ${newGreen}, ${newBlue})`);
  }
  for (let j = 0; j < document.querySelectorAll('.ball').length; j += 1) {
    let paintBall = Math.ceil(Math.random() * (answerArray.length - 1));
    document.querySelectorAll('.ball')[j].style.backgroundColor = answerArray[paintBall];
    answerArray.splice(paintBall, 1);
  }
}

for (let i = 0; i < 6; i += 1) {
  ballGenerate();
}

generateChallenge();
generateAnswers();

document.getElementById('score').innerText = score;

for (let i = 0; i < document.querySelectorAll('.ball').length; i += 1) {
  document.querySelectorAll('.ball')[i].addEventListener('click', function () {
    if (document.querySelectorAll('.ball')[i].style.backgroundColor === `rgb${document.querySelector("#rgb-color").innerText}`) {
      document.querySelector('#answer').innerText = 'Acertou!';
      score += 3;
      document.getElementById('score').innerText = score;
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    }
  });
}

document.getElementById('reset-game').addEventListener('click', function () {
  document.getElementById('answer').innerText = 'Escolha uma cor';
  generateChallenge();
  generateAnswers();
});
