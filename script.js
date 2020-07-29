window.onload = function() {
  const rgbText = document.querySelector('#rgb-color');
  //const text = generateRandomColor();
  rgbText.innerHTML = generateRandomColor();
}

function generateRandomColor(){
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const generateColor = `(${red},${blue},${green})`;

  return generateColor;
}


console.log(generateRandomColor());