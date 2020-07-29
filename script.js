const rgbParagraph = document.querySelector('#rgb-color');

const randomColorsGenerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `(${red}, ${green}, ${blue})`;
};

const generateRgb = (number) => {
  const RGBs = [];

  for (let i = 0; i < number; i += 1) {
    RGBs.push(randomColorsGenerator());
  }

  return RGBs;
};

window.onload = () => {
  rgbParagraph.textContent = generateRgb(1);
};
