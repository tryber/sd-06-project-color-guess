// Iniciando Projeto

let colorContainer = document.querySelector('#color-container');

function randomRGB () {
  let colorR = Math.round(Math.random() * 255);
  let colorG = Math.round(Math.random() * 255);
  let colorB = Math.round(Math.random() * 255);

  return ('rgb(' + colorR + ', ' + colorG + ', ' + colorB + ')')
}

function generateColors (numberOfColors) {
  let colorArr = [];
  for (cont = 0; cont < numberOfColors; cont += 1) {
    let newColor = randomRGB();
    colorArr.push(newColor);
  }
  return(colorArr) 
}

function createBalls () {
  let ball = document.createElement('div');
  ball.className = 'ball';
  return ball;
}

function appendBalls (array) {
  for (index in array) {
    let newBall = (createBalls());
    console.log(newBall)
    newBall.style.backgroundColor = array[index];
    colorContainer.appendChild(newBall);
  }
}
let colorArr = generateColors(6)
appendBalls(colorArr);

function selectColor () {
 let selected = Math.round(Math.random() * 6);
 return selected
}

let selected = selectColor();
selected = colorArr[selected]

let rgbText = document.querySelector('#rgb-color');
rgbText.innerHTML = selected
  

// function appendBalls (num) {
//  for (cont = 0; cont < num; cont += 1)
//  colorContainer.appendChild(createBalls());
// }