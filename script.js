function generateRandomRGBColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = 'rgb(';
  const comma = ',';
  const closeBrackets = ')';
  return rgb + r + comma + g + comma + b + closeBrackets;
}

for (let i = 0; i < 6; i += 1) {
  document.getElementsByClassName('ball')[i].style.backgroundColor = generateRandomRGBColor();
}