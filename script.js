const rgbParagraph = document.querySelector('#rgb-color');
const ballsDiv = document.querySelectorAll('.ball');
// const guessDiv = document.querySelector('.guess-container');
const answerP = document.querySelector('#answer');
const scoreP = document.querySelector('#score');
const resetGame = document.querySelector('#reset-game');

const getRandomRgbFromArray = (array) => {
  const index = Math.ceil(Math.random() * (array.length - 1));
  return array[index];
};

const randomColorsGenerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const generateRgb = (number) => {
  const RGBs = [];

  for (let i = 0; i < number; i += 1) {
    RGBs.push(randomColorsGenerator());
  }

  return RGBs;
};

const fillCircles = (RGB) => {
  ballsDiv.forEach((item, index) => {
    item.style.backgroundColor = RGB[index];
  });
};

const formatRgb = (str) => str.replace('rgb', '');

const setAnswer = (hit) => {
  switch (true) {
    case (hit === 0):
      answerP.textContent = 'Errou! Tente novamente!';
      break;
    case (hit === 1):
      answerP.textContent = 'Acertou!';
      break;
    default:
      answerP.textContent = 'Escolha uma cor';
      break;
  }
};

const setScore = (score) => {
  scoreP.textContent = `Placar: ${score}`;
};

let RGB = generateRgb(6);
let correctColor = getRandomRgbFromArray(RGB);
fillCircles(RGB);
rgbParagraph.textContent = formatRgb(correctColor);
console.log(RGB);
setAnswer();
let score = 0;
setScore(score);

const once = {
  once: true,
};

ballsDiv.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === correctColor) {
      score += 3;
      setScore(score);
      setAnswer(1);
      event.preventDefault();
    } else if (score > 0) {
      score -= 1;
      setScore(score);
      setAnswer(0);
      event.preventDefault();
    } else {
      setAnswer(0);
    }
  }, once);
});

resetGame.addEventListener('click', () => {
  RGB = generateRgb(6);
  correctColor = getRandomRgbFromArray(RGB);
  fillCircles(RGB);
  rgbParagraph.textContent = formatRgb(correctColor);
  console.log(RGB);
  setAnswer();
  setScore(score);
});
