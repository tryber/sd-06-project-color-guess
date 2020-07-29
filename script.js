const rgbParagraph = document.querySelector('#rgb-color');
const ballsDiv = document.querySelectorAll('.ball');

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

const formatRgb = (string) => {
  return string.replace('rgb', '');
};

window.onload = () => {
  const RGB = generateRgb(6);
  const correctColor = getRandomRgbFromArray(RGB);
  fillCircles(RGB);
  rgbParagraph.textContent = formatRgb(correctColor);
};
