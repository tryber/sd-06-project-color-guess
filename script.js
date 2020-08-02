const rgbText = document.getElementById('rgb-color');

function randomColor() {
  const R = Math.ceil(Math.random() * 255);
  const G = Math.ceil(Math.random() * 255);
  const B = Math.ceil(Math.random() * 255);
  rgbText.innerHTML = `(${R}, ${G}, ${B})`;
}

window.onload = function () {
  randomColor();
};
