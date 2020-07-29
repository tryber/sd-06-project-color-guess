//window.onload = function() {
  const rgbText = document.querySelector('#rgb-color');
  //const text = generateRandomColor();
  rgbText.innerHTML = generateRandomColor();
//}
const ballsContainer = document.querySelector('.balls-container');

function generateBalls(){
  const randomNum = Math.floor(Math.random() * 6);
  console.log(randomNum);
  for (let i = 0 ; i < 6 ; i += 1){
    let divBall = document.createElement('div');
    divBall.classList.add('ball');
    if (i === randomNum){
      divBall.style.backgroundColor = `rgb${rgbText.innerHTML}`;
    }else {
      divBall.style.backgroundColor = `rgb${generateRandomColor()}`;
    }
    ballsContainer.appendChild(divBall);

  }

}
generateBalls();

function generateRandomColor(){
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const generateColor = `(${red},${blue},${green})`;

  return generateColor;
}


