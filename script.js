const color = document.querySelector('#rgb-color');
const ballsDiv = document.querySelector('.balls');
const answer = document.querySelector('#answer');
const paragraph = document.createElement('p');

// Gerando cor a ser adivinhada
function generateColorScore() {
  color.innerHTML = colorsBoard();
}
generateColorScore();

// Cor do placar para ser advinhada
function colorsBoard() {
  const first = Math.ceil((Math.random()) * 256);
  const second = Math.ceil((Math.random()) * 256);
  const third = Math.ceil((Math.random()) * 256);
  return 'rgb(' + first + ', ' + second + ', ' + third + ')';
}

// Colocando a cor do placar numa posição aleatória dentre as 6 bolas
function aleatColor() {
  const cores = document.querySelectorAll('.ball');
  const position = Math.ceil(Math.random() * 5);
  cores[position].style.background = color.innerHTML;
}

// Gerando as outras 5 aleatórias
function generateColors(limit) {
  for (let index = 0; index < limit; index += 1) {
    const cor = document.createElement('div');
    cor.className = 'ball';
    cor.style.background = colorsBoard();
    ballsDiv.appendChild(cor);
  }
  aleatColor();
}
generateColors(6);

// Padrões de Respostas
function answers() {  
  paragraph.innerHTML = 'Escolha uma cor';
  answer.appendChild(paragraph);
}
answers();

// Resposta se a pessoa acertar/errar a cor
function rightColor(event) {
const click = event.target;
if ((click.style.background) === color.innerHTML) {
  paragraph.innerHTML = 'Acertou!';
} else {
  paragraph.innerHTML = 'Errou! Tente novamente!'
};
}
ballsDiv.addEventListener('click', rightColor);
