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
  var answerArray = [];
  answerArray.push(`rgb${document.getElementById('rgb-color').innerText}`);
  for (let i = 1; i < document.querySelectorAll('.ball').length; i += 1) {
    let newRed = Math.ceil(Math.random() * 255);
    let newGreen = Math.ceil(Math.random() * 255);
    let newBlue = Math.ceil(Math.random() * 255);
    answerArray.push(`rgb(${newRed}, ${newGreen}, ${newBlue})`);
  }
  for (let j = 0; j < document.querySelectorAll('.ball').length; j += 1) {
    let paintBall = Math.ceil(Math.random() * (answerArray.length - 1));
    document.querySelectorAll('.ball')[j].style.backgroundColor = answerArray[paintBall];
    answerArray.splice(paintBall, 1);
  }
}

for (i = 0; i < 6; i += 1) {
  ballGenerate();
}

generateChallenge();
generateAnswers();

for (let i = 0; i < document.querySelectorAll('.ball').length; i += 1) {
  document.querySelectorAll('.ball')[i].addEventListener('click', function () {
    if (document.querySelectorAll('.ball')[i].style.backgroundColor === 'rgb' + document.querySelector('#rgb-color').innerText) {
      document.querySelector('#answer').innerText = 'Acertou!';
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    }
  });
}
