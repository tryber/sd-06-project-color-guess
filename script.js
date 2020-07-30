const balls = document.getElementsByClassName('ball')
const divBalls = document.getElementsByClassName('div-balls')
const rgbText = document.getElementById('rgb-color')

let pontuacao = 0;
function rgbAleatorio() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `(${red}, ${green}, ${blue})`;
}

for (let i = 0; i < balls.length; i+= 1) {
  balls[i].style.background = (`rgb${rgbAleatorio()}`);
}
rgbText.innerText = (`${rgbAleatorio()}`)