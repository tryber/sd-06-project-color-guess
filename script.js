const rgbText = document.getElementById('rgb-color');
// const score = document.getElementById('score');
const answer = document.getElementById('answer');
// const btnDificuldade = document.getElementById('dificuldade');
const reset = document.getElementById('reset-game');
const divBalls = document.getElementById('container-balls');
const balls = document.querySelectorAll('.ball');

function gerarCor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `(${red}, ${green}, ${blue})`;
}

for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.backgroundColor = (`rgb${gerarCor()}`);
}
const number = Math.floor(Math.random() * 6);
const color = balls[number].style.backgroundColor;
let text = '';
for (let i = 3; i < color.length; i += 1) {
  text += color[i];
}
rgbText.innerHTML = text;

divBalls.addEventListener('click', (e) => {
  const escolhido = e.target;
  const rgbCorreto = `rgb${rgbText.innerHTML}`;
  if (escolhido.style.backgroundColor === rgbCorreto) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
});

reset.addEventListener('click', () => {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = (`rgb${gerarCor()}`);
  }
  const number = Math.floor(Math.random() * 6);
  const color = balls[number].style.backgroundColor;
  let text = '';
  for (let i = 3; i < color.length; i += 1) {
    text += color[i];
  }
  rgbText.innerHTML = text;
  answer.innerHTML = 'Escolha uma cor';
});
