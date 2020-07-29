const rgbParagraph = document.querySelector('#rgb-color');
const ballsDiv = document.querySelectorAll('.ball');
const answerP = document.querySelector('#answer');

const getRandomRgbFromArray = (array) => {
  const index = Math.ceil(Math.random() * array.length);
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

const RGB = generateRgb(6);
const correctColor = getRandomRgbFromArray(RGB);
fillCircles(RGB);
rgbParagraph.textContent = formatRgb(correctColor);
console.log(RGB)
answerP.textContent = 'Escolha uma cor';
let score = 0;

ballsDiv.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === correctColor) {
      score += 3;
      console.log(score)
    } else if (score > 0) {
      score -= 1;
      console.log(score)
    }
  });
});
