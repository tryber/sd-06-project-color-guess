const loadAnswer = document.getElementById('answer');
function funcLoadAnswer() {
  loadAnswer.style.marginLeft = '200px';
  loadAnswer.style.marginTop = '20px';
  loadAnswer.innerText = 'Escolha uma cor';
}


function makeRandomNumber(){
  return Math.ceil(Math.random()*255);
}

function makeRandomColor(){
  const R = makeRandomNumber();
  const G = makeRandomNumber();
  const B = makeRandomNumber();
  const RGB = `rgb(${R}, ${G}, ${B})`;
  return RGB;
}

const getBallsClass = document.querySelectorAll('.ball');
function changeColorBGBalls(){
for (let index = 0; index < getBallsClass.length; index++) {
    getBallsClass[index].style.backgroundColor.makeRandomColor();
    
}
}

window.onload = function() {
  funcLoadAnswer();
  changeColorBGBalls();
};

